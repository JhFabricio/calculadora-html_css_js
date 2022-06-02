const contentResult = document.querySelector(".content-result")
const btnConfirm = document.querySelector(".btn-confirm");


function contentClean() {
    //alert("ola mundo")
    contentResult.innerHTML  = "";
    
}

function backSpace() {
    if (contentResult.textContent) {
        let result = document.getElementById("result").innerHTML
        contentResult.innerHTML = result.substring(0, result.length - 1);
        
    }
    
}

function insert(valor) {
    contentResult.innerHTML += valor;
    
}

function confirm() {
    if (contentResult.textContent != 'Error') {
        document.getElementById("result").innerHTML = eval(contentResult.innerHTML);
        
    }
    
}
