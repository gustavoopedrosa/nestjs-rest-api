import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';
import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
