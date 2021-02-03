// TODO: write code here

console.log('app.js bundled');
// TODO: write code here

const fileEl = document.querySelector('.overlapped');
const overlapEl = document.querySelector('.overlap');
const previewEl = document.querySelector('[data-id=preview]');
const textPreviewEl = document.querySelector('[data-id=text-preview]')


const dropEl = document.querySelector('[data-id=drop-area]');

dropEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    fileEl.dispatchEvent(new MouseEvent('click'));
  });


dropEl.addEventListener('dragover', (evt) => {
  evt.preventDefault();
});

dropEl.addEventListener('drop', (evt) => {
  evt.preventDefault(); 
    fileEl.files = evt.dataTransfer.files;
    fileEl.dispatchEvent(new Event('change'));
});



fileEl.addEventListener('change', (evt) => {
  const files = Array.from(evt.currentTarget.files);
  files.forEach(file => {
    if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        previewEl.insertAdjacentElement('afterbegin', img);
      }
  });
});


