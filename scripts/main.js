//let myHanding = document.querySelector("h1");
//myHanding.textContent = "Hello World!";

document.querySelector("html").addEventListener("click", () => {
	alert("别戳我，我怕疼。");
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/hoshi.jpg") {
		myImage.setAttribute("src", "images/stone.png");
	} else {
		myImage.setAttribute("src", "images/hoshi.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("请输入你的名字。");
	localStorage.setItem("name", myName);
	myHeading.textContent = "今晩は," + myName;
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "今晩は," + storedName;
}

myButton.onclick = function () {
	setUserName();
};

function setUserName() {
	let myName = prompt("请输入你的名字。");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = "今晩は," + myName;
	}
}
