const output = document.querySelector(".output");
const messageOut = document.querySelectorAll(".message span");
let score = 0;

output.addEventListener("mouseenter", function () {
  output.style.backgroundColor = "blue";
});

output.addEventListener("mouseleave", function () {
  output.style.backgroundColor = "white";
});

output.addEventListener("mousemove",function(e){
       messageOut[0].innerHTML = e.layerX
       messageOut[1].innerHTML = e.layerY
})

window.addEventListener("DOMContentLoaded", function () {
  let box = document.createElement("div");
  box.classList.add("box");

  output.appendChild(box);

  box.randCol = "#" + Math.random().toString(16).substr(-6);
  box.style.backgroundColor = box.randCol;

  box.x = box.offsetLeft;
  box.y = box.offsetTop;

  box.addEventListener("click", function () {
    score++;
    box.style.backgroundColor = "red";
    messageOut[2].innerHTML = score;
  });

  box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = box.randCol;
  });

  box.steps = Math.floor(Math.random() * 20);
  box.direction = Math.floor(Math.random() * 4);

  window.requestAnimationFrame(move);

  let cos = output.getBoundingClientRect();
  let cos2 = box.getBoundingClientRect();
  console.log(cos, cos2, box.x);
});

function move() {
  let speed = Math.random() * 15 + 10;
  let box = document.querySelector(".box");
  let bound = output.getBoundingClientRect();
  let boxBound = box.getBoundingClientRect();
  box.steps--;
  if (box.steps < 0) {
    box.steps = Math.floor(Math.random() * 20);
    box.direction = Math.floor(Math.random() * 4);
  }

  if (box.direction == 0 && boxBound.right < bound.right) {
    box.x += speed;
  }
  if (box.direction == 1 && boxBound.left > bound.left) {
    box.x -= speed;
  }
  if (box.direction == 2 && boxBound.bottom < bound.bottom) {
    box.y += speed;
  }
  if (box.direction == 3 && boxBound.top > bound.top) {
    box.y -= speed;
  }

  box.style.top = box.y + "px";
  box.style.left = box.x + "px";

  window.requestAnimationFrame(move);
}
