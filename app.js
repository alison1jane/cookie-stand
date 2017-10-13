'use strict';
//array for open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike Location
var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHur:65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
   }
   //variable to be able to append an item to the list
   //create new h3 element
    var heEl = document.createElement('h3');
   //allow for text to be added to the h3 element
   h3El.textContent = this.name;
   fandp.appendChild(h3El);
   for(var k =0; k < hours.length; k ++) {
     //going through the hours array and creating multiple lis
     var liEl = document.createElement('li');
     liEl.textContent = hours[k] + ' : ' + this.cookiesSoldByHour[k] + 'cookies';
     console.log(liEl);
   }
  },
};
firstAndPike.render();
