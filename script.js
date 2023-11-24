const heroName = "Mashed Potatoes";
let heroExp = 90000;
const message = "O Herói de nome "+ heroName + " está no nível";
const showHeroLevel = document.querySelector(".showHero");

if(heroExp <= 1000){
  showHeroLevel.innerText = `${message} Ferro`;
  console.log(`${message} Ferro`);
} else if(heroExp > 1000 && heroExp <= 2000 ){
  showHeroLevel.innerText = `${message} Bronze`
  console.log(`${message} Bronze`);
} else if(heroExp > 2000 && heroExp <= 5000){
  showHeroLevel.innerText = `${message} Prata`
  console.log(`${message} Prata`);
} else if(heroExp > 5000 && heroExp <= 7000){
  showHeroLevel.innerText = `${message} Ouro`
  console.log(`${message} Ouro`);
} else if(heroExp > 7000 && heroExp <= 8000){
  showHeroLevel.innerText = `${message} Platina`
  console.log(`${message} Platina`);
} else if(heroExp > 8000 && heroExp <= 9000){
  showHeroLevel.innerText = `${message} Ascendente`
  console.log(`${message} Ascendente`);
} else if(heroExp > 9000 && heroExp <= 10000){
  showHeroLevel.innerText = `${message} Imortal`
  console.log(`${message} Imortal`);
} else if(heroExp > 10000){
  showHeroLevel.innerText = `${message} Radiante`
  console.log(`${message} Radiante`);
}