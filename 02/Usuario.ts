export type Usuario = {
  nome: string;
  email: string;
  telefone: number;
  senha: string;
};

export class UsuarioEscolar {
  protected nome: string;
  protected email: string;
  protected telefone: number;
  private senha: string;

  constructor({ nome, email, telefone, senha }: Usuario) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;
  }

  autenticar(senha: string): string {
    if (senha === this.senha) {
      return "Usuario logado";
    }
    return "Senha invalida";
  }
}
