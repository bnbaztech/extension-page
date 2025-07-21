import { dataExtension } from './data.js';

const container = document.querySelector('.extension-container');

function renderExtensionList() {
  container.innerHTML = '';
  dataExtension.forEach((ext, idx) => {
    const box = document.createElement('div');
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
       
       <div class="activated-button">
        <button class="myToggleButton${ext.isActive ? ' active' : ''}"  data-idx="${idx}"></button>
       </div>
      </div>
    `;
    container.appendChild(box);
  });
}
renderExtensionList();

// Event delegation for remove and active buttons from the container
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-remove-button')) {
    const idx = e.target.getAttribute('data-idx');
    dataExtension.splice(idx, 1); // Remove the extension
    renderExtensionList();        // Re-render the list
  }
  if (e.target.classList.contains('myToggleButton')) {
    let idx = e.target.getAttribute('data-idx');
    console.log(idx)
    dataExtension[idx].isActive = !dataExtension[idx].isActive;
    renderExtensionList();
  }
});

// the moon daylight button funtion

let htmlDayMoon = document.querySelector('.js-moon-sunlight-display');
htmlDayMoon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  console.log(document.body.classList.toggle('day-mode'));
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.add('dark-mode')
    htmlDayMoon.innerHTML = `<img src="./assets/images/icon-moon.svg" alt="">`;
  } else {
    document.body.classList.remove('body.dark-mode')
    // document.body.classList.remove('.header-day-mode')
    htmlDayMoon.innerHTML = `<img src="./assets/images/icon-sun.svg" alt="">`;
  }
});