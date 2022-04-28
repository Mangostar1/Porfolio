let box1 = document.getElementsByClassName('about-box')[0];
let box2 = document.getElementsByClassName('about-box')[1];
let box3 = document.getElementsByClassName('about-box')[2];

let prev1 = document.getElementById('prev1');
let prev2 = document.getElementById('prev2');
let prev3 = document.getElementById('prev3');

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let next3 = document.getElementById('next3');

let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');

box1.style.display = 'block';
box2.style.display = 'none';
box3.style.display = 'none';
dot1.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';

prev1.onclick = () => {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
}

next1.onclick = () => {
    box1.style.display = 'none';
    box3.style.display = 'none';
    box2.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

prev2.onclick = () => {
    box2.style.display = 'none';
    box3.style.display = 'none';
    box1.style.display = 'block';

    dot1.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

next2.onclick = () => {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
}

prev3.onclick = () => {
    box1.style.display = 'none';
    box3.style.display = 'none';
    box2.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

next3.onclick = () => {
    box2.style.display = 'none';
    box3.style.display = 'none';
    box1.style.display = 'block';

    dot1.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

//dots

dot1.onclick = () =>{
    box2.style.display = 'none';
    box3.style.display = 'none';
    box1.style.display = 'block';

    dot1.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

dot2.onclick = () =>{
    box1.style.display = 'none';
    box3.style.display = 'none';
    box2.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
    dot3.style.cssText = 'background-color: grey; transform: scale(1);';
}

dot3.onclick = () =>{
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';

    dot1.style.cssText = 'background-color: grey; transform: scale(1);';
    dot2.style.cssText = 'background-color: grey; transform: scale(1);';
    dot3.style.cssText = 'background-color: #2743F5; transform: scale(1.2);';
}