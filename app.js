const searchButton = document.getElementById("searchButton");
const httpRequest = new XMLHttpRequest();
const resultArea = document.getElementById("result");
const searchTextBox = document.getElementById("searchTextBox");

function loadSuperheroes() {
    let query = searchTextBox.value.trim();   
    let url = "superheroes.php?query=" + encodeURIComponent(query);
    httpRequest.onreadystatechange = doSomething;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function doSomething() {
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            resultArea.innerHTML = httpRequest.responseText;
        } else {
            resultArea.innerHTML = 'There was a problem with the request.';
        }
    }
}

searchButton.addEventListener("click", loadSuperheroes);