let nameHero = "Saturno";
level = 8001;
let classifiedHeroes = [];
let heroLevel;
function heroes(){
 
    //Estrutura de decisão
    if (level < 1000) {
        heroLevel= "Ferro";
    } else if (level >= 1000 && level <= 2000) {
        heroLevel= "Bronze";
    } else if (level > 2000 && level <= 5000) {
        heroLevel= "Prata";
    } else if (level > 5000 && level <= 7000) {
        heroLevel= "Ouro";
    } else if (level > 7000 && level <= 8000) {
        heroLevel= "Platina";
    } else if (level > 8000 && level <= 9000) {
        heroLevel= "Ascendente";
    } else if (level > 9000 && level <= 10000) {
        heroLevel= "Imortal";
    } else {
        heroLevel= "Radiante";
    };

};

function main(){
    heroes();
    console.log(`O Herói de nome ${nameHero} está no nível de ${heroLevel}`);
};

main();