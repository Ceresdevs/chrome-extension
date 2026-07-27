let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
//const: cannot be reasign value
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

//refering to the input-btn
inputBtn.addEventListener('click', function() {
    //pushing values from the inputs to the array 'myLeads'
   myLeads.push(inputEl.value);
   inputEl.value = '';
   console.log(myLeads);

})

// 1. Create a variable, listItems, to hold all the HTML for the list items
let listItems = '';

// Log out the items in the myLeads array using a for loop 
for(let i = 0; i < myLeads.length; i++) {

     // 2. Add the item to the listItems variable
     listItems += `<li>${myLeads[i]}</li>`;
}

ulEl.innerHTML = listItems;


