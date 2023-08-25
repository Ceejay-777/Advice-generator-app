const url = "https://api.adviceslip.com/advice";
const adviceCont = document.querySelector(".adviceCont");

const setAd = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      adviceCont.textContent = data.slip.advice;
    })
    .catch(() => {
      adviceCont.textContent = "Error fetching message";
    });
};

setAd();
