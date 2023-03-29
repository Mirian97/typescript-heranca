import { Animal } from "./Animal";

export class Baleia extends Animal {
  constructor(
    protected nome: string,
    protected peso: number,
    protected altura: number,
    protected comprimento: number
  ) {
    super(nome, peso, altura, comprimento);
  }

  nadar() {
    return "Baleia Nadando";
  }
}
