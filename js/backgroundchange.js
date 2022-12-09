/*getting elements*/

const background = document.querySelector(".calc-block5");
const character1 = document.querySelector(".character1");
const character2 = document.querySelector(".character2");
const character3 = document.querySelector(".character3");

/*setting listener*/

character1.addEventListener("click", change);
character2.addEventListener("click", change2);
character3.addEventListener("click", change3);

function change(){
	const h3Change = document.querySelector(".h3-changeable");
	const pChange = document.querySelector(".p-changeable");
	h3Change.innerHTML = "Wraith";
	background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/character2.jpg)";
	pChange.innerHTML = "O Wraith é um Assassino furtivo, capaz de camuflar e desnudar ao toque de seu Sino das Lamentações. Ele se concentra em rastrear e caçar Sobreviventes, tornando mais fácil capturá-los e matá-los.";
	if(background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/character2.jpg)"){
		background.style.backgroundPosition = "40%";
	}
	if (window.innerWidth < 700){
	const story = document.querySelector(".characters-section").getBoundingClientRect();
	window.scrollBy(story);
	}

}

function change2(){
	const h3Change = document.querySelector(".h3-changeable");
	const pChange = document.querySelector(".p-changeable");
	h3Change.innerHTML = "Huntress";
	pChange.innerHTML = "A Huntress é uma Assassina de longo alcance, capaz de lançar Machados de Caça nos Sobreviventes para feri-los à distância. Suas vantagens giram em torno da caça da presa, para rastrear e encontrar para que ela possa chegar perto o suficiente para matar.";
	background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/character3.jpg)";

	if(background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/character3.jpg)"){
	 background.style.backgroundPosition = "center";
	}
	if (window.innerWidth < 700){
	const story = document.querySelector(".characters-section").getBoundingClientRect();
	window.scrollBy(story);
	}

}

function change3(){
	const h3Change = document.querySelector(".h3-changeable");
	const pChange = document.querySelector(".p-changeable");
	h3Change.innerHTML = "Legion";
	pChange.innerHTML = "Legion é um bando de Assassinos impiedosos, capazes de derrubar Sobreviventes indefesos com seu poder, Feral Frenzy. Ataques feitos durante seu frenesi infligem danos internos prolongados, derrubando quaisquer Sobreviventes que não sejam rápidos o suficiente para reagir.";
	background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/fold-character.jpg)";

	if(background.style.backgroundImage = "url(../Downloads/../assets/../projeto1/sources/fold-character.jpg)"){
	 background.style.backgroundPosition = "center";
	}

	if (window.innerWidth < 700){
	const story = document.querySelector(".characters-section").getBoundingClientRect();
	window.scrollBy(story);
	}
}