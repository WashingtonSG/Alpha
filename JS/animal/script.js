function createElement(element, info) {
  const newElement = document.createElement(element);

  if(element == "img") {
    newElement.src = info;
  }

  else if (info != ""){
    const newInfo = document.createTextNode(info);
    newElement.appendChild(newInfo);
  }
  return newElement;

}

function fillSectionAbout() {
  const aboutMe = document.getElementById("about-me");
  const name = createElement("h1","Washington De Souza Gacho");
  const address = createElement("h3", "Aracaju-SE");
  const age = createElement("h4", "25 anos")
  const description = document.createElement("div");
  const washingtonImg = document.createElement("img");
  washingtonImg.src = "assets/img/washington.jpeg";
  washingtonImg.id = "washington-img";
  aboutMe.appendChild(washingtonImg);
  description.appendChild(name);
  description.appendChild(address);
  description.appendChild(age);
  description.id = "about-me-description"
  aboutMe.appendChild(description);
}

function imgsCards(imgsNames) {
  const baseDir = "assets/img/";
  const imageContainer = document.getElementById("image-container");
  const animalSection = document.getElementById("animal-description");

  for (let i = 0; i < imgsNames.length; i++) {
    let src = baseDir + imgsNames[i] + ".jpg";
    let img = createElement("img", src);
    imageContainer.append(img);
  }

  animalSection.append(imageContainer);
}

function fillAnimalDescription() {
  const animalDescriptionSection = document.getElementById("animal-description");
  const title = createElement("h2", "Características");

  const paragraph = createElement("p",
  "O ratel (Mellivora capensis) é uma espécie da família Mustelidae que chama a atenção por ser um dos animais mais ferozes e destemidos do mundo. Endêmicos de regiões da África e Ásia, estes animais de porte relativamente pequeno são capazes de enfrentar predadores muito maiores que eles, como leões.");

  const paragraph2 = createElement("p",
  "O Ratel ou texugo do mel, é nativo da África Subsaariana, Oriente Médio e Índia. Devido ao seu corpo ser resistente, os texugos do mel podem se adaptar bem em ambientes variados, tanto em florestas tropicais, quanto em montanhas. ")
  const paragraph3 = createElement("p",
  "Por ser um animal onívoro, o texugo do mel se alimenta de frutas, ovos, pequenos seres vivos como cobras e pequenos mamíferos, como raposas e leopardos. Mesmo que não ganhe a luta, ele não desiste de suas presas.")

  animalDescriptionSection.append(title);
  animalDescriptionSection.append(paragraph);
  animalDescriptionSection.append(paragraph2);
  animalDescriptionSection.append(paragraph3);
}
function fillFooter() {
  const footer = document.querySelector("footer");
  const link = createElement("a","saiba mais sobre o ratel");
  const link2 = createElement("a", "Ratel curiosidades ");
  footer.append(link);
  footer.append(link2);
}
fillSectionAbout();
imgsCards(["ratel-animal","Ratel","une-ratel","ratel-tiger"]);
fillAnimalDescription();
fillFooter();
