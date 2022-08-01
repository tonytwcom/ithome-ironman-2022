let count = document.getElementsByClassName('btn-style').length;
export let getHtml = [];
let stateName = ['home', 'bars', 'trash', 'close', 'folder'];

for (let i = 0; i < count; i++) {
    if (i < 5) {
        getHtml[i] = `
        <button class="btn-style btns-icon">
        <i class="fa fa-center fa-${stateName[i]}"></i>`;
    } else if (i > 15) {
        getHtml[i] = `
        <button class="btn-style btns-icon">
        <i class="fa fa-center fa-${count}"></i>`;
    }
}

/* <i class="fa fa-center fa-${stateName[1]}"></i> */
