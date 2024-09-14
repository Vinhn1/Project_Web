const products = document.querySelector(".product-list");
const filter = document.getElementById("filter");
const listItems = [];

// Call getData to fetch and display products
getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();

    // Clear product
    products.innerHTML = "";

    result.forEach((product) => {
      const div = document.createElement("div");
      div.setAttribute("class", "product");
      listItems.push(div);

      div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-title">
                <h4>${product.title.slice(0, 30)}</h4>
                <p>${product.price}</p>
            </div>`;

      products.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function filterData(search) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
