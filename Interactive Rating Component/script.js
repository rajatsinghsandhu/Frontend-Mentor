const oneRating = document.querySelector('.one-rating');
const twoRating = document.querySelector('.two-rating');
const threeRating = document.querySelector('.three-rating');
const fourRating = document.querySelector('.four-rating');
const fiveRating = document.querySelector('.five-rating');
const submitBtn = document.querySelector('.submit-btn');
oneRating.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');
  if (!oneRating.classList.contains('active')) {
    oneRating.classList.add('active');
    twoRating.classList.remove('active');
    threeRating.classList.remove('active');
    fourRating.classList.remove('active');
    fiveRating.classList.remove('active');
  }
});
twoRating.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');
  if (!twoRating.classList.contains('active')) {
    oneRating.classList.remove('active');
    twoRating.classList.add('active');
    threeRating.classList.remove('active');
    fourRating.classList.remove('active');
    fiveRating.classList.remove('active');
  }
});
threeRating.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');
  if (!threeRating.classList.contains('active')) {
    oneRating.classList.remove('active');
    twoRating.classList.remove('active');
    threeRating.classList.add('active');
    fourRating.classList.remove('active');
    fiveRating.classList.remove('active');
  }
});
fourRating.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');
  if (!fourRating.classList.contains('active')) {
    oneRating.classList.remove('active');
    twoRating.classList.remove('active');
    threeRating.classList.remove('active');
    fourRating.classList.add('active');
    fiveRating.classList.remove('active');
  }
});
fiveRating.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');
  if (!fiveRating.classList.contains('active')) {
    oneRating.classList.remove('active');
    twoRating.classList.remove('active');
    threeRating.classList.remove('active');
    fourRating.classList.remove('active');
    fiveRating.classList.add('active');
  }
});
submitBtn.addEventListener('click', () => {
  let numRating;
  if (document.querySelector('.active')) {
    document.querySelector('.home-page').classList.add('hide');
    setTimeout(() => {
      document.querySelector('.home-page').style.display = 'none';
      document.querySelector('.thank-you-page').style.display = 'flex';
    }, 500);
    setTimeout(() => {
      document.querySelector('.thank-you-page').classList.add('show');
    }, 1000);
    if (document.querySelector('.active').className.includes('one')) {
      numRating = 1;
    } else if (document.querySelector('.active').className.includes('two')) {
      numRating = 2;
    } else if (document.querySelector('.active').className.includes('three')) {
      numRating = 3;
    } else if (document.querySelector('.active').className.includes('four')) {
      numRating = 4;
    } else if (document.querySelector('.active').className.includes('five')) {
      numRating = 5;
    }
    document.querySelector(
      '.selected-rating-container'
    ).textContent = `You selected ${numRating} out of 5`;
  }
});
