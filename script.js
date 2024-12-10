document.getElementById("sec1").style.display = "block"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "none"

/* Кнопка выход */

document.addEventListener('click', function(event) {
    if (event.target.id === 'btn2') {
        document.getElementById('vvod').value = "";
        vyvod.innerHTML = ""
        document.documentElement.style.setProperty("--transfX-1","0px");
        document.getElementsByTagName("body")[0].style.backgroundColor = 'white'
        document.getElementById("form1").reset();
        document.getElementById("login").classList.remove('valinval')
        document.getElementById("birth").classList.remove('valinval')
        document.getElementById("nav1").classList.add('active')
        document.getElementById("nav2").classList.remove('active')
        document.getElementById("nav3").classList.remove('active')
        document.getElementById("nav4").classList.remove('active')
        document.getElementById("nav5").classList.remove('active')
        document.getElementById("sec1").style.display = "block"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "none"
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')
        document.getElementById("dict-dobav1").innerText = ""
        document.getElementById("dict-dobav2").innerText = ""
        document.getElementById("dict-dobav3").innerText = ""
        document.getElementById("dict-dobav4").innerText = ""
        document.getElementById("dict-dobav5").innerText = ""
        document.getElementById("dict-dobav6").innerText = ""
        document.getElementById("dict-dobav7").innerText = ""
        document.getElementById("dict-dobav8").innerText = ""
        document.getElementById("dict-dobav9").innerText = ""
        document.getElementById("dict-dobav10").innerText = ""
        c = 1
        x = 0
        document.getElementById("dobav-img").innerText = c
        document.documentElement.style.setProperty("--transfX-2", 0 * (-500) + "px");
        document.getElementById("restest").innerText = "Результат теста: " + count + " из 6"
        document.getElementById("dbv-res").innerText = ""
        document.getElementById("form2").reset();
        document.getElementById("dbv1").innerText = "";
        document.getElementById("dbv1").style.color = 'black'
        document.getElementById("fieldset1").style.border = '1px solid black'
        document.getElementById("vern1").innerText = ""
        document.getElementById("dbv2").innerText = "";
        document.getElementById("dbv2").style.color = 'black'
        document.getElementById("fieldset2").style.border = '1px solid black'
        document.getElementById("vern2").innerText = ""
        document.getElementById("dbv3").innerText = "";
        document.getElementById("dbv3").style.color = 'black'
        document.getElementById("fieldset3").style.border = '1px solid black'
        document.getElementById("vern3").innerText = ""
        document.getElementById("dbv4").innerText = "";
        document.getElementById("dbv4").style.color = 'black'
        document.getElementById("fieldset4").style.border = '1px solid black'
        document.getElementById("vern4").innerText = ""
        document.getElementById("dbv5").innerText = "";
        document.getElementById("dbv5").style.color = 'black'
        document.getElementById("fieldset5").style.border = '1px solid black'
        document.getElementById("vern5").innerText = ""
        document.getElementById("dbv6").innerText = "";
        document.getElementById("dbv6").style.color = 'black'
        document.getElementById("fieldset6").style.border = '1px solid black'
        document.getElementById("vern6").innerText = ""
        document.getElementById("zanovobtn").style.display = 'none'
        count = 0
        document.getElementById("restest").innerText = ""
        
        document.querySelector("#scroll").scrollIntoView();
    }
});

/* Секция авторизация */

const form = document.forms.formOne

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById("login").classList.add('valinval')
    document.getElementById("birth").classList.add('valinval')
    
    

    let result = "";
    let test = true;
    
    if (form.login.validity.valid) {
        result += "Логин: " + form.login.value + '\n'
        form.login.labels[0].innerText = ""
    
    } else {
        form.login.labels[0].innerText = "Неверно введён логин";
        test = false;
    }
    
    if (form.birth.validity.valid) {
        result += "Дата рождения: " + form.birth.value + '\n'
        form.birth.labels[0].innerText = ""
    
    } else {
        form.birth.labels[0].innerText = "Неверно введена дата";
        test = false;
    }

    result += "Пол: " + form.sex.value + "\n"
    
    if (test) {
        document.getElementById("log").innerText = "Логин: " + form.login.value
        document.getElementById("dbv-log").innerText = form.login.value
        document.getElementById("dbv-datroz").innerText = form.birth.value
        document.getElementById("dbv-pol").innerText = form.sex.value
    }
    

    if (test == true) {
        document.documentElement.style.setProperty("--transfX-1","-1503px");
        document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(15, 15, 15)'
    }

})

/* Сеекция шапка сайта */

