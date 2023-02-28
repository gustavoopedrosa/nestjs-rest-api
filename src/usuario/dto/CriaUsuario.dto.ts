import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsString({ message: 'O nome precisa ser uma string' })
  @MinLength(2, { message: 'O nome precisa ter no mínimo 2 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres' })
  senha: string;
}
