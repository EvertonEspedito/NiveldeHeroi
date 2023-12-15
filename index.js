
//Nome  Do Heroi e seu XP//

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let heroieXp = ["Everton",9253]

//Tomada de Decisão Sobre XP//


if (heroieXp[1] < 1000 ) {//Se XP for menor do que 1.000 = Ferro
    heroieXp[1] = "Ferro"

} else if(heroieXp[1] >= 1001 && heroieXp[1] <= 2000) {//Se XP for entre 1.001 e 2.000 = Bronze
    heroieXp[1] = "Bronze"

} else if (heroieXp[1] >= 2001 && heroieXp[1] <= 6000) {//Se XP for entre 2.001 e 6.000 = Prata
    heroieXp[1] = "Prata"

} else if (heroieXp[1] >= 6001 && heroieXp[1] <= 7000) {//Se XP for entre 6.001 e 7.000 = Ouro
    heroieXp[1] = "Ouro"

} else if (heroieXp[1] >= 7001 && heroieXp[1] <= 8000) {//Se XP for entre 7.001 e 8.000 = Platina
    heroieXp[1] = "Platina"

}else if (heroieXp[1] >= 8001 && heroieXp[1] <= 9000) {//Se XP for entre 8.001 e 9.000 = Ascendente
    heroieXp[1] = "Ascendente"
    
}else if (heroieXp[1] >= 9001 && heroieXp[1] <= 10000) {//Se XP for entre 9.001 e 10.000= Imortal
    heroieXp[1] = "Imortal"
    
}else if (heroieXp[1] >= 10001) {//Se XP for maior ou igual a 10.001 = Radiante
    heroieXp[1] = "Radiante"
    
}

//## Saída

//Ao final deve se exibir uma mensagem:

console.log("O Herói de nome " + heroieXp[0] + " está no nível de " + heroieXp[1] )