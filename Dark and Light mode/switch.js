const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const sunContainer = document.getElementById('sunContainer');
const moonContainer = document.getElementById('moonContainer');
let heading=document.getElementById("head");

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    let check=sunContainer.classList.toggle('active');
    moonContainer.classList.toggle('active');
    if(check===true){
        heading.textContent="Switched to LightMode";
        heading.style.color="black";
    }else{
         heading.textContent="Switched to DarkMode";
         heading.style.color="white";
    }
});