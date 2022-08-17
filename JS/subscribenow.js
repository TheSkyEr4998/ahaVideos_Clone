
var closePopupBtn = document.querySelector('.popup-close-btn')


function openPopup1(){
    document.body.classList.add('popup-active')
    let container = document.querySelector('.popup')
    container.style = 'background-color:rgb(82, 75, 75);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;border-radius:15px;';

    let heading = document.createElement('h3')
    heading.innerHTML = 'Selected Plan'

    let box1=document.createElement('div')

        let planName = document.createElement('h4')
        planName.innerHTML = 'aha Gold'

        let planPrice = document.createElement('h4')
        planPrice.innerHTML = '₹ ' + (parseInt('699')) + ' /-'

        box1.append(planName,planPrice)

        

    let paymentBtn = document.createElement('a')

        let box2=document.createElement('button')
        box2.innerHTML='Proceed To Payment'
        box2.style='background-color:orangered;border-radius:10px;padding:3%'

        paymentBtn.href='../HTML/payment.html'

        paymentBtn.append(box2)

    container.append(heading,box1,paymentBtn)

    localStorage.clear()

    var planDetail={plan:'aha Gold',price:'699'};
    localStorage.setItem('planDetail',JSON.stringify(planDetail))
}
function openPopup2(){
    document.body.classList.add('popup-active')
    let container = document.querySelector('.popup')
    container.style = 'background-color:rgb(82, 75, 75);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;border-radius:15px;';

    let heading = document.createElement('h3')
    heading.innerHTML = 'Selected Plan'

    let box1=document.createElement('div')

        let planName = document.createElement('h4')
        planName.innerHTML = 'Telugu Annual Plan'

        let planPrice = document.createElement('h4')
        planPrice.innerHTML = '₹ ' + (parseInt('299')) + ' /-'

        box1.append(planName,planPrice)
        

    let paymentBtn = document.createElement('a')

        let box2=document.createElement('button')
        box2.innerHTML='Proceed To Payment'
        box2.style='background-color:orangered;border-radius:10px;padding:3%'
        
        paymentBtn.href='../HTML/payment.html'

        paymentBtn.append(box2)

    container.append(heading,box1,paymentBtn)
    
    localStorage.clear()

    var planDetail={plan:'Telugu Annual Plan',price:'299'};
    localStorage.setItem('planDetail',JSON.stringify(planDetail))
}
function openPopup3(){
    document.body.classList.add('popup-active')
    let container = document.querySelector('.popup')
    container.style = 'background-color:rgb(82, 75, 75);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;border-radius:15px;';

    let heading = document.createElement('h3')
    heading.innerHTML = 'Selected Plan'

    let box1=document.createElement('div')
    box1.class='plan-details'

        let planName = document.createElement('h4')
        planName.innerHTML = 'Telugu Quarterly Plan'

        let planPrice = document.createElement('h4')
        planPrice.innerHTML = '₹ ' + (parseInt('99')) + ' /-'

        box1.append(planName,planPrice)

    let paymentBtn = document.createElement('a')

        let box2=document.createElement('button')
        box2.innerHTML='Proceed To Payment'
        box2.style='background-color:orangered;border-radius:10px;padding:3%'
        
    paymentBtn.href='../HTML/payment.html'

        paymentBtn.append(box2)

    container.append(heading,box1,paymentBtn)
    
    localStorage.clear()

    var planDetail={plan:'Telugu Quarterly Plan',price:'99'};
    localStorage.setItem('planDetail',JSON.stringify(planDetail))
}

closePopupBtn.addEventListener('click',function(){
    document.body.classList.remove('popup-active')
    window.location.reload()
});