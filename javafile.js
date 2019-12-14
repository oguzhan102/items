let header = document.querySelector('header');
let section = document.querySelector('section');
let requestURL = "https://api.myjson.com/bins/xqa00";

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function showProducts(jsonObj) {

  let products = jsonObj['product'];

  for (var i = 0; i < 5; i++) {

    let article = document.createElement('article');
    let h4 = document.createElement('h1');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute('src','image/'+ products[i].image);
    section.appendChild(article);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(img);

    h4.textContent = products[i].productName;
    p1.textContent = 'price: ' + products[i].productPrice;
    p2.textContent =  'Item Description: '+ products[i].productDescription;
    p3.textContent = 'features: ' + products[i].feature;

  }
}


request.onload = function() {
  let callingfunc = request.response;
  showProducts(callingfunc);
}
