let nomeHeroi = "argilax"
let nivelDeXp = 10001
let ranking = ""

if (nivelDeXp <= 1000) {
    ranking = "Ferro"
    console.log("O herói de nome " + nomeHeroi + "  está no nivel de " + ranking)
    
}
else if (nivelDeXp <= 2000) {
     ranking = "Bronze"
    console.log("O herói de nome " + nomeHeroi + "  está no nivel de " + ranking)
} 
else if (nivelDeXp <= 5000) {
      ranking = "Prata"
    console.log("O herói de nome " + nomeHeroi + "  está no nivel de " + ranking)
} 
else if (nivelDeXp <= 7000) {
    ranking = "Ouro"
    console.log("O herói de nome " + nomeHeroi + "  está no nivel de " + ranking)

}
else if (nivelDeXp <= 8000) {
    ranking = "Platina"
    console.log("O herói de nome " + nomeHeroi + " está no nivel de " + ranking)
}    
else if (nivelDeXp <= 9000) {
    ranking = "Ascendente"
    console.log("O herói de nome " + nomeHeroi + " está no nivel de " + ranking)
}
else if (nivelDeXp <= 10000) {
    ranking = "Imortal"
    console.log("O herói de nome " + nomeHeroi + " está no nivel de " + ranking)

}
else if (nivelDeXp >= 10001) {
    ranking = "Radiante"
    console.log("O herói de nome " + nomeHeroi + " está no nivel de " + ranking)
}