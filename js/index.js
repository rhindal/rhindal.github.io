const docBody = document.querySelector('body');

const macSection = document.createElement('section');
macSection.className = "macSection";

docBody.appendChild(macSection);

const image1 = document.createElement('img')
image1.src = "images\Wonderbritons.png";
macSection.appendChild(image1);

const image2 = document.createElement('img')
image2.src = "images\Wonderfranks.png";
macSection.appendChild(image2);

const image3 = document.createElement('img')
image3.src = "images/Wonderitalians.png";
macSection.appendChild(image3);

const image4 = document.createElement('img')
image4.src = "images\Wondermagyars.png";
macSection.appendChild(image4);