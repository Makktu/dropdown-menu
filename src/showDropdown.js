import { menu } from './index.js';

export default function showDropdown(html) {
    const element = document.createElement('div');
    let dropdown = `
    <div class="dropdown-content">
    ${html}
    <p>Click: opens here</p>
    <p>Shift-click: opens in new tab</p>
    </div>
    `;
    element.innerHTML = dropdown;
    menu.appendChild(element);
}
