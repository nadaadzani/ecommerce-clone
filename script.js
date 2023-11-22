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
