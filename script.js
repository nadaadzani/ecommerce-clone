import restaurants from "./database-restaurants.js"
import foods from "./database-foods.js"
import drinks from "./database-drinks.js"


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
                        restoPilihan.innerHTML=`<i class="fa-solid fa-thumbs-up"></i>&nbsp;restoran pilihan`
    
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
    console.log(`bolean is now ${boolean}`)  // removable
}

//NUMBER FORMATTER
const formatter = new Intl.NumberFormat('ID', {
    style: 'currency',
    currency: 'IDR',
})


//INSERT FOOD
function insertFoodToHTML() {
    for(let i = 0 ; i < foods.length ; i++ ) {
        for (let j = 0 ; j < foods[i].restaurantName.length ; j++) {

            let foodName = foods[i].name
            let image = foods[i].imageURL
            let description = foods[i].description
            let price = formatter.format(foods[i].price)
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
                    imageContainer.setAttribute("id", id)

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
                                menuPrice.innerText = price

                                //button beli
                                let buttonList = document.createElement("li")
                                buttonList.classList.add("add-button")

                                    //masukkin button beneran
                                    let button = document.createElement("button")
                                    button.innerHTML = `<i class="fa-solid fa-plus"></i>`
                                    buttonList.appendChild(button)

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
        let price = formatter.format(drinks[i].price)
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
                    imageContainer.setAttribute("id", id)

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
                                menuPrice.innerText = price

                                //button beli
                                let buttonList = document.createElement("li")
                                buttonList.classList.add("add-button")

                                    //masukkin button beneran
                                    let button = document.createElement("button")
                                    button.innerHTML = `<i class="fa-solid fa-plus"></i>`
                                    buttonList.appendChild(button)

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








