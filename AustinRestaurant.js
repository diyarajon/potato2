var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {
    //var something = `hello:${myObj.restaurant[i].takeout}`;
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block';
    innerDiv.id = 'block';
    document.body.appendChild(innerDiv);
/*
    var restaurantTitle = document.createElement("h1");
    //restaurantTitle.di = `hello${myObj.restaurant[i].name}`;
    restaurantTitle.innerText = myObj.restaurant[i].name;
    document.getElementsByClassName('block').innerHTML +=" " + myObj.restaurant[i].dineIn;
    restaurantTitle.id = 'someid';
    //document.innerDiv.appendChild(restaurantTitle);
    
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
    document.body.appendChild(a);*/
    var tag = document.createElement("p");
    var text = document.createTextNode("Tutorix is the best e-learning platform");
    tag.appendChild(text);
    var element = document.getElementById("block");
    element.appendChild(tag);

      }
    
  }
};

xmlhttp.open("GET", "AustinRestaurant.json", true);
xmlhttp.send();

