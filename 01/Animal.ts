export class Animal {
  constructor(
    protected nome: string,
    protected peso: number,
    protected altura: number,
    protected comprimento: number
  ) {}

  andar(): string {
    return "Animal Andando";
  }

  comer(): string {
    return "Animal Comendo";
  }
}
