var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterlevel = 20;
var nowater = 0;
var drowning = 40;

var neardeath = false;

function dryout() {
  waterlevel--;
  console.log(waterlevel)
  checkhealth();
  var watertimer = setTimeout(dryout, 500);
}
dryout();

function checkhealth() {
  if (waterlevel <= nowater) {
    neardeath = true;
    console.log("Help!")
    $("#plant path").css("fill", "chocolate")
  }
}

// by default:
// - plant starts healthy
// - dry out over time
// - deplete in nutrients over time

// interactions:
// - water it, replenish the plant
// - feed it, nutrients for the plant
// - trim it

// care:
// - too much water, plant near death
// - too much fertilizer, plant near death
// - if the plant falls into a near death state, you can only heal it by trimming it
