const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counter = document.getElementById('counter');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const comments = document.querySelector('.comments');
const submit = document.querySelector('#submit');
let count = 0;
let intervalID;

plus.addEventListener('click', ()=>{
    counter.innerHTML = count += 1;
});

minus.addEventListener('click', ()=>{
    counter.innerHTML = count -= 1;
});

document.addEventListener('DOMContentLoaded', ()=>{
    intervalID = setInterval(()=>{
        counter.innerHTML = count += 1;
}, 1000);
});

heart.addEventListener('click', ()=>{
    const like = document.querySelector('.likes');
    const li = document.createElement('li');
    li.innerHTML = count;
    like.appendChild(li);
});

pause.addEventListener('click', ()=>{
    if(pause.innerHTML === 'pause'){
        clearInterval(intervalID);
        pause.innerHTML = 'resume';
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        
    } else {
        intervalID = setInterval(()=>{
            counter.innerHTML = count += 1;
        },1000);
        pause.innerHTML = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    }
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

submit.addEventListener('click', ()=>{
    const p = document.createElement('p');
    p.innerHTML = input.value;
    comments.appendChild(p);
    input.value = '';
});