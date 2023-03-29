import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const mago = new Mago("Harry Potter");
const arqueiro = new Arqueiro("Peeta");

console.log(mago);
console.log(arqueiro);
arqueiro.andar();
arqueiro.andar();
console.log(arqueiro.lancarFlechas());
console.log(arqueiro.lancarFlechas());
console.log(arqueiro.construirFlechas());
console.log(arqueiro);
