var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {
      document.getElementById("demo").innerHTML = myObj.restaurant[i].name;
    document.getElementById("demo").innerHTML +=" " + myObj.restaurant[i].dineIn;
    var restaurantTitle = document.createElement("h1");
    restaurantTitle.innerText = myObj.restaurant[i].name;
    document.body.appendChild(restaurantTitle);
    restaurantTitle.href = "something.com";
    var para = document.createElement("P");
    para.innerText = `takeout:${myObj.restaurant[i].takeout} gift card:${myObj.restaurant[i].giftCard}`;
    document.body.appendChild(para);
      }
    
  }
};

xmlhttp.open("GET", "AustinRestaurant.json", true);
xmlhttp.send();