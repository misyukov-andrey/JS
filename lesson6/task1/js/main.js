
var img, src;

for (var i = 0; i < 3; i++) {
    img = document.createElement("img");
    img.src = "img/img" + (+[i] + 1) + ".jpeg";
    document.querySelector(".img__small").append(img);
}
for (var j = 0; j < 2; j++) {
    img[j] = document.createElement("img");
    document.querySelector(".img__large").append(img[j]);
    img[j].src = "img2/img" + (+[j] + 1) + ".jpeg";
    img[j].className = "img__large--" + [j];
}

var mas = document.querySelectorAll("img");
for (item of mas) {
    item.onclick = f;
}

function f(e) {
    switch (e.target) {
        case mas[0]:
            img[0].style.display = "block";
            break;
        case mas[1]:
            img[1].style.display = "block";
            break;
        case mas[2]:
            img[0].style.display = "none";
            img[1].style.display = "none";
            alert("При загрузке файла произошла ошибка!");
            break;
        default:
            break;
    }
}


