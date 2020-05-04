var counter1 = new CountUp("counter1", 0, 2500, 0, 3);
var counter2 = new CountUp("counter2", 0, 1700, 0, 3);
var counter3 = new CountUp("counter3", 0, 2200, 0, 3);
var counter4 = new CountUp("counter4", 0, 900, 0, 3);
var waypoint1 = new Waypoint({
  element: document.getElementById("stats"),
  handler: function (direction) {
    if (direction == "up") {
      counter1.reset();
      counter2.reset();
      counter3.reset();
      counter4.reset();
    } else {
      counter1.start();
      counter2.start();
      counter3.start();
      counter4.start();
    }
  },
  offset: "75%",
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
});
