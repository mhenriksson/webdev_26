import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const table = document.querySelector('table');
const errorMessage = document.querySelector('#error-message');

let allRestaurants = [];

const renderTable = (restaurants) => {
  // clear existing rows except the header row
  table.querySelectorAll('tr:not(:first-child)').forEach((row) => row.remove());

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      document
        .querySelectorAll('.highlight')
        .forEach((element) => element.classList.remove('highlight'));

      row.classList.add('highlight');

      try {
        const menu = await fetchData(
          `${baseUrl}/restaurants/daily/${restaurant._id}/en`
        );

        const modal = document.querySelector('dialog');
        modal.innerHTML = restaurantModal(restaurant, menu);

        modal.insertAdjacentHTML('beforeend', '<button>Close</button>');

        modal.querySelector('button').addEventListener('click', () => {
          modal.close();
        });

        modal.show();
      } catch (error) {
        errorMessage.textContent = `Could not load menu: ${error.message}`;
      }
    });

    table.insertAdjacentElement('beforeend', row);
  });
};

const filterByCompany = (company) => {
  errorMessage.textContent = '';

  const filtered = company
    ? allRestaurants.filter((restaurant) => restaurant.company === company)
    : allRestaurants;

  if (filtered.length === 0) {
    errorMessage.textContent = `No restaurants found for ${company}.`;
  }

  renderTable(filtered);
};

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(baseUrl + '/restaurants');

    allRestaurants = [...restaurants].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    renderTable(allRestaurants);
  } catch (error) {
    errorMessage.textContent = `Failed to load restaurants: ${error.message}`;
  }
};

document.querySelector('#show-all').addEventListener('click', () => {
  filterByCompany(null);
});

document.querySelector('#show-sodexo').addEventListener('click', () => {
  filterByCompany('Sodexo');
});

document.querySelector('#show-compass').addEventListener('click', () => {
  filterByCompany('Compass Group');
});

getRestaurants();
