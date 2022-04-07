// num.addEventListener('click',(e)=>{ 
//     console.log(e.target.value)
// })
let EachAmount = 0
function calc(num){
    const newbill = document.getElementById('bill').value
    const newpeople = parseFloat(document.getElementById('people').value)
    let tip_amount = document.querySelector('.tip_Amount')
    let Total = document.querySelector('.total')
    const btn = document.querySelector('button')
    // btn.style.backgroundColor = 'aqua'
    // console.log(newpeople)
    let EachAmount = newbill / newpeople
    // console.log(EachAmount)
    let tipAmount = parseFloat(EachAmount * num)
    let total = parseFloat(EachAmount + tipAmount)

    // console.log(tipAmount)
    tip_amount.innerHTML = Math.floor(tipAmount * 100)/100
    // console.log(total)
    Total.innerHTML = total.toFixed(2)
}
function reset(){
    // document.querySelector('#tip_form').reset()
    const bill = document.getElementById('bill')
    const people = document.getElementById('people')
    let tip_amount = document.querySelector('.tip_Amount')
    let Total = document.querySelector('.total')
    bill.value = ''
    people.value = ''
    tip_amount.innerHTML = '$0.00'
    Total.innerHTML = '$0.00'
}