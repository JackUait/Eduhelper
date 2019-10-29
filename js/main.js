let desc = document.querySelector('.desc');
let list = document.querySelector('.list');
let list__item = document.querySelector('.list__item');
let sublist = document.querySelector('.sublist');

desc.addEventListener('click', function() {
    list.classList.toggle('is-opened');
})

list__item.addEventListener('click', function() {
    sublist.classList.toggle('is-opened');
})
