let arr=JSON.parse(localStorage.getItem("cart")) ||[]
menu()
async function menu(){
    try{
        let res= await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=l`
        )
        let data=await res.json()
        console.log(data.meals)
    let total=data.meals
  display(total)

    }catch(error){
        console("this is error")
    }
}
let show=document.querySelector("#order")
function display(total){
       total.map(function(pro){
           let cart=document.createElement("div")
           cart.setAttribute("class","cart")
         let div=document.createElement("div")
        let image=document.createElement("img")
        let price=document.createElement("th")
       image.src=pro.strMealThumb
       
       cart.textContent="Add to cart"
       let price1=`Price -->  ${(Math.floor(Math.random() *400)+100)}`
       price.textContent=price1
       div.append(image,price,cart)
        show.append(div)
         cart.addEventListener("click",function(event){
            let data={
                img:pro.strMealThumb,
                price:price1
            }
             add_cart(data)
             console.log()

         })
                 
        })
 
      function add_cart(cart_data){
         arr.push(cart_data)
         localStorage.setItem("cart",JSON.stringify(arr))
      }

}