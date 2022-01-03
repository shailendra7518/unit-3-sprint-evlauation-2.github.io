let data=JSON.parse(localStorage.getItem("cart"))
    function order(){

        
     alert("yor order is accepted")
        setTimeout(function(){
            alert("than you we got order")
        },3000)
        setTimeout(function(){
            alert("Your order is being cooked")
        },8000)
        
        setTimeout(function(){
            alert("yor order is ready")
        },10000)
        setTimeout(function(){
            alert("out for dilivery")
        },12000)
      
        setTimeout(function(){
            alert("deliverd")
        },15000)
    }