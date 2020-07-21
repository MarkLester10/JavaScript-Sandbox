//listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //hide results
  document.getElementById("results").className = "pt-4 d-none";

  //show loader
  document.getElementById("loading").className = "d-block";

  setTimeout(calculateResults, 3000);

  e.preventDefault();
});

//Calculate Results
function calculateResults() {
  //UI Variablles
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  //Calculations
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  //check if finite
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    //hide spinner
    document.getElementById("loading").className = "d-none";
    //show results
    document.getElementById("results").className = "pt-4 d-block";
  } else {
    showError("Please check you inputs");
  }
}

function showError(message) {
  //hide results and loader
  document.getElementById("results").className = "pt-4 d-none";
  document.getElementById("loading").className = "d-none";

  //create element
  const errorDiv = document.createElement("div");

  //get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //add class
  errorDiv.className = "alert alert-danger";

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(message));

  //insert error above the heading
  /** insertAbove takes 2 parameter the first
   * is the one you want to insert and then the element
   * before your inserted element
   */
  card.insertBefore(errorDiv, heading);

  //clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
