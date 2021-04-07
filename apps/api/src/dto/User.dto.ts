import {
  // IsInt,
  // Min,
  // Max,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  validate,
} from 'class-validator';
import { plainToClass, Expose } from 'class-transformer';

export interface registerData {
  userName?: number | string;
  password?: string;
  repassword?: string;
}

export interface loginData {
  userName?: number | string;
  password?: string;
}

export class registerParamDto {
  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(4, {
    message: 'username is too short',
  })
  @MaxLength(15, {
    message: 'username is too long',
  })
  userName!: string;

  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'password is too short',
  })
  @MaxLength(20, {
    message: 'password is too long',
  })
  password!: string;

  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'repassword is too short',
  })
  @MaxLength(20, {
    message: 'repassword is too long',
  })
  repassword!: string;

  validate() {
    return validate(this, {
      enableDebugMessages: true,
      skipMissingProperties: true,
    });
  }

  static create(data: registerData) {
    return plainToClass(registerParamDto, data, {
      strategy: 'excludeAll',
    });
  }
}

export class loginParamDto {
  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(4, {
    message: 'username is too short',
  })
  @MaxLength(15, {
    message: 'username is too long',
  })
  userName!: string;

  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'password is too short',
  })
  @MaxLength(20, {
    message: 'password is too long',
  })
  password!: string;

  validate() {
    return validate(this, {
      skipMissingProperties: true,
    });
  }

  static create(data: registerData) {
    return plainToClass(registerParamDto, data, {
      strategy: 'excludeAll',
    });
  }
}
