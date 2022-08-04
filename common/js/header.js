export function showHeader() {
    let commonHeader = ` <nav class="navbar navbar-expand-lg navbar-dark primary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">IT 鐵人賽 2022 - Components Tools </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    How To 
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="../../day01-components-buttons/index.html">Button</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="../../day02-components-navbar/index.html">Navbar</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`;
    document.getElementById('showHeader').innerHTML = commonHeader;
}
