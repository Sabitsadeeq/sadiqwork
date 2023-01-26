const btnCheck = document.getElementById("btn");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");
const imgTop1 = document.querySelector(".imgtop-1");
const imgTop2 = document.querySelector(".imgtop-2");
const imgTop3 = document.querySelector(".imgtop-3");
const imgTop4 = document.querySelector(".imgtop-4");
const imgBottom1 = document.querySelector(".imgbottom-1");
const imgBottom2 = document.querySelector(".imgbottom-2");
const imgBottom3 = document.querySelector(".imgbottom-3");
const imgBottom4 = document.querySelector(".imgbottom-4");






    btnCheck.addEventListener("click", () => {
      modal.style.display = "block";
    });
      close.addEventListener("click", () => {
      modal.style.display = "none";
      
});
    imgBottom2.addEventListener("click", () => {
      imgTop1.style.display = "none";
      imgTop2.style.display = "block";

    });
    
    imgBottom3.addEventListener("click", () => {
      imgTop1.style.display = "none";
      imgTop2.style.display = "none";
      imgTop3.style.display = "block";

    });
    imgBottom3.addEventListener("click", () => {
      imgTop1.style.display = "none";
      imgTop2.style.display = "none";
      imgTop3.style.display = "block";
    });
imgBottom4.addEventListener("click", () => {
  imgTop1.style.display = "none";
  imgTop2.style.display = "none";
  imgTop3.style.display = "none";
  imgTop4.style.display = "block";

});

