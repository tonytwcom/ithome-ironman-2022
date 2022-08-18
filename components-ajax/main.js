window.onload = () => {
    let dcard = document.getElementById('demo');
    dcard.addEventListener('click', loadDcard, false);
};
function loadDcard() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', './sights-data.json', true);
    xhttp.send();
}