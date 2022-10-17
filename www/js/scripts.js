var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

// by default:
// - plant starts health
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
