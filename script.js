import restaurants from "./database-restaurants.js"
import foods from "./database-foods.js"
import drinks from "./database-drinks.js"

// ========= BUTTON LOKASI =============

let goSomewhere = document.getElementById("goSomewhere")
let locationName = document.getElementById("location-name")

goSomewhere.addEventListener("click", x => {
    let valueLocation = document.getElementById("input-location").value
    if (!valueLocation){
        locationName.innerHTML = "Indonesia"
        alert("Isi lokasi kamu!")
    } else {
        locationName.innerHTML = valueLocation
    }

})

// ========= RESTAURANT ================
function render() {
    for(let i = 0 ; i < restaurants.length ; i++) {
    
        //data dari database
        let restoName = restaurants[i].name
        let locationResto = restaurants[i].location
        let categoryResto = restaurants[i].category
        let rating = restaurants[i].rating
        let distance = restaurants[i].distance
        let estimation = restaurants[i].timeEstimation
        let image = restaurants[i].imageURL
        let id = restaurants[i].id
    
        //modifikasi HTML start
        let listResto = document.getElementById("list-resto")
        
            //bikin card
            let card = document.createElement("div")
            card.classList.add("card")
            card.classList.add("container")
            
    
                //masukin image
                let imageContainer = document.createElement("div")
                imageContainer.classList.add("image")
                imageContainer.classList.add("container")
                imageContainer.setAttribute("id", id)
        
                let imageElement = document.createElement("img")
                imageElement.src = image
                imageElement.classList.add("menu-image")
    
                    //masukin nama resto, kategori
                    let restoContainer = document.createElement("ul")
                    restoContainer.classList.add("container")
    
                        //resto pilihan
                        let restoPilihan = document.createElement("li")
                        restoPilihan.classList.add("resto-pilihan")
                        restoPilihan.innerHTML=`<i class="fa-solid fa-thumbs-up"></i>&nbsp;Restoran Pilihan`
    
                        //nama resto
                        let namaResto = document.createElement("li")
                        namaResto.classList.add("nama-resto")
                        namaResto.innerText= `${restoName} - ${locationResto}` 
    
                        //category
                        let kategoriResto = document.createElement("li")
                        kategoriResto.classList.add("category")
                        kategoriResto.innerText = categoryResto
    
                        //container bawah
                        let containerBawah = document.createElement("li")
                        containerBawah.classList.add("container")
                        containerBawah.classList.add("bottom-container")
    
                            //ul baru
                            let bottomCard = document.createElement("ul")
                            bottomCard.classList.add("bottom-card")
    
                                //star
                                let bottomStar = document.createElement("li")
                                bottomStar.innerHTML = `<i class="fa-solid fa-star" style="color: #F7C941;"></i>&nbsp;${rating}`
    
                                //distance
                                let bottomDistance = document.createElement("li")
                                bottomDistance.innerHTML = `<i class="fa-solid fa-road" style="color:black"></i>&nbsp;${distance} km`
    
                                //time estimation
                                let bottomTime = document.createElement("li")
                                bottomTime.innerHTML = `<i class="fa-solid fa-clock" style="color:maroon"></i>&nbsp;${estimation} min`
    
                                bottomCard.appendChild(bottomStar)
                                bottomCard.appendChild(bottomDistance)
                                bottomCard.appendChild(bottomTime)
    
                            containerBawah.appendChild(bottomCard)
    
                        restoContainer.appendChild(restoPilihan)
                        restoContainer.appendChild(namaResto)
                        restoContainer.appendChild(kategoriResto)
                        restoContainer.appendChild(containerBawah)
    
                imageContainer.appendChild(imageElement)
                imageContainer.appendChild(restoContainer)
    
            card.appendChild(imageContainer)     
    
        listResto.appendChild(card)
    }
}
render()

//ADD EVENT LISTENER UNTUK CLICK MAKANAN
let restoCard = document.querySelectorAll(".image.container")
let clickedRestoName = ''
let foodHTML = document.getElementById("list-food")
let drinkHTML = document.getElementById("list-drink")
let foodContainer = document.getElementById("food-container")
let drinkContainer = document.getElementById("drink-container")

for (let i = 0 ; i < restoCard.length ; i++) {
    restoCard[i].addEventListener("click", x => {
        for (let j = 0 ; j < restaurants.length ; j++) {
            if (restoCard[i].getAttribute("id") === restaurants[j].id) {
                clickedRestoName = restaurants[j].name
                foodHTML.classList.toggle("none")
                drinkHTML.classList.toggle("none")
                toggleFoodAndDrink()
                if(boolean === true){
                    foodContainer.innerHTML=""
                    drinkContainer.innerHTML=""
                } else {
                    insertFoodToHTML()
                    insertDrinkToHTML()
                }
            }
        }
    })
}



