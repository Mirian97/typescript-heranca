import { Aluno } from "./Aluno";
import { Usuario, UsuarioEscolar } from "./Usuario";

export class Professor extends UsuarioEscolar {
  constructor(usuario: Usuario) {
    super(usuario);
  }

  lancarNota(aluno: Aluno, nota: number) {
    aluno.setNotas = nota;
  }
}
