import { Animal } from "./Animal";

export class Cachorro extends Animal {
  constructor(
    protected nome: string,
    protected peso: number,
    protected altura: number,
    protected comprimento: number
  ) {
    super(nome, peso, altura, comprimento);
  }

  latir() {
    return "Cachorro Latindo";
  }
}
