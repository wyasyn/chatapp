const rad1 = document.querySelector(".rad1");
const rad2 = document.querySelector(".rad2");

const phone1 = document.querySelector('.phone1');
const phone2 = document.querySelector('.phone2');
setTimeout(() => {
  phone1.style.display = "none";
  phone2.style.display = "block";
}, 2000);



rad1.onclick = () => {
    rad2.style.backgroundColor = "";
    rad1.style.backgroundColor = "white";
}

rad2.onclick = () => {
    rad1.style.backgroundColor = "";
    rad2.style.backgroundColor = "white";
}