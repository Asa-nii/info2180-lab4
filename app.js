
const searchButton = document.getElementById("searchButton");
const httpRequest = new XMLHttpRequest();

let url = "superheroes.php"


function loadSuperheroes(){

    httpRequest.onreadystatechange= doSomething;
    httpRequest.open('GET',url);
    httpRequest.send();
}

function doSomething(){
    if (httpRequest.readyState==XMLHttpRequest.DONE)
    {
        if (httpRequest.status  == 200){
            let response = httpRequest.responseText;
            alert(response);
        }
        else{
            alert('There was a problem with the request.')
        }
    }
}

searchButton.addEventListener("click",loadSuperheroes)