let boolean = true

function toggleFoodAndDrink () {
    boolean = !boolean
}

//NUMBER FORMATTER
const formatter = new Intl.NumberFormat('ID', {
    style: 'currency',
    currency: 'IDR',
})

//BUAT ADD TO CART
let cart = 0
let total = 0
let itemCounter = document.getElementById("count")
let cartItem = document.getElementById("cartItem")
let totalPrice = document.getElementById("total")

let addToCart = document.getElementById("cart-box")


//INSERT FOOD
function insertFoodToHTML() {
    for(let i = 0 ; i < foods.length ; i++ ) {
        for (let j = 0 ; j < foods[i].restaurantName.length ; j++) {

            let foodName = foods[i].name
            let image = foods[i].imageURL
            let description = foods[i].description
            let price = foods[i].price
            let id = foods[i].id


            if (foods[i].restaurantName[j] === clickedRestoName) {
                //masukin card
                let card = document.createElement("div")
                card.classList.add("menu-card")
                card.classList.add("menu-container")

                    //masukin image container
                    let imageContainer = document.createElement("div")
                    imageContainer.classList.add("catalog")
                    imageContainer.classList.add("container")

                        //masukin image ke image container
                        let imageElement = document.createElement("img")
                        imageElement.src = image
                        imageElement.classList.add("catalog-image")

                        //bikin side container
                        let sideContainer = document.createElement("div")
                        sideContainer.classList.add("side-container")

                            //bikin ul
                            let points = document.createElement("ul")
                            points.classList.add("side-points")

                                //nama makanan
                                let menuName = document.createElement("li")
                                menuName.classList.add("catalog-name")
                                menuName.innerText = foodName

                                //deskripsi makanan
                                let menuDescription = document.createElement("li")
                                menuDescription.classList.add("catalog-description")
                                menuDescription.innerText = description

                                //harga makanan
                                let menuPrice = document.createElement("li")
                                menuPrice.classList.add("catalog-price")
                                menuPrice.innerText = formatter.format(price)

                                //button beli
                                let buttonList = document.createElement("li")
                                buttonList.classList.add("add-button")
                                    
                                    //masukkin button beneran
                                    let buttonAdd = document.createElement("button")
                                    buttonAdd.innerHTML = `<i class="fa-solid fa-plus"></i>`
                                    buttonAdd.setAttribute("id", id)
                                    buttonAdd.classList.add("add-to-cart")
                                    buttonList.appendChild(buttonAdd)

                                    //add event listener

                                    buttonAdd.addEventListener("click", x => {
                                        cart ++

                                        if(cart === 0) {
                                            itemCounter.innerHTML = 0
                                            cartItem.innerHTML = "<h1>Empty Cart</h1>"
                                        } else {
                                            total += price
                                            itemCounter.innerHTML = cart
                                            totalPrice.innerHTML = formatter.format(total)

                                            //kotaknya
                                            let cardItem = document.createElement("div")
                                            cardItem.classList.add("card-item")

                                            //image divnya
                                            let imageCard = document.createElement("div")
                                            imageCard.classList.add("row-img")

                                            //image
                                            let picture = document.createElement("picture")
                                            picture.setAttribute("src", image)
                                            picture.classList.add("rowimg")

                                            //nama
                                            let checkoutName = document.createElement("p")
                                            checkoutName.innerHTML = foodName
                                            checkoutName.classList.add("checkout-name")

                                            //price
                                            let checkoutPrice = document.createElement("h2")
                                            checkoutPrice.innerHTML = formatter.format(price)
                                            checkoutPrice.classList.add("checkout-price")

                                            //remove button
                                            let removeButton = document.createElement("button")
                                            removeButton.innerText = "delete"
                                            removeButton.classList.add("remove-button")

                                            removeButton.addEventListener("click", x => {
                                                cart --
                                                total -= price

                                                cartItem.removeChild(cardItem)

                                                totalPrice.innerText = formatter.format(total)
                                                itemCounter.innerText = cart

                                                if (itemCounter.innerText === 0) {
                                                    cartItem.innerHTML = "<h1>Empty Cart</h1>"
                                                }
                                            })



                                            imageCard.appendChild(picture)

                                            cardItem.appendChild(imageCard)
                                            cardItem.appendChild(checkoutName)
                                            cardItem.appendChild(checkoutPrice)
                                            cardItem.appendChild(removeButton)

                                            cartItem.appendChild(cardItem)
                                            
                                        }
                                    })
                                    

                                points.appendChild(menuName)
                                points.appendChild(menuDescription)
                                points.appendChild(menuPrice)
                                points.appendChild(buttonList)

                            sideContainer.appendChild(points)

                        imageContainer.appendChild(imageElement)
                        imageContainer.appendChild(sideContainer)
                
                    card.appendChild(imageContainer)

                foodContainer.appendChild(card)
            }
        }
    } 
}

