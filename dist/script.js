const url = "https://api.adviceslip.com/advice";
const adviceCont = document.querySelector(".adviceCont");
const dice = document.querySelector(".dice-cont");

const setAd = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      adviceCont.textContent = `" ${data.slip.advice} "`;
    })
    .catch(() => {
      adviceCont.textContent = "Error fetching message";
    });
};

dice.addEventListener("click", () => {
  adviceCont.textContent = "Loading...";
  setAd();
});
