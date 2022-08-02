<script>
    let src = "/img/header/logo.png";
    let name = "logoENCO";
</script>

<!-- Header -->
<div class="sticky-top bg-light">
    <div id="primario" class="container-fluid pb-3 pt-3">
        <div class="row text-end">
            <div class="col align-self-end">
                <encabezado>Acompañar Construir Actuar</encabezado>
            </div>
        </div>
    </div>

    <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" align>
            <a class="navbar-brand" href="#/">
                <img {src} alt={name}>
                En Compañia Efectiva
            </a>
            <div class="row text-end">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul
                        class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        style="--bs-scroll-height: 100px;"
                    >
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="/"
                                id="navbarScrollingDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Nosotros
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarScrollingDropdown"
                            >
                                <li>
                                    <a class="dropdown-item" href="#/nosotros"
                                        >Quiénes y cómo somos</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#/alianzas"
                                        >Alianzas</a
                                    >
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="#/clientes"
                                        >Clientes</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#/galeria"
                                        >Galería</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#/soluciones">Soluciones</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#/noticias">Noticias y redes sociales</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#/contacto">Contacto</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#/autodiag">Autodiagnostico</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

<!-- /Header -->
<style>
    #primario {
        background-image: radial-gradient(
            circle at 52% 48.32%,
            #26668b 0,
            #1e5372d9 25%,
            #1e5372 50%,
            #273b47 75%,
            #1c3643
        );
    }
    #primario encabezado {
        color: white;
    }
    #header {
        background: white;
    }
    #header img {
        width: 55px;
    }
    #header a {
        text-align: center;
        color: #000000;
    }
</style>
