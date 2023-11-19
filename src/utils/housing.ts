'use strict';

import { House } from "../interfaces/House";

const houses:House[] = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];

export function animateHouse(part: (House | '')) {
  // Add highlight
  houses.forEach((house) => {
    if (part !== house || part === 'hogwarts') document.querySelector(`#${house}-colour`)?.classList.add('opacity-50');
  });

  // Animate part
  document.querySelector(`#${part}-part`)?.classList.add('animate');
}

export function unanimateHouse(part: House | '') {
  // Remove hightlight
  houses.forEach((house) => {
    document.querySelector(`#${house}-colour`)?.classList.remove('opacity-50');
  });

  // Unanimate part
  document.querySelector(`#${part}-part`)?.classList.remove('animate');
}
