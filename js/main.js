const rowEl = document.getElementById('row2');
const wrapperEl = document.getElementsByClassName('wrapper')[0];
const circleBtn = document.getElementsByClassName('fixed-circle')[0];
const arrowBtn = document.getElementsByClassName('left-arrow')[0];
const colEl = document.getElementById('col');
const catBtnsEl = document.getElementsByClassName('category-btns')[0];
const searchInput = document.getElementById('search');
const basketCount = document.querySelector('.cart-count');
const totalEl = document.getElementById('total');


let dishes = [{
    "photo": "kuza-shurpa-1-taom.jpg",
    "title": "Куза шурпа",
    "price": 10000,
    "dishId": 1,
    "category": "Первые Блюда",
  },
  {
    "photo": "chuchvara-1-taom.png",
    "title": "Чучвара",
    "price": 8000,
    "dishId": 2,
    "category": "Первые Блюда",
  },
  {
    "photo": "xash-1-taom.png",
    "title": "Хаш",
    "price": 8000,
    "dishId": 3,
    "category": "Первые Блюда",
  },
  {
    "photo": "mastava-1-taom.jpg",
    "title": "Мастава",
    "price": 7000,
    "dishId": 4,
    "category": "Первые Блюда",
  },
  {
    "photo": "okroshka-1-taom.png",
    "title": "Окрошка",
    "price": 7000,
    "dishId": 5,
    "category": "Первые Блюда",
  },
  {
    "photo": "kuksi-1-taom.jpg",
    "title": "Кукси",
    "price": 8000,
    "dishId": 6,
    "category": "Первые Блюда",
  },
  {
    "photo": "samsa-tandir-2-taom.jpg",
    "title": "Сомса",
    "price": 2300,
    "dishId": 7,
    "category": "Вторые Блюда",
  },
  {
    "photo": "osh-2-taom.png",
    "title": "Плов",
    "price": 8000,
    "dishId": 8,
    "category": "Вторые Блюда",
  },
  {
    "photo": "norin-2-taom.jpg",
    "title": "Нарын",
    "price": 9000,
    "dishId": 9,
    "category": "Вторые Блюда",
  },
  {
    "photo": "kazankabob-2-taom.jpg",
    "title": "Казан кабоб",
    "price": 18500,
    "dishId": 10,
    "category": "Вторые Блюда",
  },
  {
    "photo": "besbarmak-2-taom.jpg",
    "title": "Бешбармак",
    "price": 16000,
    "dishId": 11,
    "category": "Вторые Блюда",
  },
  {
    "photo": "koreyka-2-taom.jpg",
    "title": "Корейка",
    "price": 18000,
    "dishId": 12,
    "category": "Вторые Блюда",
  },
  {
    "photo": "perepelka-2-taom.jpg",
    "title": "Перепелка",
    "price": 18500,
    "dishId": 13,
    "category": "Вторые Блюда",
  },
  {
    "photo": "shashlik-gov-mangal.jpg",
    "title": "Шашлык говяжья",
    "price": 4200,
    "dishId": 14,
    "category": "Мангал",
  },
  {
    "photo": "shashlik-baran-mangal.jpg",
    "title": "Шашлык баранина",
    "price": 4200,
    "dishId": 15,
    "category": "Мангал",
  },
  {
    "photo": "shashlik-kur-mangal.jpg",
    "title": "Шашлык куриное филе",
    "price": 3800,
    "dishId": 16,
    "category": "Мангал",
  },
  {
    "photo": "shashlik-krilya-mangal.jpg",
    "title": "Шашлык крылышки",
    "price": 5800,
    "dishId": 17,
    "category": "Мангал",
  },
  {
    "photo": "shashlik-moloty-mangal.jpg",
    "title": "Шашлык молотый",
    "price": 3800,
    "dishId": 18,
    "category": "Мангал",
  },
  {
    "photo": "shashlik-pecen-mangal.jpg",
    "title": "Шашлык печень",
    "price": 3000,
    "dishId": 19,
    "category": "Мангал",
  },
  {
    "photo": "holodes-holod.jpg",
    "title": "Холодец",
    "price": 6000,
    "dishId": 20,
    "category": "Холодные закуски",
  },
  {
    "photo": "myasnoe-assorti-holod.jpg",
    "title": "Мясное ассорти",
    "price": 55000,
    "dishId": 21,
    "category": "Холодные закуски",
  },
  {
    "photo": "assorti-rybnoe-holod.png",
    "title": "Рыбное ассорти",
    "price": 60000,
    "dishId": 22,
    "category": "Холодные закуски",
  },
  {
    "photo": "qazi-holod.jpg",
    "title": "Казы",
    "price": 80000,
    "dishId": 23,
    "category": "Холодные закуски",
  },
  {
    "photo": "seledka-salat.jpg",
    "title": "Селедка по русски",
    "price": 9500,
    "dishId": 24,
    "category": "Салаты",
  },
  {
    "photo": "muj-kapriz-salat.jpg",
    "title": "Мужской каприз",
    "price": 9000,
    "dishId": 25,
    "category": "Салаты",
  },
  {
    "photo": "olive-salat.jpg",
    "title": "Оливье",
    "price": 8800,
    "dishId": 26,
    "category": "Салаты",
  },
  {
    "photo": "sezar-salat.jpg",
    "title": "Цезарь",
    "price": 8500,
    "dishId": 27,
    "category": "Салаты",
  },
  {
    "photo": "dam-kapriz-salat.jpg",
    "title": "Дамский каприз",
    "price": 9000,
    "dishId": 28,
    "category": "Салаты",
  },
  {
    "photo": "smak-salat.jpg",
    "title": "Смак",
    "price": 9000,
    "dishId": 30,
    "category": "Салаты",
  },
  {
    "photo": "grek-salat.jpg",
    "title": "Греческий",
    "price": 9000,
    "dishId": 31,
    "category": "Салаты",
  },
  {
    "photo": "achik-chuchuk-salat.jpg",
    "title": "Аччик-чучук",
    "price": 4000,
    "dishId": 32,
    "category": "Салаты",
  },
  {
    "photo": "fransuz-salat.jpg",
    "title": "Французский",
    "price": 9000,
    "dishId": 33,
    "category": "Салаты",
  },
];

