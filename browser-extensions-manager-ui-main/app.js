import { dataExtension } from './data.js';

const container = document.querySelector('.extension-container');
// container.innerHTML = '';

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
        <button class='remove-button js-remove-button' data-idx="${idx}"> remove </button>
        <button class="myToggleButton${ext.isActive ? ' active' : ''}" data-idx="${idx}">
          ${ext.isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    `;
    container.appendChild(box);
  });
}
renderExtensionList();

// Event delegation for remove and active buttons
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-remove-button')) {
    const idx = e.target.getAttribute('data-idx');
    dataExtension.splice(idx, 1); // Remove the extension
    renderExtensionList();        // Re-render the list
  }
  if (e.target.classList.contains('myToggleButton')) {
    const idx = e.target.getAttribute('data-idx');
    dataExtension[idx].isActive = !dataExtension[idx].isActive;
    renderExtensionList();
  }
});