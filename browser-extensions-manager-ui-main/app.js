import { dataExtension } from './data.js';

console.log(dataExtension[1])

const container = document.querySelector('.extension-container');

// generate webpage HTML


 function renderExtensionList(filter) {
  container.innerHTML = '';
  let filtered = dataExtension; // Default to all extensions

  // Correctly filter the array based on the 'filter' parameter
  if (filter === 'active') {
    filtered = dataExtension.filter(ext => ext.isActive);
  } else if (filter === 'inactive') {
    filtered = dataExtension.filter(ext => !ext.isActive);
  }

  // Iterate over the filtered array to render the extensions
  filtered.forEach((ext, idx) => {
    const box = document.createElement('div');
    document.body.classList.add('activebutton')
    box.className = 'extension-box';
    box.innerHTML = `
      <div class="extension-info">
        <img src="${ext.logo}" alt="${ext.name}" width="40" height="40">
        <div class="extension-details">
          <p class="extension-name">${ext.name}</p>
          <p>${ext.description}</p>
        </div>
      </div>
      <div class="extension-setting">
        <button class='remove-button js-remove-button' data-idx="${idx}">Remove</button>
       
       <div class="activated-button${ext.isActive ? ' active' : ''}" data-idx="${idx}">
        <button class="myToggleButton${ext.isActive ? ' active' : ''}"  data-idx="${idx}"></button>

        </div>
      </div>
    `;
    container.appendChild(box);
  });
}

// Initial render of all extensions
renderExtensionList("all");

// Event delegation for remove and active buttons from the container
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-remove-button')) {
    const idx = e.target.getAttribute('data-idx');
    dataExtension.splice(idx, 1); // Remove the extension
    renderExtensionList();        // Re-render the list
  }
  // my toggle Button
  if (e.target.classList.contains('activated-button')) {
    let idx = e.target.getAttribute('data-idx');
    dataExtension[idx].isActive = !dataExtension[idx].isActive; // CHANCHING THE TRUE TO FLASE
    console.log(dataExtension[idx].isActive )
    renderExtensionList();
  }
});

// the moon daylight button funtion


let htmlDayMoon = document.querySelector('.js-moon-sunlight-display');
htmlDayMoon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        htmlDayMoon.innerHTML = `<img src="./assets/images/icon-moon.svg" alt="Moon icon for dark mode">`;
    } else {
        htmlDayMoon.innerHTML = `<img src="./assets/images/icon-sun.svg" alt="Sun icon for light mode">`;
    }
});

// Get filter buttons
const btnAll = document.getElementById('btnAll');
const btnActive = document.getElementById('btnActive');
const btnInactive = document.getElementById('btnInactive');


let clikable = document.querySelector('.js-sub-header');
clikable.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnAll')) {
        renderExtensionList("all");
    }
    if (e.target.classList.contains('btnActive')) {
        renderExtensionList("active");
    }
    if (e.target.classList.contains('btnInactive')) {
        renderExtensionList("inactive");
    }

})


