let story = document.getElementById('story');
const font = (initialRem) => {
  let fontSize = initialRem;

  function fontPlus() {
    fontSize *= 1.05;
    update(fontSize);
  }
  function fontMinus() {
    fontSize *= 0.95;
    update(fontSize);
  }

  return { fontPlus, fontMinus };
};
const update = (param) => {
  story.setAttribute(
    'style',
    `font-size: ${param}rem; line-height: ${param * 1.5}rem;`
  );
};

const actual = font(1.2);

document
  .getElementById('fontPlus')
  .addEventListener('click', () => actual.fontPlus());
document
  .getElementById('fontMinus')
  .addEventListener('click', () => actual.fontMinus());
