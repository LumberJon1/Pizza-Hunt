const $pizzaList = document.querySelector('#pizza-list');

// Fetch to grab all pizzas
const getPizzaList = () => {
  fetch("/api/pizzas")
    .then(response => response.json())
    .then(pizzaListArr => {
      // For each pizza in the database, run the printPizza function to generate the card
      pizzaListArr.forEach(printPizza);
    })
    .catch(err => console.log(err));
};

// Creates a card and populates with the pizza's data to load onto the page
const printPizza = ({ _id, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${pizzaName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Size: ${size}
          <h5 class="text-dark">Toppings</h5>
          <ul>
            ${toppings
              .map(topping => {
                return `<li>${topping}</li>`;
              })
              .join('')}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/pizza?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};

// Call the pizzaList on page load
getPizzaList();
