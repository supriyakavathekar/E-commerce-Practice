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


