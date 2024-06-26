console.log('====================================');
console.log("Connected");
console.log('====================================');
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

const minusButton = document.querySelector('.quantity-button.minus');
const plusButton = document.querySelector('.quantity-button.plus');
const quantityInput = document.querySelector('#quantity');

minusButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

plusButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

function sub() {
    alert("Order is placed!!");
}

const colorSelector = document.querySelector('.color-selector');
const colorOptions = colorSelector.querySelectorAll('.color-option');
const selectedColor = colorSelector.querySelector('.selected-color');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(option => option.classList.remove('selected'));
    option.classList.add('selected');
    selectedColor.textContent = option.getAttribute('data-color');
  });
});