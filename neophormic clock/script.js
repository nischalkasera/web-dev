const deg = 6;
const hour_new = document.querySelector("#hr");
const min_new = document.querySelector("#min");
const sec_new = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour_new.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min_new.style.transform = `rotateZ(${mm}deg)`;
  sec_new.style.transform = `rotateZ(${ss}deg)`;
});
