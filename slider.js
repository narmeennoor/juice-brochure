function imgslider(anything){
    document.querySelector('.NMN').src=anything;
    

}
function changeCirclecolor(color){
    const circle=document.querySelector('.circle');
    circle.style.background= color;
   
}
function changeCirclecolor2(color){
    const circle=document.querySelector('.circle2');
    circle.style.background= color;
   
}
 function change2()
 {
     const img=document.querySelector('.bg').style.backgroundImage="url('img2bg.png')";
 }

 function change1()
 {
     const img=document.querySelector('.bg').style.backgroundImage="url('img1bg.png')";
 }
 function change3()
 {
     const img=document.querySelector('.bg').style.backgroundImage="url('img3bg.png')";
 }



 const text=document.querySelector('.sec-text');

        const textLoad=()=>{
            setTimeout(() => {
                text.textContent="Emotion";
            },0);
            setTimeout(() => {
                text.textContent="Soothing Flavour";
            },4000);
            setTimeout(() => {
                text.textContent="Freshness";
            },8000);
        }
        textLoad();
        setInterval(textLoad,12000);