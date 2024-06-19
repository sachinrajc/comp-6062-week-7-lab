console.log('Here we are :)');
const numberInput = document.querySelector('#numberInput')
numberInput.addEventListener('input',function() {
    if (numberInput.value <= -10 || numberInput.value>=10){
        alert('The number should be between -10 and 10');
    }
});

const fruit = {
    name: 'Apple',
    color: 'Red',
    taste: 'Sweet'
};

const fruitName = document.querySelector('#fruitName');
const fruitColor = document.querySelector('#fruitColor');
const fruitTaste = document.querySelector('#fruitTaste');

// Use innerHTML to set the string, use Template Literals for each to combine the fruit field name and the value
fruitName.innerHTML = `Name: ${fruit.name}`;
fruitColor.innerHTML = `Color: ${fruit.color}`;
fruitTaste.innerHTML = `Taste: ${fruit.taste}`;