window.onload = function digital_fn() {
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event) {
        // console.log(toggle);
        collapse.classList.toggle('active');
    });

    //search toggle

    let searchToggle = document.querySelector('#nav .search-icon');
    let searchInput = document.querySelector('#nav .search-input input');

    searchToggle.addEventListener('click', function(event) {
        collapse.classList.toggle('d-none');
        searchInput.classList.toggle('dis-block');
        console.log(searchInput);
    })

    //mansory js

    let grid = document.querySelector("#site-main .recent-work .images-flex");
    let msnry = new Masonry(grid, {
        itemSelector: ".flex-item",
        gutter: 100,
        fitWidth: true
    })
}