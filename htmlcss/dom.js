console.log('DOM.js');

const div = document.createElement('div');
div.innerText = 'innerText';
div.style.backgroundColor = 'red';
div.style.color = 'white';

const span = document.createElement('span');
div.append(span);
span.innerHTML = '<br>Span: <strong>strong</strong>';

document.body.append(div);

const btn = document.createElement('button');
btn.textContent = 'BTN';
document.body.append(btn);

function toUpper(ele) {
  ele.innerText = ele.innerText.toUpperCase();
}

btn.addEventListener('click', evt => {
  // alert('BTN clicked!');
  const bbb = document.getElementById('li2');
  toUpper(bbb);
  const ul = document.querySelector('.bg-yellow');
  const aaa = ul.firstElementChild;
  toUpper(aaa);
  const ccc = ul.lastElementChild;
  toUpper(ccc);

  if (div.classList.contains('show')) {
    div.classList.remove('show');
    div.classList.add('hide');
  } else {
    div.classList.add('show');
    div.classList.remove('hide');
  }
});

console.log(div.textContent);
console.log(div.innerText);
console.log(div.innerHTML);
