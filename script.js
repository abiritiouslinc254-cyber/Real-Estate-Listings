// Get all property cards from the webpage
const propertyCards = document.querySelectorAll(".property-card");

// Get the search button
const searchButton = document.querySelector(".search-btn");

// Get the search input fields
const locationInput = document.getElementById("location");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const resetButton = document.getElementById("reset-btn");
searchButton.addEventListener("click", function () {

    const location = locationInput.value.toLowerCase().trim();

    const minPrice = Number(minPriceInput.value) || 0;

    const maxPrice = Number(maxPriceInput.value) || Infinity;

    propertyCards.forEach(function (card) {

        const propertyLocation = card.dataset.location.toLowerCase();

        const propertyPrice = Number(card.dataset.price);

        const matchesLocation = propertyLocation.includes(location);

        const matchesMinPrice = propertyPrice >= minPrice;

        const matchesMaxPrice = propertyPrice <= maxPrice;

        if (matchesLocation && matchesMinPrice && matchesMaxPrice) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
// MORTGAGE CALCULATOR

const loanAmountInput = document.getElementById("loan-amount");
const interestRateInput = document.getElementById("interest-rate");
const loanYearsInput = document.getElementById("loan-years");

const calculateButton = document.getElementById("calculate-btn");
const monthlyPaymentDisplay = document.getElementById("monthly-payment");

calculateButton.addEventListener("click", function () {

    const loanAmount = Number(loanAmountInput.value);
    const annualInterestRate = Number(interestRateInput.value);
    const loanYears = Number(loanYearsInput.value);

    if (loanAmount <= 0 || annualInterestRate < 0 || loanYears <= 0) {
        alert("Please enter valid loan details.");
        return;
    }

    const monthlyInterestRate = annualInterestRate / 100 / 12;

    const numberOfPayments = loanYears * 12;

    let monthlyPayment;

    if (monthlyInterestRate === 0) {
        monthlyPayment = loanAmount / numberOfPayments;
    } else {
        monthlyPayment = loanAmount * monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }

    monthlyPaymentDisplay.textContent =
        "Monthly Payment: KSh " + monthlyPayment.toLocaleString("en-KE", {
            maximumFractionDigits: 2
        });

});
// PROPERTY VIEWING FORM

const viewingForm = document.getElementById("viewing-form");

viewingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName = document.getElementById("customer-name").value.trim();

    const customerEmail = document.getElementById("customer-email").value.trim();

    const customerPhone = document.getElementById("customer-phone").value.trim();

    const selectedProperty = document.getElementById("selected-property").value;

    const viewingDate = document.getElementById("viewing-date").value;

    if (!customerName || !customerEmail || !customerPhone || !selectedProperty || !viewingDate) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + customerName + "! Your viewing request has been submitted successfully.");

    viewingForm.reset();

});
searchButton.addEventListener("click", function () {

    const location = locationInput.value.toLowerCase().trim();

    const minPrice = Number(minPriceInput.value) || 0;

    const maxPrice = Number(maxPriceInput.value) || Infinity;

    propertyCards.forEach(function (card) {

        const propertyLocation = card.dataset.location.toLowerCase();

        const propertyPrice = Number(card.dataset.price);

        const matchesLocation = propertyLocation.includes(location);

        const matchesMinPrice = propertyPrice >= minPrice;

        const matchesMaxPrice = propertyPrice <= maxPrice;

        if (matchesLocation && matchesMinPrice && matchesMaxPrice) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
resetButton.addEventListener("click", function () {

    locationInput.value = "";
    minPriceInput.value = "";
    maxPriceInput.value = "";

    propertyCards.forEach(function (card) {
        card.style.display = "block";
    });

});