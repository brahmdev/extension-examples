window.setInterval(removePopup, 1000);

function removePopup() {
    document.querySelector('body').classList.remove('tp-modal-open');
    if (document.getElementsByClassName("tp-modal")[0] !== undefined) {
        document.getElementsByClassName("tp-modal")[0].setAttribute("style", "display:none; z-index:0");
    }
    if (document.getElementsByClassName("tp-backdrop")[0] !== undefined) {
        document.getElementsByClassName("tp-backdrop")[0].setAttribute("style", "display:none; z-index:0");
    }
}