document.addEventListener('click', function(event) {
    if (event.target.id === 'nav1') {
        document.getElementById("nav1").classList.add('active')
        document.getElementById("nav2").classList.remove('active')
        document.getElementById("nav3").classList.remove('active')
        document.getElementById("nav4").classList.remove('active')
        document.getElementById("nav5").classList.remove('active')
        document.getElementById("sec1").style.display = "block"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "none"
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'nav2') {
        document.getElementById("nav1").classList.remove('active')
        document.getElementById("nav2").classList.add('active')
        document.getElementById("nav3").classList.remove('active')
        document.getElementById("nav4").classList.remove('active')
        document.getElementById("nav5").classList.remove('active')
        document.getElementById("sec1").style.display = "none"
        document.getElementById("sec2").style.display = "block"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "none"
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'nav3') {
        document.getElementById("nav1").classList.remove('active')
        document.getElementById("nav2").classList.remove('active')
        document.getElementById("nav3").classList.add('active')
        document.getElementById("nav4").classList.remove('active')
        document.getElementById("nav5").classList.remove('active')
        document.getElementById("sec1").style.display = "none"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "block"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "none"
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'nav4') {
        document.getElementById("nav1").classList.remove('active')
        document.getElementById("nav2").classList.remove('active')
        document.getElementById("nav3").classList.remove('active')
        document.getElementById("nav4").classList.add('active')
        document.getElementById("nav5").classList.remove('active')
        document.getElementById("sec1").style.display = "none"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "block"
        document.getElementById("sec5").style.display = "none"
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'nav5') {
        document.getElementById("nav1").classList.remove('active')
        document.getElementById("nav2").classList.remove('active')
        document.getElementById("nav3").classList.remove('active')
        document.getElementById("nav4").classList.remove('active')
        document.getElementById("nav5").classList.add('active')
        document.getElementById("sec1").style.display = "none"
        document.getElementById("sec2").style.display = "none"
        document.getElementById("sec3").style.display = "none"
        document.getElementById("sec4").style.display = "none"
        document.getElementById("sec5").style.display = "block"
    }
});

/* Секция Словарь */

const items = ["M16A4", "M416", "SCAR-L", "G36C", "OBZ", "AUG", "FAMAS", "AKM", "Beryl M762", "Mk47 Mutant"]

const vvod = document.getElementById("vvod")
const vyvod = document.getElementById("vyvod")

