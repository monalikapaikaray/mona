var book=[]
var x= prompt("enter your liabray by open and exit it by exit")
while(x!="exit")
{
    var p=prompt("enter your choice 1>add 2>del 3>show")
    if(p=='add'){
        var a=prompt("enter book name")
        book.push(a)
    }
    else if(p=='del')
    {
        book.pop()
    }
    else if(p=='show')
    {
        alert(book)
    }
    else{
        console.log("invalid input")
    }

}