import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(
    protected nome: string,
    protected peso: number,
    protected altura: number,
    protected comprimento: number
  ) {
    super(nome, peso, altura, comprimento);
  }

  miar() {
    return "Gato Miando";
  }
}
