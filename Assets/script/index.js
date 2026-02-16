const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((json)=> displayProducts(json))
}

displayProducts = (products)=>{
    const ProductContainer = document.getElementById('product-container');
    ProductContainer.innerHTML = "";
    for (let product of products){
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `

         <div class="card bg-base-100 w-60 h-96 shadow-xl border border-gray-100">
      <figure><img src="${product.image}" alt="Product" /></figure>
      <div class="card-body">
        <h2 class="card-title">Stylish Product</h2>
        <p class="text-blue-500 font-bold text-xl">$49.99</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>

        `;

        ProductContainer.append(productDiv)
    }
}
loadProducts()