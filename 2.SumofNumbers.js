
function SumofNum(a,b){
    return a+b;
}

//console.log(SumofNum(55,32));

//document.getElementById('box').innerHTML=SumofNum(33,40);

//Sum of Numbers entered by user:
const num1=parseInt(prompt('enter first number'));
const num2=parseInt(prompt('enter second number'));
const sum=num1+num2;
document.getElementById('box').innerHTML=sum;


