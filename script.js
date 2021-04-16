const bar = document.getElementById("bar");
window.onscroll = () => {
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let barHeight = (window.pageYOffset / totalHeight) * 100;
  console.log(barHeight);
  bar.style.height = barHeight + "%";
};