function createDishDiv(dishObject) {
  let divEl = document.createElement('div');
  divEl.className = 'column-5';
  divEl.innerHTML = `<img class="images" src="img/${dishObject.photo}" alt="${dishObject.title}">
  <p class="name-dishes">${dishObject.title}</p>
  <p class="category-dishes">${dishObject.category}</p>
  <span class="sum">${dishObject.price}</span>
  <button class="add-btn" data-id="${dishObject.dishId}"> ЗАКАЗАТЬ </button>`;
  return divEl;
};

function appendDishes() {
  dishes.forEach(el => {
    let dishDiv = createDishDiv(el);
    rowEl.appendChild(dishDiv);
  });
};

if (rowEl) appendDishes();

function filterDishesByCat(cat) {
  let result = dishes.filter(el => {
    return el.category == cat;
  });
  return result;
};

if (catBtnsEl) {
  catBtnsEl.addEventListener('click', function (event) {
    if (event.target.className == 'cat-btn') {
      let selectedCat = event.target.innerText;
      let selectedDishes;
      if (selectedCat !== 'Все') {
        selectedDishes = filterDishesByCat(selectedCat);
      } else {
        selectedDishes = dishes;
      }
      rowEl.innerHTML = '';
      appendSelectedDishes(selectedDishes);
    };
  });
};

function appendSelectedDishes(sdishes) {
  sdishes.forEach(el => {
    let dishDiv = createDishDiv(el);
    rowEl.appendChild(dishDiv);
  });
};

function createCartDiv(el) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `<div>
  <img src="img/${el.photo}" alt="${el.title}" class="img">
  <span class="name-sum">
    <p class="name"> ${el.title} </p>
    <p class="price"> ${el.price} </p>
  </span>
</div>
<button class="btn-delete" data-id="${el.dishId}"> <i class="far fa-trash-alt"></i> </button>`;
  return box;
};

function searchDish(searchText) {
  let resultArr = dishes.filter(el => {
    return el.title.toLowerCase().includes(searchText);
  });
  return resultArr;
};

searchInput.addEventListener('keyup', function () {
  let searchedDishes = searchDish(searchInput.value);
  rowEl.innerHTML = '';
  appendSelectedDishes(searchedDishes);
});

let myCart = cartItemsFromLocalStorage();

function addDishToCart(bookId) {
  if (!myCart.includes(bookId)) {
    myCart.push(bookId);
  };
};

function cartItemsToLocalStorage() {
  localStorage.setItem('myBasket', JSON.stringify(myCart));
};

function cartItemsFromLocalStorage() {
  let result = JSON.parse(localStorage.getItem('myBasket'));
  return result ? result : [];
};

function showCartCount() {
  let myBasketArr = cartItemsFromLocalStorage();
  basketCount.innerText = myBasketArr.length;
};

showCartCount();

if (rowEl) {
  rowEl.addEventListener('click', function (event) {
    if (event.target.className.includes('add-btn'));
    let idOfCurrentDish = +event.target.getAttribute('data-id');
    addDishToCart(idOfCurrentDish);
    showCartCount();
    cartItemsToLocalStorage();
  });
};

function showCartItems() {
  colEl.innerHTML = '';
  let myBasketArr = cartItemsFromLocalStorage();
  myBasketArr.forEach(el => {
    let dish = dishes.filter((item) => {
      return item.dishId == el;
    });
    let element = createCartDiv(dish[0]);
    colEl.appendChild(element);
  });
};

if (colEl) showCartItems();

function removeItemFromCart(divEl) {
  colEl.removeChild(divEl);
};

if (colEl) {
  colEl.addEventListener('click', function (event) {
    if (event.target.className.includes('btn-delete') || event.target.className.includes('far fa-trash-alt')) {
      let elId = event.target.getAttribute('data-id');
      let myBasketArr = cartItemsFromLocalStorage();
      myBasketArr.splice(myBasketArr.indexOf(+elId), 1);
      localStorage.setItem('myBasket', JSON.stringify(myBasketArr));

      let parentDiv = event.target.closest('.box');
      removeItemFromCart(parentDiv);
      showCartCount();
    };
    setTotalPrice();
  });
};

function setTotalPrice() {
  let totalPrice = 0;
  let newArr = [];
  let myBasketArr = cartItemsFromLocalStorage();
  myBasketArr.forEach(el => {
    let dish = dishes.filter((item) => {
      return item.dishId == el;
    });
    let element = dish[0].price;
    newArr.push(element);
    let plus = newArr.reduce(function (a, b) {
      return a + b;
    });
    totalPrice = plus;
  });
  totalEl.innerText = totalPrice + ' sum';
};

if (totalEl) {
  setTotalPrice();
};

circleBtn.addEventListener('click', function () {
  wrapperEl.classList.add('open');
});

arrowBtn.addEventListener('click', function () {
  wrapperEl.classList.remove('open');
});