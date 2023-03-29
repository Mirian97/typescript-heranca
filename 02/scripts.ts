import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const juninho = new Aluno({
  nome: "Juninho",
  email: "jr@cubos.com",
  telefone: 1212121212,
  senha: "12345",
});

const guido = new Professor({
  nome: "Guido",
  email: "guido@cubos.com",
  telefone: 382837847,
  senha: "123456",
});

guido.lancarNota(juninho, 10);
guido.lancarNota(juninho, 9);
guido.lancarNota(juninho, 8);
console.log(juninho.obterMedia());
console.log(juninho);
console.log(guido.autenticar("123456"));
