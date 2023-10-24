import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class AwsService {
  private client;
  private bucket;
  private s3Url;
  constructor(private readonly configService: ConfigService) {
    this.client = new S3({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_KEY_ID'),
      region: configService.get('AWS_REGION'),
    });
    this.bucket = configService.get('AWS_BUCKET_NAME');
    this.s3Url = configService.get('AWS_S3_URL');
  }

  //   async uploadFileToS3(localFilePath: any, key: string, contentType: string) {
  //     const params = {
  //       Bucket: this.bucket,
  //       Key: key,
  //       Body: createReadStream(localFilePath),
  //       ContentType: contentType,
  //     };

  //     try {
  //       const url = await this.client.upload(params).promise();
  //       return url;
  //     } catch (error) {
  //       throw new Error(`Error uploading file to S3: ${error.message}`);
  //     }
  //   }

  async uploadFileToS3(file, key: string, contentType: string) {
    const params = {
      Bucket: this.bucket,
      Key: key,
      Body: file,
      ContentType: contentType,
    };

    try {
      const url = await this.client.upload(params).promise();
      return url;
    } catch (error) {
      console.log(error);
      throw new Error(`Error uploading file to S3: ${error.message}`);
    }
  }

  getFullPath(path: string) {
    return `${this.s3Url}/${path}`;
  }
}
