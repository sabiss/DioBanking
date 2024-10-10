import { ContaEmpresarial } from "./class/ContaEmpresarial";
import { ContaPessoal } from "./class/ContaPessoal";

const contaSabrina: ContaPessoal = new ContaPessoal("Sabrina Bezerra");
const contaDiome: ContaEmpresarial = new ContaEmpresarial("DIO.me");

contaSabrina.deposit(10);
console.log(contaSabrina.getSaldo());

contaSabrina.depositWithBonus(50);
console.log(contaSabrina.getSaldo());

contaDiome.deposit(7000);
console.log(contaDiome.getLoan(500));

console.log(contaDiome.getSaldo());

contaDiome.desativarConta();
console.log(contaDiome.getLoan(10));
