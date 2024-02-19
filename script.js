const bt1=document.querySelector("#add");
const bt2=document.querySelector("#sub");
const bt3=document.querySelector("#mul");
const bt4=document.querySelector("#div");

const num1=document.querySelector("#num1");
const num2=document.querySelector("#num2");

const res=document.querySelector(".res");

bt1.addEventListener("click",()=>{
    let a=num1.value;
    let b=num2.value;
    let c=summing(a,b,0);
    let r=c.toString();
    console.log(c);
    res.innerText=r;
})

bt2.addEventListener("click",()=>{
    let a=num1.value;
    let b=num2.value;
    let c=a-b;
    let r=c.toString();
    console.log(r);
    res.innerText=r;
})

bt3.addEventListener("click",()=>{
    let a=num1.value;
    let b=num2.value;
    let c=a*b;
    let r=c.toString();
    console.log(r);
    res.innerText=r;
})

bt4.addEventListener("click",()=>{
    let a=num1.value;
    let b=num2.value;
    let c=a/b;
    let r=c.toString();
    console.log(r);
    res.innerText=r;
})

function summing( a, b ){
    for(let i=1;i<=b;i++){
        a++;
    }
    return a;
}