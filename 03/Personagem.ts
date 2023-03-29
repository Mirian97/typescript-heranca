export class Personagem {
  protected nome: string;
  protected velocidade: number;

  constructor(nome: string) {
    this.nome = nome;
    this.velocidade = 0;
  }

  andar(): number {
    return (this.velocidade += 1);
  }

  parar(): number {
    return (this.velocidade = 0);
  }
}
