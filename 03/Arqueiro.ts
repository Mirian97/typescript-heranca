import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
  flechas: number;

  constructor(nome: string) {
    super(nome);
    this.flechas = 5;
  }

  lancarFlechas(): string {
    if (this.flechas === 0) {
      return "Não há mais flechas";
    }
    this.flechas -= 1;
    return "Flecha lançada";
  }

  construirFlechas() {
    this.flechas += 1;
  }
}