vvod.addEventListener("input", () => {
    vyvod.innerHTML = ""
    items.forEach(item => {
        if (item.toLowerCase().includes(vvod.value.toLowerCase())) {
            const li = document.createElement("li")
            li.innerText = item;
            vyvod.appendChild(li)
        }
    })
})

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn1') {
        document.getElementById("dict-btn1").classList.add('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn1").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = "M16A4 — это полуавтоматическая винтовка, которая относится к классу оружия AR (автоматические винтовки). Она известна своей высокой точностью и стабильностью, что делает её отличным выбором для средних и дальних дистанций."
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn2') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.add('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn2").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = "M416 — это одна из самых популярных автоматических винтовок в игре, известная своей универсальностью и высокой эффективностью в различных боевых ситуациях."
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn3') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.add('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn3").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = "SCAR-L — это автоматическая винтовка, представленная в PUBG Battlegrounds, которая выделяется своей надежностью и сбалансированными характеристиками. Она использует патроны калибра 5.56 мм и является популярным выбором среди игроков благодаря своей универсальности."
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn4') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.add('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn4").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = "G36C — это универсальная автоматическая винтовка, известная своей высокой скорострельностью и хорошей точностью. Идеально подходит для средних дистанций, но также эффективна в ближнем бою. Она обладает низкой отдачей, что делает её удобной в использовании."
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn5') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.add('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn5").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = " QBZ — это стандартная автоматическая винтовка для игроков на карте Sanhok. Она предлагает хорошую сбалансированность между скорострельностью и точностью, а также имеет умеренный урон. QBZ хорошо подходит для различных игровых стилей."
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn6') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.add('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn6").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = "AUG — это высокотехнологичная автоматическая винтовка с отличной стабильностью и точностью. Она обладает низкой отдачей и хорошей скорострельностью, что делает её идеальной для стрельбы на средних и дальних дистанциях."
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn7') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.add('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn7").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = "FAMAS — это французская автоматическая винтовка, известная своей уникальной конструкцией и высокой скорострельностью. Хотя у неё высокая отдача, при правильном использовании она может быть очень эффективной на средних дистанциях."
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn8') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.add('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn8").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = "AKM — это мощная автоматическая винтовка с высоким уроном и хорошей дальнобойностью. Несмотря на свою высокую отдачу, она остается популярным выбором среди игроков благодаря своей способности наносить значительный урон."
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn9') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.add('activ')
        document.getElementById("dict-btn10").classList.remove('activ')

        if (document.getElementById("dict-btn9").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = "Beryl M762 — это мощная автоматическая винтовка, которая сочетает в себе высокую скорость стрельбы и значительный урон. У неё высокая отдача, но при правильной модификации и технике стрельбы она может быть очень эффективной."
            document.getElementById("dict-dobav10").innerText = ""
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'dict-btn10') {
        document.getElementById("dict-btn1").classList.remove('activ')
        document.getElementById("dict-btn2").classList.remove('activ')
        document.getElementById("dict-btn3").classList.remove('activ')
        document.getElementById("dict-btn4").classList.remove('activ')
        document.getElementById("dict-btn5").classList.remove('activ')
        document.getElementById("dict-btn6").classList.remove('activ')
        document.getElementById("dict-btn7").classList.remove('activ')
        document.getElementById("dict-btn8").classList.remove('activ')
        document.getElementById("dict-btn9").classList.remove('activ')
        document.getElementById("dict-btn10").classList.add('activ')

        if (document.getElementById("dict-btn10").classList.contains("activ")) {
            document.getElementById("dict-dobav1").innerText = ""
            document.getElementById("dict-dobav2").innerText = ""
            document.getElementById("dict-dobav3").innerText = ""
            document.getElementById("dict-dobav4").innerText = ""
            document.getElementById("dict-dobav5").innerText = ""
            document.getElementById("dict-dobav6").innerText = ""
            document.getElementById("dict-dobav7").innerText = ""
            document.getElementById("dict-dobav8").innerText = ""
            document.getElementById("dict-dobav9").innerText = ""
            document.getElementById("dict-dobav10").innerText = "Mk47 Mutant — это уникальная винтовка, которая сочетает в себе элементы автоматической и полуавтоматической стрельбы. Она обладает высоким уроном и хорошей точностью, но имеет меньшую скорострельность по сравнению с другими автоматическими винтовками."
        }
    }
});

/* Секция галерея */

let c = 1
document.getElementById("dobav-img").innerText = c

function funR() {
    if (x < car.length - 1) {
        x += 1
        c += 1
    }
    
    document.documentElement.style.setProperty("--transfX-2", x * (-500) + "px");
    document.getElementById("dobav-img").innerText = c
}

function funL() {
    if (x > 0) {
        x -= 1
        c -= 1 
    }

    document.documentElement.style.setProperty("--transfX-2", x * (-500) + "px");
    document.getElementById("dobav-img").innerText = c
}


let car = document.getElementsByClassName('deff');
let x = 0;


const btnP = document.getElementById('btnPver')
btnP.addEventListener('click', funR)
const btnM = document.getElementById('btnNaz')
btnM.addEventListener('click', funL)

/* Секция тест */

let count = 0

const form2 = document.forms.formTwo


