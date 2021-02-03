// TODO: write code here

const fileEl = document.querySelector('.overlapped');
const previewEl = document.querySelector('[data-id=preview]');
const dropArea = document.querySelector('[data-id=drop-area]');

dropArea.addEventListener('click', () => {
    fileEl.dispatchEvent(new MouseEvent('click'));
});

fileEl.addEventListener('change', (evt) => {
  const files = Array.from(evt.currentTarget.files);

  const file = files[0];

  if (file.type.startsWith('image/')) {
    previewEl.src = URL.createObjectURL(file);
    previewEl.addEventListener('load', () => {
      URL.revokeObjectURL(previewEl.src);
    });

    const a = document.createElement('a');
    a.download = file.name;
    a.href = URL.createObjectURL(file);
    console.log(a.href);
    a.rel = 'noopener';
    setTimeout(() => URL.revokeObjectURL(a.href), 60000);
    setTimeout(() => a.dispatchEvent(new MouseEvent('click')));
  } else if (file.type.startsWith('text/')) {
    readFile(file).then(data => textPreviewEl.value = data);
  }
});

