let myLeads = [];
//const: cannot be reasign value
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

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

  console.log(myLeads);

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
