// heree we make four const varibles and select ids
const billInput = document.getElementById('bill');
const serviceInput = document.getElementById('service');
const peopleInput = document.getElementById('people');
const calculateButton = document.getElementById('calculate');
const tipOutput = document.getElementById('tip');
// add evnt and create fucntion
calculateButton.addEventListener('click', function() {
  const bill = parseFloat(billInput.value);
  const service = parseFloat(serviceInput.value);
  const people = parseFloat(peopleInput.value);
    // taking condition for billing
  if (isNaN(bill) || isNaN(service) || isNaN(people)) {
    tipOutput.innerHTML = "Please enter valid numbers.";
  } else if (bill <= 0 || people <= 0) {
    tipOutput.innerHTML = "Please enter positive numbers.";
  } else {
    const tipAmount = bill * service;
    const perPerson = tipAmount / people;
    tipOutput.innerHTML = `Tip Amount: Rs ${tipAmount}/- </br> Rs ${perPerson}/- Per Person </br></br>`;
  }
});