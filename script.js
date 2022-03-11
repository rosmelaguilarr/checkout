let cont = 0;

const validateNumber = (btn) =>{
    if (btn.classList.contains("add") && parseInt(btn.nextElementSibling.value) < 0) {
        btn.nextElementSibling.value = 0;
    }
    if (btn.classList.contains("decrease") && parseInt(btn.previousElementSibling.value) < 0) {
        btn.previousElementSibling.value = 0;
    }
}

document.addEventListener("click", e => {

    if (e.target.matches(".add")) {
        cont =  parseInt(e.target.nextElementSibling.value);
        e.target.nextElementSibling.value = cont + 1;
        validateNumber(e.target);

    }
    if (e.target.matches(".decrease")) {
        cont =  parseInt(e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = cont - 1;
        validateNumber(e.target);
    }
});

