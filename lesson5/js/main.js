
function draw() {
    var table = document.createElement('table');
    var trr = document.createElement('tr');
    var arr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');

        //создаем ячейку для цифр
        var tdd = document.createElement('td');
        tdd.style.left = "20px";
        tdd.style.position = "absolute";
        tdd.style.marginTop = "20px";
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (var j = 0; j < 8; j++) {
            var td = document.createElement('td');

            if (i % 2 == j % 2) {
                td.style.background = 'white';
            } else
                td.style.background = 'black';
            tr.appendChild(td);
        }

        table.appendChild(tr);
        var tdd2 = document.createElement('td');
        tdd2.style.position = "absolute";
        tdd2.style.left = "500px";
        tdd2.style.marginTop = "-10px"
        tdd2.style.transform = "rotate(0.5turn)"
        tdd2.innerHTML = 8 - i;
        tr.appendChild(tdd2);
    }

    //ячейка для букв
    for (var k = 0; k < 9; k++) {
        var td = document.createElement('td');
        td.style.background = 'white';
        td.innerHTML = arr[k];
        trr.appendChild(td);
    }



    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();