document.addEventListener('click', ({target}) => {
    if (target.matches('.logo') || target.matches('#home-link')) {
        location.href = '/';
    }
})