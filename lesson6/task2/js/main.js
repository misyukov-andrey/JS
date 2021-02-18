var products = [
    {
        name: 'Кросовки мужские "Reebok"',
        cost: 2000,
    },
    {
        name: 'Кросовки мужские "Demix"',
        cost: 3000,
    },
    {
        name: 'Кросовки мужские "Demix"',
        cost: 3500,
    }
]



function f(e) {
    switch (e.target) {
        case buttons[0]:
            var sum = document.createElement("h4");
            sum.innerText = ("Наименование:" + " " + products[0].name + " " + " Стоимость:" + " " + products[0].cost);
            document.querySelector(".basket").append(sum);
            document.querySelector(".sum").innerText += (" " + products[0].cost);
            break;
        case buttons[1]:
            var sum = document.createElement("h4");
            sum.innerText = ("Наименование:" + " " + products[1].name + " " + " Стоимость:" + " " + products[1].cost);
            document.querySelector(".basket").append(sum);
            break;
        case buttons[2]:
            var sum = document.createElement("h4");
            sum.innerText = ("Наименование:" + " " + products[2].name + " " + " Стоимость:" + " " + products[2].cost);
            document.querySelector(".basket").append(sum);
            
            break;
        default:
            break;
    }
}








var buttons = document.querySelectorAll("button");

for (var item of buttons) {
    item.onclick = f;
}
