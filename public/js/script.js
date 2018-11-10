const q = selecror => document.querySelector(selecror);

q('body').addEventListener('click', e => {
  // create short url
  if (e.target.classList.contains('btn__create')) {}

  // copy short url
  if (e.target.classList.contains('btn__copy')) {
    let text = q('.url__short').innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        /* clipboard successfully set */
        q('.tip').setAttribute("style", "visibility: visible;");
        setTimeout(() => { q('.tip').setAttribute("style", "visibility: hidden;"); }, 300);
      })
      .catch(err => { console.log(err)})
  }
})