let show=document.querySelector("#dish")
let data=JSON.parse(localStorage.getItem("cart"))
console.log(data)

let count=document.createElement("h1")
count.textContent=`Total Dish -- ${data.length}`
document.querySelector("#count").append(count)
data.map(function(dish){


    let div=document.createElement("div")
let img=document.createElement("img")
let price=document.createElement("th")
let order=document.createElement("div")
order.textContent="order"
order.setAttribute("class","order")
img.src=dish.img
price.textContent= dish.price
div.append(img,price,order)
show.append(div)
order.addEventListener("click", function(){
window.location.replace("checkout.html")
})



})