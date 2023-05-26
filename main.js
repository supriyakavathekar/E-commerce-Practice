const hamburger = document.getElementById('ham-menu');
const navMenu = document.getElementById('nav-item');
console.log('hamburger:',hamburger);
console.log(`navMenu: ${navMenu}`);

hamburger.addEventListener('click', toggleHamburgerMenu);
// navMenu.addEventListener('click', toggleHamburgerMenu);


function toggleHamburgerMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

fetch("https://dummyjson.com/products")
.then(response=>response.json())
.then(data=>{
    const products = data.products;
    const firstProduct= products[25];
    console.log('FirstProduct:',firstProduct)
    const productPhotos = firstProduct.images;
    // console.log('Productimage:',productPhotos)

   renderSlider(productPhotos);
   renderProductDetails(firstProduct)
})
.catch(error=>{
    console.log( 'error fetching product data:',error);
})


function renderSlider(photos) {
    const slider = document.getElementById('slider')
    console.log(photos);


    photos.slice(0,4).forEach((photoUrl) => {
    const image = document.createElement('img')
    image.src = photoUrl;
    slider.appendChild(image)

    });


    const pagination = document.getElementById('pagination')

pagination.addEventListener(`click` , handlePagination)


function handlePagination(event) {
    const clickedDot = event.target;
    if (clickedDot.classList.contains('page-dot')) {
        const index = parseInt(clickedDot.dataset.index);
        scrollToIndex(index);
    }
    

    function scrollToIndex(index) {
        const scrollAmount = index * slider.offsetWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior : 'smooth'
        })
    }
}


}

function renderProductDetails(product) {
    const titleElement = document.getElementById("product-title");
    const descriptionElemenet = document.getElementById("product-description");
    const priceElement = document.getElementById("product-price");
    titleElement.innerText = product.title;
    descriptionElemenet.innerText = product.description;
    priceElement.innerText = `EUR ${product.price}` 

    const buyBtn = document.getElementById("buy-btn");
    buyBtn.addEventListener(`click` , alertOnclick);

    function alertOnclick() {
        alert(`${product.title} for EUR ${product.price} has been added to your cart`)
    }
}
