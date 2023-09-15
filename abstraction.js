function employee(name,age,basicsal)
 {
this.name=name
this.age=age
this.basicsal=basicsal
this. bonus=6000
this.actualsal=function()   {
var X=basicsal+bonus
Console.log("the actualsalary is"+X)
}
this.display=function()
{
Console.log("your name is"+this.name+"your age is"+this.age)
}
} 
emp1=employee('rinku',21,30000)
emp1.display()
emp1.actualsal()
