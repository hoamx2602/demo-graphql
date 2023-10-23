import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, Message, User } from '../common/schema';
import { FileUpload } from 'graphql-upload-ts';
import { Model } from 'mongoose';
import { AuthService } from 'src/common/auth/services/auth.service';

import { CreateMessageInput } from './dto/input/create-message.input';
import { AddNewMessageInput } from './dto';
import { AwsService } from 'src/common/aws/aws.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
    private readonly authService: AuthService,
    private awsService: AwsService,
  ) {}

  async createMessage(user: User, createMessageInput: CreateMessageInput) {
    const newMessage = await this.messageModel.create({
      content: createMessageInput.content,
      group_id: createMessageInput.groupId,
      message_type: createMessageInput.messageType,
      recipient_id: createMessageInput.recipientId,
    });
    return newMessage;
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({
      email,
    });
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findOneAndDelete({ _id: id });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async createNewMessage(
    user: User,
    uploadMediaInput: AddNewMessageInput,
    path?: string,
  ) {
    if (uploadMediaInput.recipientId === user._id.toString()) {
      throw new BadRequestException('User cannot send message for yourself');
    }

    if (!uploadMediaInput.groupId && !uploadMediaInput.recipientId) {
      throw new BadRequestException('Message has no the destination');
    }

    if (uploadMediaInput.groupId) {
      const isGroupHasCurrentUser = await this.groupMemberModel.findOne({
        group_id: uploadMediaInput.groupId,
        user_id: user._id,
      });

      if (!isGroupHasCurrentUser) {
        throw new BadRequestException(
          `This current user don\'t belong to a groupId: ${uploadMediaInput.groupId}`,
        );
      }
    }

    if (
      uploadMediaInput.groupId &&
      uploadMediaInput.replyType === 'reply' &&
      uploadMediaInput.recipientId
    ) {
      throw new BadRequestException(
        `Cannot send message to a specific user in group chat`,
      );
    }

    if (
      (uploadMediaInput.replyType === 'quote' ||
        uploadMediaInput.replyType === 'thread') &&
      !uploadMediaInput.parentMessageId
    ) {
      throw new BadRequestException(
        'Quote message or thread message must has the parentId',
      );
    }

    if (
      uploadMediaInput.replyType === 'reply' &&
      uploadMediaInput.parentMessageId
    ) {
      throw new BadRequestException("Normal reply don't need the parentId");
    }

    const newMessage = await this.messageModel.create({
      content: uploadMediaInput.content || null,
      group_id: uploadMediaInput.groupId || null,
      message_parent_id: uploadMediaInput.parentMessageId || null,
      sender_id: user._id,
      recipient_id: uploadMediaInput.recipientId,
      message_type: path ? 'media' : 'text',
      media_url: path || null,
    });

    return newMessage;
  }

  async uploadMediaMessage(media: FileUpload): Promise<string> {
    const keyFile = `messages/${media.filename}`;

    try {
      const uploaded = await this.awsService.uploadFileToS3(
        media.createReadStream(),
        keyFile,
        media.mimetype,
      );
      return uploaded.key;
    } catch (error) {
      throw new Error('Upload failed!');
    }
  }
}
