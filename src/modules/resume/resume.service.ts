import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResumeDto } from './resume.dto';

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async createResume(userId: number, dto: CreateResumeDto) {
    return this.prisma.resume.create({
      data: {
        ...dto,
        userId,
      },
    });
  }
}
