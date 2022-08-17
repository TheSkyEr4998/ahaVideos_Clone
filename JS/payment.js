var planDetails = JSON.parse(localStorage.getItem("planDetail"));

let planname = document.querySelector('#planName')
planname.innerText = planDetails.plan

var price = document.querySelector('#planPrice')
price.innerText = ('₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#bill1").innerHTML = ('₹ '+parseInt(planDetails.price)+' /-')
document.querySelector("#bill2").innerHTML = ('₹ '+parseInt("0")+' /-')
document.querySelector("#bill3").innerHTML = ('₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#paybtn").addEventListener("click",payFn)

function applyPromoFn(){
    let promo = document.querySelector("#promocode").value
    if(promo == "SKY30"){
        let promovalue1 = Math.floor(parseInt(planDetails.price)*(30/100))
        document.querySelector("#bill2").innerHTML = ('₹ '+promovalue1+' /-')
        document.querySelector("#bill3").innerHTML = ('₹ '+((parseInt(planDetails.price))-(promovalue1))+' /-')
        document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+((parseInt(planDetails.price))-(promovalue1))+' /-')
    }
    else if(promo == "SHAYAD50"){
        let promovalue2 = Math.floor(parseInt(planDetails.price)*(50/100))
        document.querySelector("#bill2").innerHTML = ('₹ '+promovalue2+' /-')
        document.querySelector("#bill3").innerHTML = ('₹ '+((parseInt(planDetails.price))-(promovalue2))+' /-')
        document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+((parseInt(planDetails.price))-(promovalue2))+' /-')
    }
    else if(promo == "VIBE15"){
        let promovalue3 = Math.floor(parseInt(planDetails.price)*(15/100))
        document.querySelector("#bill2").innerHTML = ('₹ '+promovalue3+' /-')
        document.querySelector("#bill3").innerHTML = ('₹ '+((parseInt(planDetails.price))-(promovalue3))+' /-')
        document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+((parseInt(planDetails.price))-(promovalue3))+' /-')
    }
    else if(promo == "DHIRE40"){
        let promovalue4 = Math.floor(parseInt(planDetails.price)*(15/100))
        document.querySelector("#bill2").innerHTML = ('₹ '+promovalue4+' /-')
        document.querySelector("#bill3").innerHTML = ('₹ '+((parseInt(planDetails.price))-(promovalue4))+' /-')
        document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+((parseInt(planDetails.price))-(promovalue))+' /-')
    }
    else{
        alert("Enter a valid Promocode...!")
        window.location.reload()
    }
}

function payFn(){
    alert("Your have subscribed with the product....Enjoy Watching...!");
    window.location.href="../HTML/index.html"
}
    

// (parseInt(planDetails.price)*(30/100))


// Math.floor((parseInt(planDetails.price))-(parseInt(planDetails.price)*(30/100)))