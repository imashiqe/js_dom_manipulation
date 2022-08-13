const secttions = document.querySelectorAll('section');
for(const section of secttions){
   section.style.border = '2px solid  red';
   section.style.marginBottom = '5px';
   section.style.borderRadius = '15px';
   section.style.paddingLeft = '7px';
   section.style.backgroundColor = 'lightgray';
}
const PlacesContainer = document.getElementById('places-title');
PlacesContainer.style.backgroundColor = 'yellow';

const PlacesContainer = document.getElementById('places-title');
PlacesContainer.classList.add(yellow)

const PlacesContainer = document.getElementById('places-container');
PlacesContainer.classList.add('text-center');
PlacesContainer.classList.remove('large-text');