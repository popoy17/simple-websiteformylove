const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeheyyyy, Click the heart emoji. I have a surprise for you";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZnZ3NxazVxdmI1MmkzaXJjOG10c2MwY245azV6cGkxaWZjam9ydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/euW6JDwrMn0BqyNC8t/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

const showLetter = () => {
  var letter = document.getElementById("letter-container");
  if (letter.style.opacity === "0") {
    letter.style.opacity = "1";
  } else {
    letter.style.opacity = "0";
  }
};