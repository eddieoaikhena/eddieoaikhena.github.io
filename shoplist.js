var button = document.getElementById('Add');
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLenght() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	    li.appendChild(document.createTextNode(input.value));
	    ul.appendChild(li);
	    input.value = "";
}

function addListAfterClick() {
	if (inputLenght() > 0) {
	    createListElement();
    }
}

function addListAfterKeypress(event) {
	if (inputLenght() > 0 && event.keycode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
