import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupUserResolver } from './group-user.resolver';

@Module({
  imports: [CommonModule],
  providers: [GroupResolver, GroupService, GroupUserResolver],
  exports: [GroupService],
})
export class GroupModule {}
