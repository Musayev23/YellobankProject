const btn = document.querySelector(".btn");
const mod = document.querySelector(".mod");
const close = document.querySelector(".close");
const listTotal = document.querySelector(".news-list-total");
const UrlApi = "http://localhost:3000/data";

btn.addEventListener("click", () => {
  mod.style.display = "block";
  //   console.log("salam");
});
close.addEventListener("click", () => {
  mod.style.display = "none";
});

const newdate = new Date();
const dateIsos = newdate.toISOString();
async function getPost() {
  try {
    const request = await fetch(UrlApi);
    const res = await request.json();
    let txt = "";

    res.forEach((item) => {
      txt = `
        <li>
        <div class="news-l-desc" >
           <b>${item.title}</b>
           <p></p>
           <div class="news-foot" >
               <a href="#" class="arr-bttn" style="background-image: url(image/blue_arr.svg);">Daha ətraflı</a>
               <time>${new Date(dateIsos).toDateString()}</time>
           </div>
           <a href="#" class="full-link"><b data-id=${item.id} class="closeCard">x</b></a>
        </div>
      </li>
        `;

      listTotal.innerHTML += txt;
    });
    if (!res.ok) {
      throw "error";
    }
  } catch (error) {
    console.log(error);
  }
}
getPost();

async function addPost() {
  const titAdd = document.getElementById("titAdd");
  try {
    fetch(UrlApi, {
      method: "POST",
      body: JSON.stringify({
        title: titAdd.value,
        date: `${dateIsos}`,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      if (!response.ok) {
        throw "error";
      }
    });
  } catch (error) {
    alert(error);
  }
}

async function deletePost() {
  try {
    setTimeout(() => {
      const closeCard = document.querySelectorAll(".closeCard");
      console.log(closeCard);
      closeCard.forEach((b) => {
        b.addEventListener("click", async function (e) {
            
          fetch(`${UrlApi}/${b.dataset.id}`, {
            method: "DELETE",
          });
        });
      });
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}
deletePost();
