// Ref : https://github.com/mchaov/WebWorkers
const worker = new Worker('/web-worker.js');

const sendBtn = document.querySelector('#btn-send');
sendBtn.addEventListener('click', evt => {
  evt.preventDefault();

  worker.postMessage({
    type: 'MSG',
    date: new Date().getDate(),
  });
});
