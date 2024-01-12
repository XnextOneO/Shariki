document.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('header');
    let headerTitle = document.querySelector('.header-title');

    if (window.scrollY <= header.offsetHeight) {
        headerTitle.style.opacity = '1';
        headerTitle.style.visibility = 'visible';
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > header.offsetHeight) {
            let contentHeader = document.querySelector('.content-header');
            let headerTitle = document.querySelector('.header-title');

            contentHeader.style.top = '-30px';
            contentHeader.style.opacity = '1';
            headerTitle.style.opacity = '0';
            headerTitle.style.visibility = 'hidden';
        } else {
            let contentHeader = document.querySelector('.content-header');
            let headerTitle = document.querySelector('.header-title');

            contentHeader.style.top = '50px';
            contentHeader.style.opacity = '1';
            headerTitle.style.opacity = '1';
            headerTitle.style.visibility = 'visible';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let selectHeader = document.getElementById('select-header');
    let selectOptions = document.querySelector('.select-options');

    selectHeader.addEventListener('click', function () {
        selectOptions.classList.toggle('show-options');
    });


    selectOptions.addEventListener('click', function (e) {
        if (e.target.classList.contains('option')) {
            let selectedValue = e.target.getAttribute('data-value');
            selectHeader.textContent = e.target.textContent;
            selectOptions.classList.remove('show-options');
            console.log('Выбрана дата: ' + selectedValue);
        }
    });

});

(() => {
    let blocks = document.querySelectorAll(".main-block");

    blocks.forEach((block) => {
        block.addEventListener("click", (e) => {
            let slideBlock = block.querySelector(".main-block__down");
            let arrow = block.querySelector(".arrow");

            if (!slideBlock.classList.contains('open')) {
                slideBlock.style.display = 'block';
                slideBlock.style.maxHeight = slideBlock.scrollHeight + "px";


                setTimeout(() => {
                    slideBlock.style.transition = 'max-height 1s ease-out';
                    slideBlock.style.maxHeight = '1000px';
                }, 10);

                arrow.classList.add('open');
            } else {
                slideBlock.style.transition = 'max-height 0.3s ease-out';
                slideBlock.style.maxHeight = '0';
                arrow.classList.remove('open');

                setTimeout(() => {
                    slideBlock.style.display = 'none';
                }, 300);
            }

            slideBlock.classList.toggle('open');
        });
    });
})();


document.addEventListener('DOMContentLoaded', function () {
    let search__input = document.getElementById('search__input');
    let search_content = document.getElementById('search-content');
    let catalog__button = document.getElementById('catalog__button');

    search__input.addEventListener('input', function () {
        let searchText = search__input.value.trim();

        if (searchText !== '') {
            search_content.style.display = 'block';
        } else {
            search_content.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        let isClickInsideSearch = search_content.contains(event.target);
        let isClickInput = (event.target === search__input);
        let isClickcatalog__button = (event.target === catalog__button);

        if (!isClickInsideSearch && !isClickInput && !isClickcatalog__button) {
            search_content.style.display = 'none';
        }
    });

    catalog__button.addEventListener('click', function () {
        search_content.style.display = 'none';
    });
});

document.addEventListener('click', function (event) {
    let search_content = document.getElementById('search-content');
    let isClickInsideSearch = search_content.contains(event.target);

    if (!isClickInsideSearch) {
        search_content.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    let catalog__button = document.getElementById('catalog__button');
    let catalog_content_id = document.getElementById('catalog-content-id');
    let catalog__buttonIcon = catalog__button.querySelector('img');

    catalog__button.addEventListener('click', function (event) {
        event.stopPropagation();

        if (catalog_content_id.style.display === 'block') {
            catalog_content_id.style.display = 'none';
            catalog__buttonIcon.setAttribute('src', '../assets/icons/catalog-button-icon.svg');
        } else {
            catalog_content_id.style.display = 'block';
            catalog__buttonIcon.setAttribute('src', '../assets/icons/iconsclose.svg');
        }
    });


    document.addEventListener('click', function (event) {
        let isClickInside = catalog_content_id.contains(event.target);
        let isClickInput = (event.target === catalog__button);

        if (!isClickInside && !isClickInput) {
            catalog_content_id.style.display = 'none';

            catalog__buttonIcon.setAttribute('src', '../assets/icons/catalog-button-icon.svg');
        }
    });


});


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');


    burgerMenuBtn.addEventListener('click', function () {
        fullScreenMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });


    closeMenuBtn.addEventListener('click', function () {
        fullScreenMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});



