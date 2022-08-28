window.onload = function () {
    const element = document.getElementById('js-btn');
    element.addEventListener('click', foo, false);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clears, false);
};
function foo() {
    $.ajax({
        url: 'https://random-data-api.com/api/v2/users?size=2&is_xml=true',
        method: 'get',
        success: getData,
    });
}

function getData(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        document.getElementById('demo').innerHTML += data[i].email + '<br>';
    }
}

function clears() {
    document.getElementById('demo').innerHTML = '';
}
