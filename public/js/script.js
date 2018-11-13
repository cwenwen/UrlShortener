const q = selecror => document.querySelector(selecror);

q('body').addEventListener('click', e => {
  // create short url
  if (e.target.classList.contains('btn__create')) {
    const url = q('.input').value;

    if (url !== '') {
      const xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          q('.url__long').innerText = url;
          q('.url__short').innerText = `http://url.wenwen.tw/s/${xhr.responseText}`;
          q('.btn__copy').style.display = 'inline-block';
        }
      }
      xhr.open('POST', '/');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(`longUrl=${url}`);
    }
  }

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