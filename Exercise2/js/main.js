function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementsByTagName("button")[0].addEventListener("click", function(){
  let colorGen = getRandomHexColor();
  document.getElementsByTagName("div")[0].style.backgroundColor = colorGen;
  document.getElementById("result-color").innerText = colorGen;
});
