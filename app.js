let form=document.querySelector("form");
let ul=document.querySelector("ul");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let task=document.querySelector("#task");
    let val=task.value;
    let desc=document.querySelector("#desc");
    let info=desc.value;
    let li=document.createElement("li");
    let h5=document.createElement("h5");
    h5.innerText=val;
    let p=document.createElement("p");
    p.innerText=info;
    let button1=document.createElement("button");
    let button2=document.createElement("button");
    button1.innerText="Delete";
    button1.classList.add("delete");
    li.appendChild(h5);
    li.appendChild(p);
    li.appendChild(button1);
    ul.appendChild(li);
    task.value="";
    desc.value="";
})


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let a=event.target.parentElement;
        console.log(a);
        a.remove();
        
    }
})