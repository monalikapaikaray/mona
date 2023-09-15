class Bank
{
    constructor(name1,phone,adhar,bal,pin)
    {
     this.name1=name1
     this.phone=phone
     this.adhar=adhar
     this.bal=bal
     this.pin=pin
    }
    display()
    {
        var p=Number(prompt("enter your pin :"))
        if(this.pin==p)
        {
            alert("your name is:"+this.name1+"your balance is :"+this.bal)
        }
        else{
            alert("incorrect pin")
        }
    }
    deposite()
    {
        var p=Number(prompt("enter your pin:"))
        if(this.pin==p)
        {
            var a=Number(prompt("enter your amount:"))
            alert("your previous amount is :"+this.bal)
            this.bal=this.bal+a
            alert("your current amount is :"+this.bal)
        }
        else{
            alert("incorrect pin")
        }
    }
    withdraw()
    {
        var p=Number(prompt("enter your pin:"))
        if(this.pin==p)
        {
            var a=Number(prompt("enter your amount:"))
            if(a<=this.bal)
            {
                alert("your previous balance is:"+this.bal)
                this.bal=this.bal-a
                alert("your current balance is:"+this.bal)
            }
            else{
                alert("insufficient balance")
            }
        }
        else{
            alert("incorrect pin")
        }
    }
}
alert("welcome to my bank")
var n=prompt("enter your name:")
var ph=Number(prompt("enter your phone number"))
var adhar=Number(prompt("enter your adhar"))
var bal=Number(prompt("enter your balance:"))
var pi=Number(prompt("enter your pin:"))
let obj=new Bank(n,ph,adhar,bal,pi)
var k=Number(prompt("enter your choice 1 for enquery 2 for deposite and 3 for withdraw "))
if(k==1)
{
    obj.display()
}
else if(k==2)
{
    obj.deposite()
}
else if(k==3)
{
    obj.withdraw()
}
else
{
    alert("invalid")
}