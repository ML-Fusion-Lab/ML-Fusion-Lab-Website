document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to ML Fusion Lab!");
});

let navSecond = document.getElementById('second-nav');
let flag = 0;

function activeNav(){

    if (flag == 0) {
        navSecond.style.display = 'block'
        flag += 1;
    }
    else{
        navSecond.style.display = 'none';
        flag -= 1;
    }
} 

