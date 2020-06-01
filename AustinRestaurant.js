var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {
    //var something = `hello:${myObj.restaurant[i].takeout}`;
    var innerDiv = document.createElement('div');
    innerDiv.id = 'block';

    //document.getElementById('block').innerHTML += 'hi';
    var restaurantTitle = document.createElement("h1");
    restaurantTitle.id = 'someid';
    restaurantTitle.di = `hello${myObj.restaurant[i].name}`;
    restaurantTitle.innerText = myObj.restaurant[i].name;
    document.body.appendChild(restaurantTitle);
    
    restaurantTitle.href = "index.html";
    var para = document.createElement("P");
    para.innerText = `takeout:${myObj.restaurant[i].takeout} gift card:${myObj.restaurant[i].giftCard} dine in:${myObj.restaurant[i].dineIn}`;
    para.className = `hello${myObj.restaurant[i].name}`;
    document.body.appendChild(para);

    var a = document.createElement("a");
    var link = document.createTextNode("this is link");
    a.appendChild(link);
    a.className = `hello${myObj.restaurant[i].name}`;
    a.href = "https://www.geeksforgeeks.org";
    document.body.appendChild(a);

      }
    
  }
};

xmlhttp.open("GET", "AustinRestaurant.json", true);
xmlhttp.send();

