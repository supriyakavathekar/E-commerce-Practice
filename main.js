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
    const firstProduct= products[27];
    console.log('FirstProduct:',firstProduct)
    const productPhotos = firstProduct.images;
    console.log('Productimage:',productPhotos)
   
})
.catch(error=>{
    console.log(error);
})

