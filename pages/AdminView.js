

// window.addEventListener("load", function () {
//     // do things after the DOM loads fully
//     console.log("Everything is loaded");
//    });
// const button = document.querySelector("#adminview")
// button.addEventListener("click",function(){console.log('This works')})

let record = document.querySelectorAll(".data")
console.log(record)

record.forEach(element=>{element.addEventListener('click',
function(e){        
    console.log(e.path[1].children[0].innerHTML+e.path[1].children[1].innerHTML)
})})