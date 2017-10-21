'use strict';
//array for open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//array to store list of all locations as they are created
var allLocations = [];
//dynamic variable to allow to edit total cookies by hour
var totalCookiesByHour = 0;
//Net total for each locations
var storeNetTotal = 0;
//Constructor function***begins with upper case*** to create additional locationsand methods and or properties for them
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.calcRandCustByHour();
  this.calcCookiesSoldByHour();
  this.tableRowMaker();
  this.dailyCookiesSold = [];
  this.dailyTotalCookiesSold = 0;
  // console.log('this.cookiesSoldByHour', this.cookiesSoldByHour);
}
// console.log('***** ', this),
//method to calculate random customers by hour
//prototype code allows function below, access to the constructor above(and all  the properties and methods)
//the constructor and any instantiations will have access to the prototpe functions

MakeLocation.prototype.calcRandCustByHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  };
};

MakeLocation.prototype.calcCookiesSoldByHour = function() {
  for(var j = 0; j < hours.length; j++) {
    var randomCookies = Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]);
    this.cookiesSoldByHour.push(randomCookies);
    this.dailyTotalCookiesSold = this.dailyTotalCookiesSold + randomCookies;
    // console.log('daily total cookies sold ' + this.dailyTotalCookiesSold);
    // console.log('this.cookiesSoldByHour inside calcCookiesSoldByHour:  ', this.cookiesSoldByHour);
  }
};
MakeLocation.prototype.tableRowMaker = function() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    //need cookies sold per hour
    tdEl.textContent = this.cookiesSoldByHour[i];
    //console.log('this ', this);
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);
};
//Prototype for totals daily cookies sold
MakeLocation.prototype.dailyCookiesSold = function() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookiesSold;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }
  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.dailyTotalCookiesSold;
  trEl.appendChild(totalTdEl);
  cookiestands.appendChild(trEl);
};

// function render() {
//   var name = document.getElementById('cookiestands');
//   console.log('name: ', name);
//   this.calcRandCustByHour();
//   this.calcCookiesSoldByHour();
//
//   var h3El = document.createElement('h3');
//   h3El.textContent = this.name;
//   fandp.appendChild(h3El);
//   for(var k = 0; k < hours.length; k ++) {
//
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[k] + ' : ' + this.cookiesSoldByHour[k] + 'cookies';
//     // console.log('*******' , liEl);
//     firstandpike.appendChild(liEl);
//   }
// };
//make new loation for all 5 stores replaces object literal code, YAY!!!
// function makeStands() {
makeHeaderRow();
var firstAndPike = new MakeLocation ('First and Pike', 23, 65, 6.3);
var SeaTacAirport = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var Alki = new MakeLocation('Alki', 2, 16, 4.6);
//console.log(allLocations);
// };
// makeStands();
//Create Table function
//header row and table data
//add table id in html
function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  cookiestands.appendChild(trEl);

}
