const mobileTop = document.querySelector(".mobile-top");
const hedButtom = document.querySelector(".hed-bottom");
const oBank = document.querySelector(".o-bank")
const closeBtn = document.querySelector(".close");
const hedTop = document.querySelector('.hed-top');
const languar = document.querySelector(".languar");
const langClick = document.querySelector(".lang-click");
const menuToggle = document.querySelector(".menu-toggle");
const headAdds =document.querySelector(".head-adds");
let secStore = sessionStorage.getItem('disappear');
const blockContent = document.querySelector(".block-contenet");
const UrlApi = "http://localhost:3000/data";


//! click olunduqda Sstorage ye true elave olunur

closeBtn.addEventListener("click",()=>{
    hedTop.classList.add("top0");
    mobileTop.classList.add("hidden");
    sessionStorage.setItem("disappear", "true");
});

//! eger Sstorage de true varsa bir daha true elave et

// if(secStore=="true"){
//     mobileTop.classList.add("hidden");
//     sessionStorage.setItem("disappear", "true");
// };

languar.addEventListener("click",()=>{
    langClick.classList.toggle("lang-opct")
});

menuToggle.addEventListener("click",()=>{
    menuToggle.classList.toggle("m-toggle")
    headAdds.classList.toggle('adds-none');
});

window.addEventListener("scroll",()=>{
    let prev = window.scrollY
    if(prev>0){
        hedTop.classList.add("hed-hidden");
        hedButtom.classList.add("bg-add");
        oBank.classList.add("scroll-o-bank");
    }else{
        hedTop.classList.remove("hed-hidden");
        hedButtom.classList.remove("bg-add");
        oBank.classList.remove("scroll-o-bank");
    }
});

function process (v, id){
document.getElementById(id).value = v
}
const newdate = new Date();
const dateIsos = newdate.toISOString();
async function getPost(){
    try{
    const request = await fetch(UrlApi);
    const res = await request.json();
    let txt = "";

    res.slice(0,3).forEach((item)=>{
        txt = `
        <div class="col col-1">
        <div class="col-content">
          <div class="news-l-desc">
            <b>${item.title}</b>
            <p></p>
            <div class="news-foot">
              <a href="#" class="arr-bttn" style="background-image: url(./image/blue_arr.svg);">
                Daha ətrafliı
              </a>
              <time>${new Date(dateIsos).toDateString()}</time>
            </div>
            <a class="full-link" href="#"></a>
          </div>
        </div>
      </div>
        `;

        blockContent.innerHTML += txt;
    });
    if (!res.ok){
        throw"error"
    }
    }catch(error){
        console.log(error);
    }
}
getPost();





