const images = ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
'https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
'https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'];

const n= images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

const containerWidth= 80;
const flexContainerWidth= n*containerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i=0; i<n; i++)
{
    const newImg = document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);
}

let curPosition =0;
leftButton.addEventListener('click', ()=>{
    if(curPosition>0){
        curPosition--;
    }
    else{
        curPosition= n-1;
    }
    showImg()
})

rightButton.addEventListener('click', ()=>{
    if(curPosition<n-1){
        curPosition++;
    }
    else{
        curPosition = 0;
    }
    showImg()
})

function showImg(){
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform=`translateX(${translateXDistance}vw)`;
}

