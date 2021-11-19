function newElement(element, info) {
  const newElement = document.createElement(element);
  const newInfo = document.createTextNode(info);
  newElement.appendChild(newInfo);
  return newElement;
}

function sectionAbout() {
  const aboutMe = document.getElementById("about-me");
  const name = newElement("h1","Washington De Souza Gacho");
  const address = newElement("h3", "Aracaju-SE");
  const age = newElement("h4", "25 anos")
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
function hobby() {
  const hobbyTitle = newElement("h2", "A tecnologia é o meu maior hobby");
  const hobbySection = document.getElementById("hobby");
  const img = document.createElement("img");
  const hobbies = document.createElement("div");
  hobbies.id = "hobbies";
  hobbySection.appendChild(hobbyTitle);
  img.src = "assets/img/games.jpg";
  hobbies.appendChild(img);
  hobbySection.appendChild(hobbies);
  img.src = "assets/img/cloud.jpg";
  hobbies.appendChild(img);
  img.src = "assets/img/dotnet.png";
  hobbies.appendChild(img);
  img.src = "assets/img/industry4.jpg";
  hobbies.appendChild(img);
  img.src = "assets/img/ML.png";
  hobbies.appendChild(img);
  img.src = "assets/img/wearable.jpeg";
  img.id = "wearable";
  hobbies.appendChild(img);
}

sectionAbout()
hobby()