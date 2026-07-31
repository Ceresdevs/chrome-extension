let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector('#delete-btn');
const ulEl = document.querySelector("#ul-el");


// Get the leads from the localStorage - PS: JSON.parse()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

//if may laman (true), if so then render the leads
 if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads();
 }

 //deleting localStorage, Array, and DOM
deleteBtn.addEventListener('click', function() {
  localStorage.clear()
  myLeads = [];
  renderLeads();
})


//refering to the input-btn
inputBtn.addEventListener("click", function () {
  //pushing values from the inputs to the array 'myLeads'


  //new variable that refering to the value of input
  const currentInput = inputEl.value;

  //if not empty input, then push
  if (currentInput.trim() !== "") {
    myLeads.push(currentInput);
  }

  //clear inputs
  inputEl.value = "";

  // Save the myLeads array to localStorage and transform the array to string -  
  // within this statement to store the items in arrays as string
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  //calling the function to render the arrays when it's click
  renderLeads();
});

//function to render the value of arrays
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable
    listItems += `<li><a  href="${myLeads[i]}" target='_blank' >${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

