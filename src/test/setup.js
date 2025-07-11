import '@testing-library/jest-dom';
const style = document.createElement('style');
style.innerHTML = `
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
  }
`;
document.head.appendChild(style);