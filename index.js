const btnplusarray = document.getElementsByClassName("plus")
const checkboxinputes=document.querySelectorAll('input')
let heart=document.querySelectorAll('.like')
let deleete=document.querySelectorAll('.delete')
// let ter=document.querySelectorAll('tr')
console.log(checkboxinputes)
for (let i = 0; i < btnplusarray.length; i++) {
  btnplusarray[i].addEventListener("click", increment);
  checkboxinputes[i].addEventListener('click',totalprice)
  heart[i].addEventListener('click', heeart)
  deleete[i].addEventListener('click',Del)
}
function increment(event) {
  const btnPlus = event.target;
//   console.log(btnPlus);
  const divelt = btnPlus.parentElement;
//   console.log(divelt);
  const quantitytag=divelt.querySelector('p')
//   console.log(quantitytag)
  var quantityvalue=parseInt(quantitytag.innerHTML)
//   console.log(quantityvalue)
  quantityvalue++
  quantitytag.innerHTML=quantityvalue
   const trElement=divelt.parentElement.parentElement
   console.log(trElement)
   const unitPricevalue=Number(trElement.querySelector('.unitPrice').innerHTML)
   console.log(unitPricevalue)
   const pricetag=trElement.querySelector('.price')
//    console.log(pricetag)
   var pricevalue=Number(pricetag.innerHTML)
   pricevalue=quantityvalue*unitPricevalue
   console.log(pricevalue)
   pricetag.innerHTML=pricevalue
}
const btnminusarray = document.getElementsByClassName("minus")
for (let i = 0; i < btnplusarray.length; i++) {
  btnminusarray[i].addEventListener("click", desincrement);
}
function desincrement(event) {
  const btnminus = event.target;
//   console.log(btnPlus);
  const divelt = btnminus.parentElement;
//   console.log(divelt);
  const quantitytag=divelt.querySelector('p')
//   console.log(quantitytag)
  var quantityvalue=parseInt(quantitytag.innerHTML)
  console.log(quantityvalue)
  if(quantityvalue>0){
    quantityvalue--
} 
  quantitytag.innerHTML=quantityvalue
   const trElement=divelt.parentElement.parentElement
   console.log(trElement)
   const unitPricevalue=Number(trElement.querySelector('.unitePrice'.innerHTML))
   const pricetag=trElement.querySelector('.price')
   console.log(pricetag)
   var pricevalue=Number(pricetag.innerHTML)
   pricevalue=quantityvalue*unitPricevalue
   pricetag.innerHTML=pricevalue
  
}
function totalprice(e){
    const checkboxElement=e.target
    console.log(checkboxElement)
    const pricevalue=Number(checkboxElement.parentElement.parentElement.querySelector('.price').innerHTML)
    var totaltag=document.querySelector('#total')
    var totalvalue=parseInt(totaltag.innerHTML)
    console.log(totalvalue)
    const btn1=checkboxElement.parentElement.parentElement.querySelector('.plus')
    if(checkboxElement.checked===true){
        totalvalue+= pricevalue
        totaltag.innerHTML=totalvalue
        btn1.setAttribute("disabled",true)
    }
    else{
        totalvalue-=pricevalue
        totaltag.innerHTML=totalvalue
        btn1.removeAttribute("disabled",true)
    }
}
function heeart(e){
    x=e.target

    x.style.color='red'
    if(x.style.color==='red'){
        x.style.color='grey'
    }
}
function Del(e){
    y=e.target
    y.parentElement.parentElement.parentElement.parentElement.remove()


}