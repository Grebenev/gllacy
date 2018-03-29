var button_click = document.querySelector(".contacts__button");
var feedback = document.querySelector(".modal__overlay");
var feedback_close = document.querySelector(".feedback__close");

button_click.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal__overlay--on");
});
feedback_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal__overlay--on");
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 15
    }),

    myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
      balloonContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург"
    }, {
      iconLayout: "default#image",
      iconImageClipRect: [
        [0, 0],
        [80, 140]
      ],
      iconImageHref: "/img/pin.svg",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -90],
    });

  myMap.geoObjects.add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3);
}
