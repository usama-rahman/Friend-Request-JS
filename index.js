const istatus = document.querySelector('h4');

const removeBtn = document.querySelector('#remove');

const addBtn = document.querySelector('#add');


addBtn.addEventListener("click", function(){
    istatus.innerHTML="Friends";
    istatus.style.color = "green"
})

removeBtn.addEventListener("click", function(){
    istatus.innerHTML="Stranger";
    istatus.style.color = "red"
})