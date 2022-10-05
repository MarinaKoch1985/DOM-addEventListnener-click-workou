// Вывести текст, введенный в инпут, в консоль

const show_btnElem = document.querySelector('.show_btn');
const show_inputElem = document.querySelector('.show_input');

show_btnElem.addEventListener('click', () => console.log(show_inputElem.value));

//Поменять текст в инпуте с ??? на !!!

const change_btnElem = document.querySelector('.change_text_btn');
const change_inputElem = document.querySelector('.change_text_input');

change_btnElem.addEventListener('click', () => 
change_inputElem.value = '!!!');

//Поменять цвет фона на черный

const black_mode_btn = document.querySelector('.black_mode_btn');

black_mode_btn.addEventListener('click',() => document.body.style.backgroundColor = 'black');

//Поменять цвет фона на черный/beliy


const change_mode_btn = document.querySelector('.change_mode_btn');
//change_mode_btn.addEventListener('click',() => document.body.toggle('black_mode'));

change_mode_btn.addEventListener('click', () => {
    const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    document.body.style.backgroundColor = backgroundColor;
});

//Поменять цвет button на sluchajniy

const random_color_btn = document.querySelector('.random_color_btn');
const getRandomNum = () => Math.round(Math.random() * 255);

random_color_btn.addEventListener('click', (event) => event.target.style.backgroundColor = 
`rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);

//Менять цвет фон на случайный

const random_mode_btn = document.querySelector('.random_mode_btn');

random_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = 
`rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);

//Менять содержимое инпута на значение из массива

const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++', '***'];
let symbols_index = 0;

change_btn.addEventListener('click', () => change_input.value = symbols[symbols_index++ % symbols.length]);

/*  if (count === arr.length - 1) count = 0;
else count++;  */



//Создать слайдер с фотографиями из массива

const photos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v404Q6kMLGbcyRCEt6luCH6GLDPaEimYiSpymrqf&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmYixF6PuMhMr6QOh4Ab0FUIM1HNHbMEOfKmOfUNx&s',
    'https://thumbs.dreamstime.com/b/walking-elephant-15926876.jpg',
    'https://iso.500px.com/wp-content/uploads/2014/08/2048-5.jpg'
]

const img_slider = document.querySelector('.img_slider');
 let photoIndex = 0;

 img_slider.addEventListener('click', event => event.target.src =
 photos[photoIndex++ % photos.length] );


 ///////////////////////////////////
 const img_slider_1 = document.querySelector('.img_slider_1');
 const [ left_btn, right_btn] = document.querySelectorAll('.triggers button');

 let photoIndex_1 = 0;

 right_btn.addEventListener('click', () => img_slider_1.src = photos[++photoIndex_1 % photos.length]);

 left_btn.addEventListener('click', () => {
    if(photoIndex_1 === 0) {
        photoIndex_1 = photos.length
    }

    img_slider_1.src = photos[--photoIndex_1 % photos.length]
 });
 // a++ - сначала возвращает значение, а потом увеличивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает


/* const user = {
  firstname: 'Anton',
  lastname: 'Ivanov',
  age: 38
}

const showMessage = obj => {
  console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`)
}

const showMessage_1 = ({ firstname, age }) => {
  console.log(`Hello ${firstname}. You are ${age} years old!`)
}

showMessage(user);
showMessage_1(user); */



//////////


const incr_btn = document.querySelector('.incr_btn');
let btn_params = 30;

const incr_btn_render = (params) => {
    incr_btn.style.width = params + 'px';
    incr_btn.style.height = params + 'px';
}

incr_btn_render(btn_params);

incr_btn.addEventListener('click', () => {
    btn_params += 10;
    incr_btn_render(btn_params);
})