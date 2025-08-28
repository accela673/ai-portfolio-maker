import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './resume.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('jwt-auth')
  @ApiOperation({ summary: 'Создать резюме' })
  @Post('new')
  create(@Body() dto: CreateResumeDto, @Req() req) {
    return this.resumeService.createResume(+req.user.id, dto);
  }
}
