const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;

  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  let menuHtml = '';

  courses.forEach((course) => {
    const {name: courseName, price, diets} = course;
    const displayPrice = price ? price : 'Not provided';

    menuHtml += `<li>${courseName}, ${displayPrice}. ${diets}</li>`;
  });

  return `
    <h1>${name}</h1>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    <ul>${menuHtml}</ul>
  `;
};

export {restaurantRow, restaurantModal};
