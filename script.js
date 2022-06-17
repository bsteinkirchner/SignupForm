var modal = document.getElementById('modalid');

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};