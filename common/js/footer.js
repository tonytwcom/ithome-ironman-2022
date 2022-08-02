export function showFooter() {
    let commonFooter = `
<footer class="text-center text-white" style="background-color: #0a4275">
    <div class="container p-4 pb-0">
        <section class="">
            <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">回首頁 </span>
                <button
                    onclick="location.href = '#';"
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                >
                    Go !
                </button>
            </p>
        </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2022
        <a class="text-white text-decoration-none" href="https://tonytw.com/">東尼先生</a>
        All rights reserved.
    </div>
</footer>
`;
    document.getElementById('showFooter').innerHTML = commonFooter;
}
