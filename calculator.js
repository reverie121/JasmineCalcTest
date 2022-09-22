window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    let initAmount = document.getElementById("loan-amount");
    let initTerm = document.getElementById("loan-years");
    let initRate = document.getElementById("loan-rate");
    let payment = document.getElementById("monthly-payment");
    initAmount.value = 100000;
    initTerm.value = 20;
    initRate.value = 5;
    initValues = [initAmount.value, initTerm.value, initRate.value];
    payment.innerText = `$${calculateMonthlyPayment(initValues)}`;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let val = [getCurrentUIValues().amount, getCurrentUIValues().years, (getCurrentUIValues().rate)];
    let mpayment = calculateMonthlyPayment(val);
    updateMonthly(mpayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    monthlyP = ((values[0] * (values[2] / 1200)) / (1 - ((1 + (values[2] / 1200)) ** -(values[1] * 12))));
    monthlyP2 = monthlyP.toFixed(2);
    return String(monthlyP2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    let payment = document.getElementById("monthly-payment");
    payment.innerText = `$${monthly}`;
}

// Run the update function to refresh the monthly payment when calculate button is clicked
document.addEventListener('submit', function() { update() });

// Briefly changes calculate button border color when clicked
document.addEventListener('click', function(e) {
    let btn = document.getElementById('calc-submit');
    if (e.target == btn) {
        btn.style.border = '3px solid white';
        setTimeout(function() {
            btn.style.border = '3px solid black';
        }, 100)
    }

})