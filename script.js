var ratings = document.querySelectorAll(".rate");
var current_ratings = document.querySelector(".info");

for (var i = 0; i < ratings.length; i++) {

  let current_rate = i + 1;
  var clicked = ratings[i];

  clicked.addEventListener("click", function () {
    ratings = document.querySelectorAll(".rate");

    for (var i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove("selected");
    }

    this.classList.add("selected");
    current_ratings.innerHTML = `${current_rate} out of 5`;
  });

}

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#page-1").classList.add("z-index");
});