const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];

export function animateHouse(house) {
  // Add highlight
  houses.forEach((house) => {
    if (exception !== house || exception === "hogwarts") document.querySelector(`#${house}-colour`).classList.add("opacity-50");
  });

  // Animate part
  document.querySelector(`#${house}-part`).classList.add("animate");
}

export function unanimateHouse(house) {
  // Remove hightlight
  houses.forEach((house) => {
    document.querySelector(`#${house}-colour`).classList.remove("opacity-50");
  });

  // Unanimate part
  document.querySelector(`#${house}-part`).classList.remove("animate");
}
