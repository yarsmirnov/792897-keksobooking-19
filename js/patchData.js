'use strict';

(function () {
  /*
  Перед сдачей удалить:
  index.html - Подключение скриптов
  patchData.js - Полностью
  filter.js - Код между комментариями
  */
  var generateRandomOffers = function (quantity, mapWidth, mapMinY, mapMaxY) {
    var RENT_TYPES = ['palace', 'flat', 'house', 'bungalo'];
    var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
    var CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
    var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var PHOTOS_URL = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

    var randomOffers = [];

    for (var i = 1; i <= quantity; i++) {
      var avatarIndex = (i < 10) ? '0' + i : i;
      var type = window.util.getRandomArrayItem(RENT_TYPES);
      var features = window.util.randomlyCutArray(FEATURES);
      var title = 'Сдаю апартаменты';
      var rooms = 0;
      var price = 0;
      var description = 'Что-то пошло не так...';
      var positionX = window.util.getRandomNumber(mapWidth);
      var positionY = window.util.getRandomInteger(mapMinY, mapMaxY);

      switch (type) {
        case 'palace':
          title = 'Сдаю дворец!';
          rooms = window.util.getRandomInteger(10, 20);
          price = 100 * rooms + features.length * 20;
          description = '+100500 к авторитету';
          break;
        case 'flat':
          title = 'Сдаю квартиру';
          rooms = window.util.getRandomInteger(1, 4);
          price = 25 * rooms + features.length * 3;
          description = 'Невероятные виды из окна';
          break;
        case 'house':
          title = 'Сдаю дом';
          rooms = window.util.getRandomInteger(2, 6);
          price = 35 * rooms + features.length * 5;
          description = 'Енот в придачу, бесплатно!';
          break;
        case 'bungalo':
          title = 'Сдаю хату';
          rooms = window.util.getRandomInteger(1, 2);
          price = 10 * rooms + features.length * 2;
          description = 'Предыдущего владельца съели утки';
          break;
      }

      var randomOffer = {
        'author': {
          'avatar': 'img/avatars/user' + avatarIndex + '.png'
        },

        'offer': {
          'title': title,
          'address': positionX + ', ' + positionY,
          'price': price,
          'type': type,
          'rooms': rooms,
          'guests': rooms * window.util.getRandomInteger(2, 4),
          'checkin': window.util.getRandomArrayItem(CHECKIN_TIMES),
          'checkout': window.util.getRandomArrayItem(CHECKOUT_TIMES),
          'features': features,
          'description': description,
          'photos': window.util.randomlyCutArray(PHOTOS_URL)
        },
        'location': {
          'x': positionX,
          'y': positionY
        },
      };

      randomOffers.push(randomOffer);
    }

    return randomOffers;
  };

  window.data = {
    generateRandomOffers: generateRandomOffers
  };
})();
