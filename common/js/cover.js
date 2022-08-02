export function showCover() {
    let commonCover = `
    <div class="cover">
    <div class="cover-content">
        <div class="cover-textareaWrap">
            <div class="cover-textareaItem">
                <textarea class="cover-textarea" name="" id="htmltxt" cols="30" rows="10">html</textarea>
                <button class="btns-icon btns-icon-customer js-copyBtn">
                    <i class="fa fa-center fa-copy"></i> Copy HTML
                </button>
            </div>
            <div class="cover-textareaItem">
                <textarea class="cover-textarea" name="" id="csstxt" cols="30" rows="10">css</textarea>
                <button class="btns-icon btns-icon-customer js-copyBtn">
                    <i class="fa fa-center fa-copy"></i>Copy CSS
                </button>
            </div>
            <div class="cover-textareaItem">
                <textarea class="cover-textarea" name="" id="jstxt" cols="30" rows="10"> </textarea>
                <button class="btns-icon btns-icon-customer js-copyBtn">
                    <i class="fa fa-center fa-copy"></i>Copy JavaScript
                </button>
            </div>
        </div>
        <button class="btns-icon btns-icon-customer js-doneBtn"><i class="fa fa-center fa-"></i>Done</button>
    </div>
</div>
`;
    document.getElementById('showCover').innerHTML = commonCover;
    // console.log('god');
}
