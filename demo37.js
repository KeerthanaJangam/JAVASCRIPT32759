let n=parseInt(prompt("Enter Input",0))
let temp=n
let sum=0;
let digit=0;
//sum of number of digits
//0, 1, 153, 370, 371 and 407
while(n!=0)
{
    digit =parseInt(n%10)
    console.log(digit)
    sum +=Math.pow(digit,3)
    n=parseInt(n/10)
}
if(sum === temp)
{
    document.writeln(`${temp} is Armstrong Number`)
}
else
{
    document.writeln(`${temp} is  not a Armstrong Number`)
}