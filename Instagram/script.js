var changeimg=document.querySelector('.mobile1');
var i=2;
setInterval(() => {
    changeimg.setAttribute('src',`${i+1}.png`)
    i=i+1;
    if(i==4)
    {
        i=i%4;
    }
}, 3000);
console.log(changeimg);