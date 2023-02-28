import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsString({ message: 'O nome precisa ser uma string' })
  @MinLength(2, { message: 'O nome precisa ter no mínimo 2 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome: string;

  @EmailEhUnico({ message: 'Já existe um usuário com esse email' })
  @IsEmail(undefined, { message: 'O email informado é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres' })
  senha: string;
}
