'use strict';
//array for open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour:65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

      console.log('calcRandCustByHour ' + this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k ++) {

      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ' : ' + this.cookiesSoldByHour[k] + 'cookies';
      // console.log('*******' , liEl);
      firstandpike.appendChild(liEl);
    }
  }
};

firstAndPike.render();

//SeaTacAirport Location
var seaTacAir = {
  name: 'Sea Tac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length;i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

      console.log('calcRandCustByHour ' + this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    }
  },
  render: function() {
    var SeaTacAir = document.getElementById('seatacair');
    var stac = document.getElementById('stac');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');
    h3El.textContent + this.name;
    stac.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {

      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ' : ' + 'cookies';
      seatacair.appendChild(liEl);
    }
  }
};

seaTacAir.render();
