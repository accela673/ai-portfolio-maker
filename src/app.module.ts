import { Module, Res } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { EmailModule } from './modules/email/email.module';
import { ResumeModule } from './modules/resume/resume.module';

@Module({
  imports: [AuthModule, UsersModule, EmailModule, ResumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
