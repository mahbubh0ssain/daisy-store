// click button when hit enter key
document
  .getElementById("search-field")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      document.getElementById("search-btn").click();
    }
  });

// fetch data from URL
fetchData = async () => {
  document.getElementById("progress").classList.remove("hidden");
  document.getElementById("not-found").classList.add("hidden");
  const searchField = document.getElementById("search-field");
  const searchInput = searchField.value;
  searchField.value = "";
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();
  displayData(data, searchInput);
  return data;
};
fetchData();

// display data in card
displayData = (data, searchInput) => {
  // filter product based on category by search input value
  const foundProducts = data.filter((product) =>
    product.category.includes(searchInput)
  );
  document.getElementById("not-found").classList.add("hidden");

  if (foundProducts.length === 0) {
    document.getElementById("not-found").classList.remove("hidden");
  }
  document.getElementById("progress").classList.add("hidden");

  const productContainer = document.getElementById("products-container");
  productContainer.textContent = "";

  // display product got from filtered
  foundProducts.forEach((product) => {
    const { image, title, price, description, category } = product;
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="${image}" class="h-60 w-100" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${category}</h2>
              <h3 class="card-title">${
                title.length > 20 ? title.slice(0, 20) + "..." : title
              }</h3>
              <p>${
                description.length > 50
                  ? description.slice(0, 50) + "..."
                  : description
              }</p>
              <div class="card-actions justify-end">
                <label onclick="modalButton('${title}', '${description}')" for="my-modal-3" class="btn text-xl btn-primary modal-button">$ ${price}</label>          
              </div>
            </div>
          </div>`;
    productContainer.appendChild(div);
  });
};

//show modal onclick()
modalButton = (title, description) => {
  const modalBody = document.getElementById("modal");
  modalBody.innerHTML = `
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">${title}</h3>
          <p class="py-4">${description}</p>
        </div>
  `;
};
