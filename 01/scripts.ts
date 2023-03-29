import { Baleia } from "./Baleia";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

const boris = new Cachorro("Boris", 10, 0.4, 0.8);
const tom = new Gato("Tom", 4, 0.4, 0.6);
const baleia = new Baleia("Baleia", 500, 2, 10);

console.log(boris.latir());
console.log(boris.andar());
console.log(boris.comer());
console.log(tom.miar());
console.log(baleia.nadar());
