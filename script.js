// All commons used function for this project 
// Common function for geting Element using id 
function getById (id) {
    return document.getElementById(id)
}
// Common function for getting element using class 
function getClasses (classes) {
    return document.getElementsByClassName(classes)
}
// Common function for create a html element 
function makeElem (name) {
    return document.createElement(name);
}
// Function for discount 
function discount (currentValue,discountValue) {
    return (currentValue * discountValue) / 100; 
}
// Get the Element where i show player info 
const playerInfo = getById("appentInfo");
// Get total cost element 
const totalCost = getById("totalCost");
let totalCostNumber = 0;
const grandTotal = getById("grandTotal");
// Get the budge 
const budge = getById("budget");
let budgeValue = 2500;
// get left card here 
const leftCard = getById("left");
let leftVardValue = 6;
// Get card value 
const cardlist = getById("card");
// Get all add-cart buttons 
const buttons = getClasses("add-btn");
for (btn of buttons) {
    btn.addEventListener("click",function (e) {
        const name = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const numberPrice = parseInt(price);
        const category = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        
        if (leftVardValue > 0) {
            leftVardValue -= 1;
            leftCard.innerText = leftVardValue;
            if (budgeValue >= numberPrice) {
            const div = makeElem("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-evenly";
            const p = `<p>${name}</p>
            <p>${numberPrice}</p>
            <p>${category}</p>`;
            div.innerHTML = p;
            playerInfo.appendChild(div);
            totalCost.innerText = totalCostNumber += numberPrice;
            grandTotal.innerText = totalCostNumber;
            budgeValue -= numberPrice;
            cardlist.innerText = parseInt(cardlist.innerText) + 1;
            }else {
                alert ("Your budge is too low!")
            }
        }
        budge.innerText = budgeValue;
    })
}
const copunInput = getById('copun');
const applyBtn = getById ("apllyBtn");

function getDiscount () {
    const copunInputValue = copunInput.value;
    if (copunInputValue === "winner") {
        console.log(totalCost)
        grandTotal.innerText =  totalCostNumber - discount (totalCostNumber, 10);
        copunInput.value = ""
    }
}
applyBtn.addEventListener ("click",getDiscount)