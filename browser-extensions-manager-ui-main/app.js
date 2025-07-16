import { dataExtension } from './data.js';

const container = document.querySelector('.extension-container');
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
      <button class='remove-button'> remove </button>
      <button class="myToggleButton${ext.isActive ? ' active' : ''}" data-idx="${idx}">
        ${ext.isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  `
  container.appendChild(box);
});

// Toggle active state on click
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('myToggleButton')) {
    const idx = e.target.getAttribute('data-idx');
    dataExtension[idx].isActive = !dataExtension[idx].isActive;
    e.target.classList.toggle('active');
    e.target.textContent = dataExtension[idx].isActive ? 'Active' : 'Inactive';
  }
});