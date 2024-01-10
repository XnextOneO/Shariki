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
    let blocks = document.querySelectorAll(".main__block");
    blocks.forEach((block) => {
        block.addEventListener("click", (e) => {
            let slideBlock = block.querySelector(".main__block--down");
            let arrow = block.querySelector(".arrow");

            if (!slideBlock.classList.contains('open')) {
                slideBlock.classList.add('open');
                arrow.classList.add('open');
            } else {
                slideBlock.classList.remove('open');
                arrow.classList.remove('open');
            }
        });
    });
})();

document.addEventListener('DOMContentLoaded', function () {
    let searchInput = document.getElementById('searchInput');
    let searchContent = document.getElementById('searchContent');
    let catalogButton = document.getElementById('catalogButton');

    searchInput.addEventListener('input', function () {
        let searchText = searchInput.value.trim();

        if (searchText !== '') {
            searchContent.style.display = 'block';
        } else {
            searchContent.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        let isClickInside = searchContent.contains(event.target);
        let isClickInput = (event.target === searchInput);
        let isClickCatalogButton = (event.target === catalogButton);

        if (!isClickInside && !isClickInput && !isClickCatalogButton) {
            searchContent.style.display = 'none';
        }
    });

    catalogButton.addEventListener('click', function () {
        searchContent.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let catalogButton = document.getElementById('catalogButton');
    let catalogContent = document.getElementById('catalogContent');
    let catalogButtonIcon = catalogButton.querySelector('img');

    catalogButton.addEventListener('click', function (event) {
        event.stopPropagation();

        if (catalogContent.style.display === 'block') {
            catalogContent.style.display = 'none';
            catalogButtonIcon.setAttribute('src', '../assets/icons/catalog-button-icon.svg');
        } else {
            catalogContent.style.display = 'block';
            catalogButtonIcon.setAttribute('src', '../assets/icons/iconsclose.svg');
        }
    });


    document.addEventListener('click', function (event) {
        let isClickInside = catalogContent.contains(event.target);
        let isClickInput = (event.target === catalogButton);

        if (!isClickInside && !isClickInput) {
            catalogContent.style.display = 'none';

            catalogButtonIcon.setAttribute('src', '../assets/icons/catalog-button-icon.svg');
        }
    });


});


/////////////////////////////


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


/////////////////////////////

