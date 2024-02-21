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
// Get the Element where i show player info 
const playerInfo = getById("appentInfo");
// Get total cost element 
const totalCost = getById("totalCost");
let totalCostNumber = 0;
const grandTotal = getById("grandTotal");
// Get the budge 
const budge = getById("budget");
let budgeValue = 2500;
// Get all add-cart buttons 
const buttons = getClasses("add-btn");
for (btn of buttons) {
    btn.addEventListener("click",function (e) {
        const name = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const numberPrice = parseInt(price);
        const category = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        
        if (budgeValue > 0) {
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
        }
            budge.innerText = budgeValue;
    })
}