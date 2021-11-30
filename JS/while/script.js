function test() {
  let times = document.getElementById("times").value;
  const phrase = document.getElementById("phrase").value;
  const result = document.getElementById("result");
  const clearCount = document.getElementById("clear-count");
  let phraseCount = 0, clearChalkboardCount = 0;

  result.innerHTML = ""
  
  while(times>0) {
    --times;
    ++phraseCount;
    clearChalkboardCount =  writePhrase(result,phrase,phraseCount, clearCount, clearChalkboardCount);
  }
}

function writePhrase(element ,phrase, phraseCount, clearCount, clearChalkboardCount) {
  if(phraseCount % 11 == 0){
    element.innerHTML = ""
    ++clearChalkboardCount;
    clearCount.innerHTML = String(clearChalkboardCount);
  }
  else
    element.innerHTML += phrase + "<br />";
  
  return clearChalkboardCount;
}