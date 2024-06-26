console.log('Lab 7');

const numberInput = document.querySelector("#numberInput");

numberInput.addEventListener("input", function() {
    const inputNumber = Number(numberInput.value);
    console.log(inputNumber);
    if (inputNumber <= -10 || inputNumber >= 10) {
        alert("The number should be between -10 and 10");
    }
});

const fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

document.querySelector("#fruitName").innerHTML = `Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML = `Color: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML = `Taste: ${fruit.taste}`