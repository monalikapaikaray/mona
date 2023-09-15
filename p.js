class RailwayR
{
bookticket(name,phone,dest)
{
    this.name=name
    this.phone=phone
    this.dest=dest
}
display()
    {
alert("your name is"+this.name+"your phoneno is"+this.phone+"your dest is"+this.dest)
    }

cancel()
{
    alert("your ticket is cancelled"+this.name)
}
}
let a=new RailwayR()
var n=prompt("enter your name:")
var p=prompt("enter your phone")
var d=prompt("enter your dest")
a.bookticket(n,p,d)
a.display()
a.cancel()