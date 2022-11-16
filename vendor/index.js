//скрол

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//Бургер

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

//наведение на блок

function change1() { // Функция изменяет текст
    document.getElementById('text').innerHTML = 'Новый текст';
}

function change2() { // Функция возвращает текст в исходный вид
    document.getElementById('text').innerHTML = 'Разработка концепции<br> и&nbsp;проектирование';
}

//------------------------------

function change11() { // Функция изменяет текст
    document.getElementById('text1').innerHTML = 'Новый текст';
}

function change3() { // Функция возвращает текст в исходный вид
    document.getElementById('text1').innerHTML = 'Сопровождение строительных проектов';
}
//-----------------------------

function change12() { // Функция изменяет текст
    document.getElementById('text2').innerHTML = 'Новый текст';
}

function change4() { // Функция возвращает текст в исходный вид
    document.getElementById('text2').innerHTML = 'Коммерческое<br> управление';
}

//----------------------------------

function change13() { // Функция изменяет текст
    document.getElementById('text3').innerHTML = 'Новый текст';
}

function change5() { // Функция возвращает текст в исходный вид
    document.getElementById('text3').innerHTML = 'Брокеридж<br> (сдача в&nbsp;аренду)';
}

//----------------------------------

function change14() { // Функция изменяет текст
    document.getElementById('text4').innerHTML = 'Новый текст';
}

function change6() { // Функция возвращает текст в исходный вид
    document.getElementById('text4').innerHTML = 'Техническая эксплуатация<br> и&nbsp;обслуживание';
}

//-----------------------------------------

function change15() { // Функция изменяет текст
    document.getElementById('text5').innerHTML = 'Новый текст';
}

function change7() { // Функция возвращает текст в исходный вид
    document.getElementById('text5').innerHTML = 'Ведение бухгалтерского учета и&nbsp;финансовой отчетности';
}
//--------------------------------------------------

function change16() { // Функция изменяет текст
    document.getElementById('text6').innerHTML = 'Новый текст';
}

function change8() { // Функция возвращает текст в исходный вид
    document.getElementById('text6').innerHTML = 'Юридическое<br> сопровождение';
}

//-------------------------------------------------

function change17() { // Функция изменяет текст
    document.getElementById('text7').innerHTML = 'Новый текст';
}

function change9() { // Функция возвращает текст в исходный вид
    document.getElementById('text7').innerHTML = 'Консалтинговые<br> услуги';
}

//popup----------------------

const buttonShow = document.querySelector('.header__button');
const buttonHide = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const body = document.querySelector('.body');

buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup_opened');
})

buttonHide.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
})
