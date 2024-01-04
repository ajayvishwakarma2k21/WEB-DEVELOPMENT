const currentcounter = document.getElementById('counter');
const posbtn = document.getElementById('pos-btn');
const negbtn = document.getElementById('neg-btn');

let count = 0;

posbtn.addEventListener('click', ()=>{
      count++;
      updatecounter();
})

negbtn.addEventListener('click', () =>{
    count--;
    updatecounter();
})

function updatecounter(){
    currentcounter.innerHTML=count;
}

























// async function fetchdata() {
//    try{
//     const respose =await fetch('https://dummyjson.com/products/1');
//     const jsondata = await respose.json();
//     console.log(jsondata);
    
//     const id= document.getElementById('myid');
//     id.innerHTML=jsondata.title;
//    }
//    catch (err){
//       console.log(err);
//    }
// }
// fetchdata();