import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateResumeDto {
  @ApiProperty({ example: 'Backend Developer' })
  @IsString()
  @IsNotEmpty({ message: 'Специальность обязательна' })
  specialty: string;

  @ApiProperty({
    example: 'Работал в компании A с 2023 по 2024, затем в компании B по 2025',
  })
  @IsString()
  @IsNotEmpty({ message: 'Опыт работы обязателен' })
  experience: string;

  @ApiProperty({ example: 'typescript php github jiro' })
  @IsString()
  @IsNotEmpty({ message: 'Навыки обязательны' })
  skills: string;

  @ApiProperty({
    example: 'https://github.com/user, https://linkedin.com/in/user',
  })
  @IsString()
  @IsOptional()
  links: string;
}
