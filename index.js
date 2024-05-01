function calcRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

let resultado = calcRanking(85, 30);
console.log(resultado);

/*
let nome, nivel, xp;

nome = "Boss";
xp = 4000;

while (xp) {
    if (xp <= 1000) {
        nivel = "Ferro";
        break;
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
        break;
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
        break;
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
        break;
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
        break;
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
        break;
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
        break;
    } else {
        nivel = "Radiante";
        break;
    }
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);

*/