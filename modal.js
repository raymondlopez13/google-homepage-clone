function displayModal() {
    let el = document.getElementById("menu1");
    if(el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    }
    else {
        el.classList.add('hidden');
    }
}