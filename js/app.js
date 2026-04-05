"use strict";

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`${selector} class does not exist`);
};

const navBtn = getElement(".nav-btn");
const navLinks = getElement(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show--links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
