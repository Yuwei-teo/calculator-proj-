'use strict';
//elements 

//percentage

//num person 

const personBill = document.getElementById("person-bill");

const numberOfPeopleInput = document.getElementById('num');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const calculateButton = document.getElementById('calculate');
const finalOutput = document.getElementById('final');
const selectedtipButtons = document.querySelectorAll('.percentage-options .select.item');
const reset = document.getElementById('reset');
const billInput = document.querySelector("#total-bill");
let custom= document.querySelector('.percentage-options .custominput');
selectedtipButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Deselect all buttons
    selectedtipButtons.forEach(btn => {
      btn.classList.remove('selected');
    });

    // Select the clicked button
    button.classList.add('selected');
    custom.value=parseFloat(button.textContent);
  });
});

incrementButton.addEventListener('click', function() {
  numberOfPeopleInput.value = parseInt(numberOfPeopleInput.value) + 1;
});

decrementButton.addEventListener('click', function() {
  if (numberOfPeopleInput.value > 0) {
    numberOfPeopleInput.value = parseInt(numberOfPeopleInput.value) - 1;
  }
});

function total(num, interest, bill) {
  
  const interestAmount = bill * interest;
  
  // console.log(bill + interestAmount);
  return  (bill + interestAmount);
};

calculateButton.addEventListener('click', function() {
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const billAmount = parseFloat(billInput.value);
   let tip= 0;

  
  selectedtipButtons.forEach(button => {
    if (button.classList.contains('selected')) {
      
      
      
      // custom = parseFloat(button.textContent) / 100;
      tip= parseFloat(custom.value) / 100;
      console.log(tip);
      
    };
  });

  const totalAmount = total(numberOfPeople, tip, billAmount);
  
  const todisplay = totalAmount/numberOfPeople;
  // finalOutput.value = todisplay;
  personBill.value = todisplay;
  // console.log(finalOutput.value);
  // console.log(tip);
});

reset.addEventListener('click', function() {
  billInput.value = '0'; // Set value as string '0'
  // personBill.value = '0'; 
  numberOfPeopleInput.value = '0'; // Set value as string '0'
  personBill.value = '0';
  custom.value = '0'; // Set value as string '0'

  selectedtipButtons.forEach(button => {
    button.classList.remove('selected');
  });
});
