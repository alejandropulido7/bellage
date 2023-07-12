window.addEventListener("load", function(event) {
    let progressBar = document.querySelector(".progress-bar");
    let progressValue = document.querySelector("#question-percent");
    progressBar.style.width = `${progressValue.textContent}%`;
});