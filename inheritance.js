class A
{
  xyz()
  {
    console.log("parent class property")
  }
}
class B extends A
{
    abcd()
    {
        console.log("child class property")
    }
}
let x=new B()
x.xyz()
x.abcd()