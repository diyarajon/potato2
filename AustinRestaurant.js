var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {
      document.getElementById("demo").innerHTML = myObj.restaurant[i].name;
    document.getElementById("demo").innerHTML +=" " + myObj.restaurant[i].dineIn;
    var restaurantTitle = document.createElement("h1");
    restaurantTitle.id = 'someid';
    var something = "hello" + i;
    restaurantTitle.className = something;
    restaurantTitle.innerText = myObj.restaurant[i].name;
    //document.body.appendChild(restaurantTitle);
    restaurantTitle.href = "index.html";
    var para = document.createElement("P");
    para.className = something;
    para.innerText = `takeout:${myObj.restaurant[i].takeout} gift card:${myObj.restaurant[i].giftCard} dine in:${myObj.restaurant[i].dineIn}`;
    document.body.appendChild(restaurantTitle + para);
    var a = document.createElement("a");
    var link = document.createTextNode("this is link");
    link.className = something;
    a.appendChild(link);
    a.title = "this is link";
    a.href = "https://www.geeksforgeeks.org";
    document.body.appendChild(a);

      }
    
  }
};

xmlhttp.open("GET", "AustinRestaurant.json", true);
xmlhttp.send();

