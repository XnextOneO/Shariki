window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var contentHeader = document.querySelector('.content-header');
    var headerTitle = document.querySelector('.header-title');

    if (window.scrollY > header.offsetHeight) {
        contentHeader.style.top = '0';
        contentHeader.style.opacity = '1';
        headerTitle.style.opacity = '0';
        headerTitle.style.visibility = 'hidden';
    } else {
        contentHeader.style.top = '50px';
        contentHeader.style.opacity = '1';
        headerTitle.style.opacity = '1';
        headerTitle.style.visibility = 'visible';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var selectHeader = document.getElementById('select-header');
    var selectOptions = document.querySelector('.select-options');

    selectHeader.addEventListener('click', function () {
        selectOptions.classList.toggle('show-options');
    });


    selectOptions.addEventListener('click', function (e) {
        if (e.target.classList.contains('option')) {
            var selectedValue = e.target.getAttribute('data-value');
            selectHeader.textContent = e.target.textContent;
            selectOptions.classList.remove('show-options');
            console.log('Выбрана дата: ' + selectedValue);
        }
    });

});

(() => {
    var blocks = document.querySelectorAll(".main__block");
    blocks.forEach((block) => {
        block.addEventListener("click", (e) => {
            var slideBlock = block.querySelector(".main__block--down");
            var arrow = block.querySelector(".arrow");

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
    var searchInput = document.getElementById('searchInput');
    var searchContent = document.getElementById('searchContent');
    var catalogButton = document.getElementById('catalogButton');

    searchInput.addEventListener('input', function () {
        var searchText = searchInput.value.trim();

        if (searchText !== '') {
            searchContent.style.display = 'block';
        } else {
            searchContent.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        var isClickInside = searchContent.contains(event.target);
        var isClickInput = (event.target === searchInput);
        var isClickCatalogButton = (event.target === catalogButton);

        if (!isClickInside && !isClickInput && !isClickCatalogButton) {
            searchContent.style.display = 'none';
        }
    });

    catalogButton.addEventListener('click', function () {
        searchContent.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var catalogButton = document.getElementById('catalogButton');
    var catalogContent = document.getElementById('catalogContent');
    var catalogButtonIcon = catalogButton.querySelector('img');

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
        var isClickInside = catalogContent.contains(event.target);
        var isClickInput = (event.target === catalogButton);

        if (!isClickInside && !isClickInput) {
            catalogContent.style.display = 'none';

            catalogButtonIcon.setAttribute('src', '../assets/icons/catalog-button-icon.svg');
        }
    });


});


/////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');


    burgerMenuBtn.addEventListener('click', function() {
        fullScreenMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });


    closeMenuBtn.addEventListener('click', function() {
        fullScreenMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});


/////////////////////////////

