export function showBanner() {
    let getBanner = `
<div class="banner"></div>
<div class="path">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首頁</a></li>
            <li class="breadcrumb-item">
                <a href="../../index.html">tools</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Button Components</li>
        </ol>
    </nav>
`;
    document.getElementById('showBanner').innerHTML = getBanner;
}

