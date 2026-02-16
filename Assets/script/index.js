const loadTopProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        
        const filteredProducts = data.filter(product => product.rating.rate >= 4);

        const sortedByCount = filteredProducts.sort((a, b) => b.rating.count - a.rating.count);

        const topSix = sortedByCount.slice(0, 4);
        
        displayTopProduct(topSix);
    })
    .catch(err => console.log("Data load hote somossa:", err));
}


const displayTopProduct = (products)=>{
  const trendingContainer = document.getElementById('trending-container');
  trendingContainer.innerHTML='';

  products.map((product)=>{
      const productCard = document.createElement('div');
      productCard.innerHTML = `
     <div class="card  bg-base-100 lg:w-72 h-[500px] shadow-xl border border-gray-100">
      <figure class=''><img class='w-96 h-80 p-10 bg-slate-300' src="${product.image}" alt="Product" /></figure>
      <div class="card-body">
      <div class="flex gap-10">
      <h1 class="rounded-xl bg-indigo-200 font-semibold text-indigo-900 px-2">${product.category}</h1>
      <h1 class=""><i class="fas fa-star text-yellow-400"></i>${product.rating.rate}(${product.rating.count})</h1>
      </div>
        <h2 class="card-title text-gray-600">${product.title.length > 23 ? product.title.slice(0, 23) + "..." : product.title}</h2>
        <p class="text-gray-900 font-bold text-xl">$${product.price}</p>
        <div class="grid grid-cols-2 gap-2">
          <button  onclick="loadDetails(${product.id})" class="btn border text-gray-600"><i class="fas fa-eye"></i>Details</button>
          
          <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i>Add</button>

        </div>
      </div>
    </div>

      `;
      trendingContainer.append(productCard)
  })
   
}





//load all product
const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((json)=> displayProducts(json))
}

// load product details

const loadDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => displayDetailsProduct(data))
        
};

//display details product

const displayDetailsProduct = (product)=>{
    console.log(product);
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML= `
           <div class="card  bg-base-100 shadow-xl border border-gray-100">
      <figure class=''><img class='w-96 h-80 p-10 bg-slate-300' src="${product.image}" alt="Product" /></figure>
      <div class="card-body">
      <div class="grid grid-cols-1 lg:grid-cols-3">
      <h1 class="rounded-xl bg-indigo-200 font-semibold text-indigo-900 px-2 lg:w-32 lg:mr-3 text-center">${product.category}</h1>
      <h1 class="lg:ml-9 text-center"><i class="fas fa-star text-yellow-400"></i>${product.rating.rate}(${product.rating.count})</h1>
      <p class="text-gray-900 font-semibold lg:ml-4 text-center">$${product.price}</p>
      </div>
        <h2 class="card-title text-gray-600">${product.title}</h2>
        <p class="font-semibold text-slate-800">${product.description}</p>
        
       
          
          
          <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i>Add</button>

       
      </div>
    </div>
    `;
    document.getElementById('my_modal_3').showModal();
}


//load categoryProducts


const loadCategoryProducts = (category) => {
   
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            displayProducts(data); 
        })
        
}




displayProducts = (products)=>{
    const ProductContainer = document.getElementById('product-container');
    ProductContainer.innerHTML = "";
    for (let product of products){
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `

         <div class="card  bg-base-100 lg:w-72 h-[500px] shadow-xl border border-gray-100">
      <figure class=''><img class='w-96 h-80 p-10 bg-slate-300' src="${product.image}" alt="Product" /></figure>
      <div class="card-body">
      <div class="flex gap-10">
      <h1 class="rounded-xl bg-indigo-200 font-semibold text-indigo-900 px-2">${product.category}</h1>
      <h1 class=""><i class="fas fa-star text-yellow-400"></i>${product.rating.rate}(${product.rating.count})</h1>
      </div>
        <h2 class="card-title text-gray-600">${product.title.length > 23 ? product.title.slice(0, 23) + "..." : product.title}</h2>
        <p class="text-gray-900 font-bold text-xl">$${product.price}</p>
        <div class="grid grid-cols-2 gap-2">
          <button  onclick="loadDetails(${product.id})" class="btn border text-gray-600"><i class="fas fa-eye"></i>Details</button>
          
          <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i>Add</button>

        </div>
      </div>
    </div>

        `;

        ProductContainer.append(productDiv)
    }
}
loadTopProducts();
loadProducts()