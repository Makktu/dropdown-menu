import './style.css';
import showDropdown from './showDropdown.js';

console.log('working stiff!');

export const menu = document.querySelector('.menu');
const dropBtn = document.querySelector('.dropBtn');
dropBtn.addEventListener('mouseover', () => {
    showDropdown(`<a href="#">Link 1</a>
    <a href="#">Link 2</a>
      <a href="#">Link 3</a>
  <a href="#">Link 1</a>
    <a href="#">Link 2</a>
      <a href="#">Link 3</a>`);
});

//
