document.body.style.backgroundImage = "url(fon.jpg)";
document.body.style.backgroundSize = 'cover';

const pole = document.createElement('input');
pole.style.height = "25px";
pole.style.width = "500px";
pole.style.fontFamily = 'Trebuchet MS'
pole.style.marginLeft = "490px";
pole.style.fontSize = '20px';
pole.style.marginTop = '50px';
pole.style.borderRadius = '10px';
pole.style.border = "3px #4f4f4f solid";



const button = document.createElement('button');
button.style.borderRadius = "250px";
button.style.height = "500px";
button.style.width = "500px";
button.style.marginLeft = "500px";
button.style.marginTop = "40px";
button.textContent = 'Click to ROLL';
button.style.fontSize = "120px";
button.style.fontFamily = 'Trebuchet MS';
button.style.border = "5px #4f4f4f solid";
button.style.color = "#f08400";


const actions = [
    () => {
        button.style.color = '#fbff00df';
        button.style.backgroundImage = "url('gifs/Yes.gif')";
        button.textContent = 'Yes!';
        button.style.backgroundSize = 'cover';
    },
    () => {
        button.style.color = '#020000ee';
        button.style.backgroundImage = "url('gifs/NotNow.gif')";
        button.textContent = 'No.';
        button.style.backgroundSize = 'cover';
    },
    () => {
        button.style.color = '#a100c1e3';
        button.style.backgroundImage = "url('gifs/Maybe.gif')";
        button.textContent = 'Maybe?';
        button.style.backgroundSize = 'cover';
    },
    () => {
        button.style.color = '#b300d7e5';
        button.style.backgroundImage = "url('gifs/No.gif')";
        button.textContent = 'Not now...';
        button.style.backgroundSize = 'cover';
    }
];


button.addEventListener('click', () => {
    
    const text = pole.value.trim();

    if (text === "" || !text.endsWith('?')) {
        alert('Insert question or check (?) symbol in the end of input area. ');
    } 
    else {
        const randomIndex = Math.floor(Math.random() * actions.length);
        actions[randomIndex]();
    }
});

document.body.appendChild(pole);
document.body.appendChild(button);