//INSERT DRINK
function insertDrinkToHTML() {
    for(let i = 0 ; i < drinks.length ; i++ ) {

        let drinkName = drinks[i].name
        let image = drinks[i].imageURL
        let description = drinks[i].description
        let price = drinks[i].price
        let id = drinks[i].id

        for (let j = 0 ; j < drinks[i].restaurantName.length ; j++) {
            if (drinks[i].restaurantName[j] === clickedRestoName) {
                //masukin card
                let card = document.createElement("div")
                card.classList.add("menu-card")
                card.classList.add("menu-container")

                //masukin image container
                    let imageContainer = document.createElement("div")
                    imageContainer.classList.add("catalog")
                    imageContainer.classList.add("container")

                        //masukin image ke image container
                        let imageElement = document.createElement("img")
                        imageElement.src = image
                        imageElement.classList.add("catalog-image")

                        //bikin side container
                        let sideContainer = document.createElement("div")
                        sideContainer.classList.add("side-container")

                            //bikin ul
                            let points = document.createElement("ul")
                            points.classList.add("side-points")

                                //nama minuman
                                let menuName = document.createElement("li")
                                menuName.classList.add("catalog-name")
                                menuName.innerText = drinkName

                                //deskripsi minuman
                                let menuDescription = document.createElement("li")
                                menuDescription.classList.add("catalog-description")
                                menuDescription.innerText = description

                                //harga minuman
                                let menuPrice = document.createElement("li")
                                menuPrice.classList.add("catalog-price")
                                menuPrice.innerText = formatter.format(price)

                                //button beli
                                let buttonList = document.createElement("li")
                                buttonList.classList.add("add-button")

                                    //masukkin button beneran
                                    let buttonAdd = document.createElement("button")
                                    buttonAdd.innerHTML = `<i class="fa-solid fa-plus"></i>`
                                    buttonAdd.setAttribute("id", id)
                                    buttonAdd.classList.add("add-to-cart")
                                    buttonList.appendChild(buttonAdd)

                                    //add event listener

                                    buttonAdd.addEventListener("click", x => {
                                        cart ++

                                        if(cart === 0) {
                                            itemCounter.innerHTML = 0
                                            cartItem.innerHTML = "<h1>Empty Cart</h1>"
                                        } else {
                                            total += price
                                            itemCounter.innerHTML = cart
                                            totalPrice.innerHTML = formatter.format(total)

                                            //kotaknya
                                            let cardItem = document.createElement("div")
                                            cardItem.classList.add("card-item")

                                            //image divnya
                                            let imageCard = document.createElement("div")
                                            imageCard.classList.add("row-img")

                                            //image
                                            let picture = document.createElement("picture")
                                            picture.setAttribute("src", image)
                                            picture.classList.add("rowimg")

                                            //nama
                                            let checkoutName = document.createElement("p")
                                            checkoutName.innerHTML = drinkName
                                            checkoutName.classList.add("checkout-name")

                                            //price
                                            let checkoutPrice = document.createElement("h2")
                                            checkoutPrice.innerHTML = formatter.format(price)
                                            checkoutPrice.classList.add("checkout-price")

                                            //remove button
                                            let removeButton = document.createElement("button")
                                            removeButton.innerText = "delete"
                                            removeButton.classList.add("remove-button")

                                            removeButton.addEventListener("click", x => {
                                                cart --
                                                total -= price

                                                cartItem.removeChild(cardItem)

                                                totalPrice.innerText = formatter.format(total)
                                                itemCounter.innerText = cart

                                                if (itemCounter.innerText === 0) {
                                                    cartItem.innerHTML = "<h1>Empty Cart</h1>"
                                                }
                                            })



                                            imageCard.appendChild(picture)

                                            cardItem.appendChild(imageCard)
                                            cardItem.appendChild(checkoutName)
                                            cardItem.appendChild(checkoutPrice)
                                            cardItem.appendChild(removeButton)

                                            cartItem.appendChild(cardItem)
                                            
                                        }
                                    })

                                points.appendChild(menuName)
                                points.appendChild(menuDescription)
                                points.appendChild(menuPrice)
                                points.appendChild(buttonList)

                            sideContainer.appendChild(points)

                        imageContainer.appendChild(imageElement)
                        imageContainer.appendChild(sideContainer)
                
                    card.appendChild(imageContainer)

                drinkContainer.appendChild(card)
                
            }
        }
    } 
}


// xx