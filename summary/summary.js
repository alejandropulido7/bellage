window.addEventListener("load", function(event) {
    thriving();
    surviving();
    struggling();
});

function thriving(){
    let circularProgress = document.querySelectorAll(".circular-progress-thriving");
    let progressValue = document.querySelectorAll(".progress-value-thriving");
    for (let index = 0; index < circularProgress.length; index++) {
        circularProgress[index].style.background = `conic-gradient(#126616 ${(progressValue[index].textContent * 10 ) * 3.6}deg, #ccc 0deg)`;
    }
}

function surviving(){
    let circularProgress = document.querySelectorAll(".circular-progress-surviving");
    let progressValue = document.querySelectorAll(".progress-value-surviving");
    for (let index = 0; index < circularProgress.length; index++) {
        circularProgress[index].style.background = `conic-gradient(#CFAE00 ${(progressValue[index].textContent * 10 ) * 3.6}deg, #ccc 0deg)`;
    }
}

function struggling(){
    let circularProgress = document.querySelectorAll(".circular-progress-struggling");
    let progressValue = document.querySelectorAll(".progress-value-struggling");
    for (let index = 0; index < circularProgress.length; index++) {
        circularProgress[index].style.background = `conic-gradient(#D35900 ${(progressValue[index].textContent * 10 ) * 3.6}deg, #ccc 0deg)`;
    }
}