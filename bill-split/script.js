var currency = "rupee";
var c = {"rupee":"₹","dollar":"$","euro":"€","pound":"£"};
var amount = document.getElementById('amount');
var person = document.getElementById('person');
var rate = document.getElementById('rate');
//Adding the various event listeners of the currency buttons
document.getElementById('rupee').addEventListener("click",function(){
  currency = "rupee";
  document.getElementById('rupee').className = "currencyBtnAct";
  document.getElementById('dollar').className = "currencyBtn";
  document.getElementById('euro').className = "currencyBtn";
  document.getElementById('pound').className = "currencyBtn";
});

document.getElementById('dollar').addEventListener("click",function(){
  currency = "dollar";
  document.getElementById('dollar').className = "currencyBtnAct";
  document.getElementById('rupee').className = "currencyBtn";
  document.getElementById('euro').className = "currencyBtn";
  document.getElementById('pound').className = "currencyBtn";
});

document.getElementById('euro').addEventListener("click",function(){
  currency = "euro";
  document.getElementById('euro').className = "currencyBtnAct";
  document.getElementById('dollar').className = "currencyBtn";
  document.getElementById('rupee').className = "currencyBtn";
  document.getElementById('pound').className = "currencyBtn";
});

document.getElementById('pound').addEventListener("click",function(){
  currency = "pound";
  document.getElementById('pound').className = "currencyBtnAct";
  document.getElementById('dollar').className = "currencyBtn";
  document.getElementById('euro').className = "currencyBtn";
  document.getElementById('rupee').className = "currencyBtn";
});
//The above code is very raw and could have been summarised in less than half the space
//But since performance isnt required,hence letting it be like that

//Adding the event listener to the calculate button
document.getElementById("calc").addEventListener("click",function(){
  if(amount.value==0 || person.value==0){
    alert("One of the fields is incomplete!");
  }
  else{
    var tax = parseInt(amount.value)*(parseInt(rate.value)/100);
    var total = parseInt(amount.value)+tax;
    var pp = total/parseInt(person.value);
    console.log(pp);
  }
  document.getElementById('billAmount').innerHTML = c[currency]+" "+(total);
  document.getElementById('taxAmount').innerHTML = c[currency]+" "+(tax);
  document.getElementById('ppAmount').innerHTML = c[currency]+" "+(pp);
});
