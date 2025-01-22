let milisec = document.querySelector(".timermilisec");
let sec = document.querySelector(".timersec");
let min = document.querySelector(".timermin");
let startbtn = document.querySelector(".startbtn");
let stopbtn = document.querySelector(".stopbtn");
let resetbtn = document.querySelector(".resetbtn");

let startchecker
let timer

startbtn.addEventListener("click",()=>{
    timer = setInterval(timeAdder,10);
    startchecker = true
})


stopbtn.addEventListener("click",()=>{
    if(startchecker){
        clearInterval(timer)
    }
    startchecker = false
})


resetbtn.addEventListener("click",()=>{
    if(startchecker){
        clearInterval(timer)
    }
    startchecker = false

    
    nsec = 0
    nmilisec = 0
    nmin = 0


    milisec.innerHTML = nmilisec < 10 ? "0" + nmilisec : nmilisec;
    sec.innerHTML = nsec < 10 ? "0" + nsec : nsec;
    min.innerHTML = nmin < 10 ? "0" + nmin : nmin;
})

function timeAdder(){
    let nmilisec = parseInt(milisec.innerHTML);
    let nsec =  parseInt(sec.innerHTML);
    let nmin =  parseInt(min.innerHTML);

    nmilisec++;

    if(nmilisec==100){
        nsec++;
        nmilisec = 0;
    }
    if(nsec==60){
        nmin++;
        nsec = 0;
    }

    milisec.innerHTML = nmilisec < 10 ? "0" + nmilisec : nmilisec;
    sec.innerHTML = nsec < 10 ? "0" + nsec : nsec;
    min.innerHTML = nmin < 10 ? "0" + nmin : nmin;
}

