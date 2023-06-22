var item=document.getElementById('items');
var li=document.createElement('li');
console.log(li)
li.innerText="Hello World";
var itemlist=document.querySelector("#items");
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor="yellow";
//console.log(itemlist.parentNode.parentNode);
//console.log(itemlist.children);
//console.log(itemlist.childNodes);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor="red";

