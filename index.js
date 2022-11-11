var a = 1;
document.addEventListener("keypress", function (event) {
    if (a === 1) {
        if (event.key === 'Enter') {
            a = 1;
            Calculator(document.querySelector("input").value);
        }
    }
    else if (a === 0) {
        document.querySelector("input").value = ' ';
        a = 1
    }
    if(document.activeElement.tagName !== 'INPUT'){
        document.querySelector("input").focus();   
    }
})
function Calculator(expression) {
    var x = eval(expression);
    document.querySelector("input").value = x;
    a = 0
}