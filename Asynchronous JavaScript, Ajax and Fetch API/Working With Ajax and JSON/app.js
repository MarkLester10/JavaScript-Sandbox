//Working With Ajax & JSON (JavaScript Object Notation)

document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
      <h3>${customer.name}</h3>
      <ul>
      <li>Id: ${customer.id}</li>
      <li>Company: ${customer.company}</li>
      <li>Job: ${customer.job}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

//customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach((customer) => {
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Job: ${customer.job}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
