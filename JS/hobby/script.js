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
  const games = document.createElement("img");
  const hobbiesImages = document.createElement("div");
  const cloud = document.createElement("img");
  const dotnet = document.createElement("img");
  const ML = document.createElement("img");
  const wearable = document.createElement("img");
  const industry4 = document.createElement("img");
  const AI = document.createElement("img");

  AI.classList.add("hobby");
  games.classList.add("hobby");
  cloud.classList.add("hobby");
  dotnet.classList.add("hobby");
  ML.classList.add("hobby");
  industry4.classList.add("hobby");
  AI.classList.add("hobby");
  dotnet.classList.add("hobby");
  wearable.classList.add("hobby");
  
  AI.src = "assets/img/AI.jpg"
  games.src = "assets/img/games.jpeg";
  cloud.src = "assets/img/cloud.jpg";
  dotnet.src = "assets/img/dotnet.png";
  industry4.src = "assets/img/industry4.jpg";
  wearable.src = "assets/img/wearable.jpeg";
  ML.src = "assets/img/ML.png";
  hobbiesImages.id = "hobbies-images";


  hobbySection.appendChild(hobbyTitle);

  hobbiesImages.appendChild(AI);
  hobbiesImages.appendChild(games);
  hobbiesImages.appendChild(dotnet);
  hobbiesImages.appendChild(industry4);
  hobbiesImages.appendChild(cloud);
  hobbiesImages.appendChild(wearable);

  hobbySection.appendChild(hobbiesImages);
  hobbySection.appendChild(hobbiesImages);
  
  console.log(typeof(hobbySection))
}

sectionAbout()
hobby()