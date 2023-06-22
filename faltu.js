console.dir(document)
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[4]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
var headertitle = document.getElementById("header-title");
console.log("Hii");
//console.log(headertitle);
//headertitle.textContent = "Hello";
//headertitle.innerText = "GoodBye"
headertitle.style.borderBottom = "3px solid black";
var item =document.getElementById("item");
item.style.color="green";
var item3=document.getElementsByClassName('list-group-item');
console.log(item3);
console.log(item3[2]);
item3[2].textContent='Hello 2';
item3[2].style.fontWeight="bold";
item3[2].style.backgroundColor="green";
for(let i=0;i<item3.length;i++){
    item3[i].style.fontWeight="bold";
}
var li=document.createElement('li');
console.log(li);
li.innerText="Item 5"

