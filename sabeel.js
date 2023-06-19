
const h1=document.querySelector('h1');

h1.addEventListener('mouseenter',function(){
    this.classList.add('heading');
});
h1.addEventListener('mouseleave',function(){
     if(this.classList.contains('heading')){
        this.classList.remove('heading');
     }
});



