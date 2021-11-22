function createElement(element, info) {
  if(element == "img") {
    const newElement = document.createElement(element);
    newElement.src = info;
    return newElement;
  }

  const newElement = document.createElement(element);
  const newInfo = document.createTextNode(info);
  newElement.appendChild(newInfo);
  return newElement;
}

function sectionAbout() {
  const aboutMe = document.getElementById("about-me");
  const name = createElement("h1","Washington De Souza Gacho");
  const address = createElement("h3", "Aracaju-SE");
  const age = createElement("h4", "25 anos")
  const description = document.createElement("div");
  const washingtonImg = document.createElement("img");
  washingtonImg.src = "assets/img/washington.jpeg";
  washingtonImg.id = "washington-img";
  description.appendChild(name);
  description.appendChild(address);
  description.appendChild(age);
  description.id = "about-me-description"
  aboutMe.appendChild(description);
  aboutMe.appendChild(washingtonImg);
}
function createList(array) {
  const list = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    let listNode = document.createElement("li");
    listNode.append(array[i]);
    list.append(listNode);
  }
  return list;
}
function insertMusics() {
  const shamanMusics = ["Fairy Tale", "Time Will Come", "For tomorrow" ];
  const angraMusics = ["Carry On", "Angels Cry", "I Will Return"];
  const soloMusics = ["Letting go", "How Long", "Time To Be Free"];
  const shamanList = createList(shamanMusics);
  const angraList = createList(angraMusics);
  const soloList = createList(soloMusics);
  const bandContainer = document.querySelectorAll(".andre-matos-container");
  bandContainer[0].append(angraList);
  bandContainer[1].append(shamanList);
  bandContainer[2].append(soloList);
}
function imgsCards() {
  const idSelectors = ["#angra-container", "#shaman-container","#solo-container"]; 
  const baseDir = "assets/img/";
  const name = document.querySelector("#name");
  name.innerHTML = "André Matos";
  const imgsName = ["andre-matos", "shaman", "angra"];

  for (let i = 0; i < imgsName.length; i++) {
    let src = baseDir + imgsName[i] + ".jpg";
    let id = idSelectors[i];
    let img = createElement("img", src)
    let container = document.querySelector(id);
    container.append(img);
  }

}

sectionAbout();
imgsCards();
insertMusics();