form2.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const rad1 = document.querySelector('input[name="butt1"]:checked') !==null;
    const rad2 = document.querySelector('input[name="butt2"]:checked') !==null;
    const rad3 = document.querySelector('input[name="butt3"]:checked') !==null;
    const rad4 = document.querySelector('input[name="butt4"]:checked') !==null;
    const rad5 = document.getElementById("test5").value;
    const rad6 = document.getElementById("test6").value;

    
    if ((rad1 == false) || (rad2 == false) || (rad3 == false) || (rad4 == false) || (rad5 == "") || (rad6 == ""))  {
        
    }

    else {
        const a = document.querySelector('input[name="butt1"]:checked').value
        const b = document.querySelector('input[name="butt2"]:checked').value
        const c = document.querySelector('input[name="butt3"]:checked').value
        const d = document.querySelector('input[name="butt4"]:checked').value
        
        if (a == "z3") {
            document.getElementById("dbv1").innerText = "Верно";
            document.getElementById("dbv1").style.color = 'green'
            document.getElementById("fieldset1").style.border = '3px solid green'
            document.getElementById("vern1").innerText = "";
            count += 1
        }

        else {
            document.getElementById("dbv1").innerText = "Неверно";
            document.getElementById("dbv1").style.color = 'red'
            document.getElementById("fieldset1").style.border = '3px solid red'
            document.getElementById("vern1").innerText = "Верный ответ: Мирамар";
        }

        if (b == "z6") {
            document.getElementById("dbv2").innerText = "Верно";
            document.getElementById("dbv2").style.color = 'green'
            document.getElementById("fieldset2").style.border = '3px solid green'
            document.getElementById("vern2").innerText = "";
            count +=1
        }

        else {
            document.getElementById("dbv2").innerText = "Неверно";
            document.getElementById("dbv2").style.color = 'red'
            document.getElementById("fieldset2").style.border = '3px solid red'
            document.getElementById("vern2").innerText = "Верный ответ: Сковорода";
        }

        if (c == "z12") {
            document.getElementById("dbv3").innerText = "Верно";
            document.getElementById("dbv3").style.color = 'green'
            document.getElementById("fieldset3").style.border = '3px solid green'
            document.getElementById("vern3").innerText = "";
            count +=1
        }

        else {
            document.getElementById("dbv3").innerText = "Неверно";
            document.getElementById("dbv3").style.color = 'red'
            document.getElementById("fieldset3").style.border = '3px solid red'
            document.getElementById("vern3").innerText = "Верный ответ: AVM";
        }

        if (d == "z15") {
            document.getElementById("dbv4").innerText = "Верно";
            document.getElementById("dbv4").style.color = 'green'
            document.getElementById("fieldset4").style.border = '3px solid green'
            document.getElementById("vern4").innerText = "";
            count +=1
        }

        else {
            document.getElementById("dbv4").innerText = "Неверно";
            document.getElementById("dbv4").style.color = 'red'
            document.getElementById("fieldset4").style.border = '3px solid red'
            document.getElementById("vern4").innerText = "Верный ответ: SK-12";
        }


        if (form2.test5.validity.valid) {
            document.getElementById("dbv5").innerText = "Верно";
            document.getElementById("dbv5").style.color = 'green'
            document.getElementById("fieldset5").style.border = '3px solid green'
            document.getElementById("vern5").innerText = "";
            count +=1
        } 
        else {
            document.getElementById("dbv5").innerText = "Неверно";
            document.getElementById("dbv5").style.color = 'red'
            document.getElementById("fieldset5").style.border = '3px solid red'
            document.getElementById("vern5").innerText = "Верный ответ: 100";
        }

        if (form2.test6.validity.valid) {
            document.getElementById("dbv6").innerText = "Верно";
            document.getElementById("dbv6").style.color = 'green'
            document.getElementById("fieldset6").style.border = '3px solid green'
            document.getElementById("vern6").innerText = "";
            count +=1
        } 
        else {
            document.getElementById("dbv6").innerText = "Неверно";
            document.getElementById("dbv6").style.color = 'red'
            document.getElementById("fieldset6").style.border = '3px solid red'
            document.getElementById("vern6").innerText = "Верный ответ: 4";
        }

        document.getElementById("restest").innerText = "Результат теста: " + count + " из 6"
        document.getElementById("dbv-res").innerText = count + " из 6"

        document.getElementById("zanovobtn").style.display = 'block'
        
        sohr = count
        count = 0
        
    }
})

let sohr = 0

document.addEventListener('click', function(event) {
    if (event.target.id === 'zanovobtn') {

        document.getElementById("restest").innerText = ""

        document.getElementById("dbv-res").innerText = sohr + " из 6"
        
        document.getElementById("form2").reset();

        document.getElementById("dbv1").innerText = "";
        document.getElementById("dbv1").style.color = 'black'
        document.getElementById("fieldset1").style.border = '1px solid black'
        document.getElementById("vern1").innerText = ""

        document.getElementById("dbv2").innerText = "";
        document.getElementById("dbv2").style.color = 'black'
        document.getElementById("fieldset2").style.border = '1px solid black'
        document.getElementById("vern2").innerText = ""

        document.getElementById("dbv3").innerText = "";
        document.getElementById("dbv3").style.color = 'black'
        document.getElementById("fieldset3").style.border = '1px solid black'
        document.getElementById("vern3").innerText = ""

        document.getElementById("dbv4").innerText = "";
        document.getElementById("dbv4").style.color = 'black'
        document.getElementById("fieldset4").style.border = '1px solid black'
        document.getElementById("vern4").innerText = ""

        document.getElementById("dbv5").innerText = "";
        document.getElementById("dbv5").style.color = 'black'
        document.getElementById("fieldset5").style.border = '1px solid black'
        document.getElementById("vern5").innerText = ""

        document.getElementById("dbv6").innerText = "";
        document.getElementById("dbv6").style.color = 'black'
        document.getElementById("fieldset6").style.border = '1px solid black'
        document.getElementById("vern6").innerText = ""

        count = 0


    }
});

