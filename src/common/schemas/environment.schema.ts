import { IsDefined, IsOptional } from 'class-validator';

export class EnvironmentSchema {
  @IsOptional()
  SERVER_PORT: string;

  @IsOptional()
  MICROSERVICES_TCP_PORT: string;

  @IsOptional()
  TYPEORM_POSTGRES_HOST: string;

  @IsOptional()
  TYPEORM_POSTGRES_PORT: string;

  @IsDefined()
  TYPEORM_POSTGRES_DB: string;

  @IsDefined()
  TYPEORM_POSTGRES_USER: string;

  @IsDefined()
  TYPEORM_POSTGRES_PASSWORD: string;
}
