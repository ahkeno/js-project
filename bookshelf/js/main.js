window.addEventListener("DOMContentLoaded", function () {
	var req = new XMLHttpRequest(),
        container = document.getElementById("books");

    var listElement = function (item) {
        var output = document.createElement("div"),
        str = [];

        output.setAttribute("class", "book");
        str.push("<h2>Title: " + item.title + "</h2>");
        str.push("<h3>Author: " + item.author + "</h3>");
        str.push("<h3>Rating: " + item.status + "</h3>");
        output.innerHTML = str.join("");

        return output;
    };
    req.onload = function () {

        try {
            var list = JSON.parse(this.responseText);
        } catch (e) {
            container.innerHTML = "Cannot load Books list :-(";
        }
        var i;
        for (i in list) {
            container.appendChild(listElement(list[i]));
        };
    };

    req.open("GET", "book.json", true);
    req.send();
});