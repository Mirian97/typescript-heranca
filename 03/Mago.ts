import { Personagem } from "./Personagem";

export class Mago extends Personagem {
  magia: number;

  constructor(nome: string) {
    super(nome);
    this.magia = 5;
  }

  usarMagia(): string {
    if (this.magia === 0) {
      return "Magia indisponivel";
    }
    this.magia -= 1;
    return "Magia usada";
  }

  criarMagia() {
    this.magia += 1;
  }
}
