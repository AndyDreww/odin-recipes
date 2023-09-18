window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
        document.getElementById('top-btn').classList.add('show');
    } else {
        document.getElementById('top-btn').classList.remove('show');  
    }
})