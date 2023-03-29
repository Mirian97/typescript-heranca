import { Usuario, UsuarioEscolar } from "./Usuario";

export class Aluno extends UsuarioEscolar {
  private notas: number[] = [];

  constructor(usuario: Usuario) {
    super(usuario);
  }

  obterMedia(): number {
    let somaDeNotas = this.notas.reduce(
      (total, notaAtual) => total + notaAtual
    );
    const media = somaDeNotas / this.notas.length;
    return media;
  }

  set setNotas(nota: number) {
    this.notas.push(nota);
  }
}
