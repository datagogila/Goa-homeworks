//1
const box = document.getElementById("myBox");

    document.getElementById("increaseBtn").onclick = () => {
      box.classList.remove("small");
      box.classList.add("big");
    };

    document.getElementById("decreaseBtn").onclick = () => {
      box.classList.remove("big");
      box.classList.add("small");
    };

    const img = document.getElementById("myImage");

    //2
    img.onclick = () => {
      img.src = "image2.jpg";
    };
    