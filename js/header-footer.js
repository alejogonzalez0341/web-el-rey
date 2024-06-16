const header = document.querySelector('header')
const footer = document.querySelector('footer')

header.innerHTML = `
        <input type="checkbox" class="header__checkbox" id="open-menu">
        <label for="open-menu" class="header__open-nav-button" role="button">=</label>
        <div class="header__content-logo">
            <img src="img/file.png" alt="Logo de la empresa" class="header__content-img">
            <h1>El <span>Rey</span></h1>
        </div>
        <nav class="header__nav">
            <ul class="nav__list">
                <li class="nav__list-items"><a href="#">Inicio</a></li>
                <li class="nav__list-items"><a href="#">Detalles</a></li>
                <li class="nav__list-items"><a href="#">Contactos</a></li>
            </ul>
        </nav>
`;


footer.innerHTML = `<h3>footer</h3>`;