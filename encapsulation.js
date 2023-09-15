class A{
    constructor(name,phone)
    {
        this.name=name
        this.phone=phone

    }
    display()
    {
        console.log("your name is"+this.name+"your phone is "+this.phone)
    }
}
let a=new A("sam",8743687)
a.display()