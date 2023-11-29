function getTitleText(element) {
  return element.querySelector('.title').textContent.trim();
}

function getReviewText(element) {
  return element.querySelector('.text').textContent.trim();
}

function isSpoiler(titleText, reviewText) {
  /* MODEL IMPLEMENTION */  


  /* FOR DEMO */
  return titleText === 'Crazy in every sense';

}

function hideSpoiler(element) {
  element.innerHTML = '<h1><i>Spoiler detected and removed by the extension </i></h1>';
}

function processChildElement(childElement) {
  const titleText = getTitleText(childElement);
  const reviewText = getReviewText(childElement);

  if (isSpoiler(titleText, reviewText)) {
    hideSpoiler(childElement);
  }

  console.log('Title:', titleText);
  console.log('Review:', reviewText);
  console.log('------------------------');
}

function removeSpoiler() {
  const listerListDivs = document.querySelectorAll('.lister-list');

  listerListDivs.forEach(function (listerListDiv) {
    const childElements = listerListDiv.children;

    Array.from(childElements).forEach(function (childElement) {
      processChildElement(childElement);
    });
  });
}

removeSpoiler();

