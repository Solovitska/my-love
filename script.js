//Обработчик события DOMContentLoaded, который срабатывает после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылки на элементы контейнера, карты и аудио
    const container = document.querySelector('.container');
    const card = document.querySelector('.card');
    const audio = document.getElementById('myAudio');
  
    // Добавляем обработчик события для события mouseenter на контейнере
    container.addEventListener('mouseenter', () => {
      // При наведении мыши на контейнер, анимируем карту, поднимая ее наверх
      card.style.transition = 'top 0.5s';
      card.style.top = '-90px';
    });
  
    // Добавляем обработчик события для события mouseleave на контейнере
    container.addEventListener('mouseleave', () => {
      // При уходе мыши с контейнера, возвращаем карту на место
      card.style.transition = 'top 0.5s';
      card.style.top = '0';
    });
  
    // Добавляем обработчик события для события click на контейнере
    container.addEventListener('click', event => {
      // Проверяем, был ли клик именно на элементе .front
      if (event.target.classList.contains('front')) {
        // Если да, то анимируем карту, поднимая ее наверх, и воспроизводим аудио
        card.style.transition = 'top 0.5s';
        card.style.top = '-90px';
        audio.play();
      }
    });
  
    // Список текстов для карточек
    const cardTexts = [
      'Ти – той, кого я обираю кожен день.Ти моє щастя, моя любов.💖',
      'Ти найкращий, я вірю в тебе.💖',
      'Все тимчасово, не хвилюйся, ми впораємося з будь-якою проблемою 💖',
      'Ти - мій порятунок, моя опора, моя підтримка в цьому світі. 💖',
      'Ти - мій улюблений герой 💖',
      'В твоїх очах я знаходжу свій особливий світ 💖',
      'Ти - моя порція щастя, яку я хочу смакувати кожен день. 💖',
      'Твої сміливі мрії і ніжні обійми - це моє власне найкраще кохання.💖',
      'Ти - моє кохання, моя найбільша мрія 💖',
      'Мені дуже сумно і самотньо. Нічого не радує, коли тебе немає поруч.',
      'Сумую за тобою, мій солодкий. 💖',
      'Люблю тебе  і вже чекаю на нашу зустріч.💖',

      'З Днем Святого Валентина!',
    ];
  
    // Переменная для отслеживания текущего индекса текста на карточке
    let currentIndex = 0;
  
    // Получаем элементы, с которыми будем взаимодействовать
    const valentineCard = document.querySelector('.card');
    const cardText = document.querySelector('.text');
  
    // Функция для изменения текста на карточке
    function changeCardText() {
      // Увеличиваем индекс или возвращаемся к началу списка, если достигнут конец
      currentIndex = (currentIndex + 1) % cardTexts.length;
      // Устанавливаем новый текст на карточку
      cardText.textContent = cardTexts[currentIndex];
      // Проверяем, достигли ли конца списка текстов
      if (currentIndex === cardTexts.length - 1) {
        // Если достигли, удаляем обработчик клика для остановки прокрутки
        valentineCard.removeEventListener('click', changeCardText);
      }
    }
    // Добавляем обработчик события на клик по валентинке
    valentineCard.addEventListener('click', changeCardText);
  });
  
  // Создайте массив с URL-адресами картинок заднего фона
  var backgroundImageUrls = [
    'love1.jpg',
    'love.jpg',
    'love2.jpg',
    'love3.jpg',
    'love4.jpg',
    'love5.jpg',
    'love6.jpg',
    'love7.jpg',
    'love9.jpg',
    'love10.jpg',
    'love11.jpg',
    'love14.jpg',
    'love16.jpg',
  ];
  let currentIndex = 0;
  
  // Функция для изменения заднего фона
  function changeBackgroundImage() {
    // Увеличиваем индекс, чтобы переключиться на следующую картинку
    currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
    // Устанавливаем новый задний фон с плавной анимацией
    document.body.style.backgroundImage = 'url("' + backgroundImageUrls[currentIndex] + '")';
  }
  // Функция для изменения заднего фона
  function changeBackgroundImage() {
    // Увеличиваем индекс, чтобы переключиться на следующую картинку
    currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
  
    // Создаем новый Image объект
    const preloadImage = new Image();
  
    // Загружаем следующее изображение
    preloadImage.src = backgroundImageUrls[currentIndex];
  
    // После загрузки изображения, меняем фон без момента разрыва
    preloadImage.onload = () => {
      document.body.style.backgroundImage = 'url("' + preloadImage.src + '")';
    };
  }
  
  // Запускаем функцию изменения заднего фона каждые 7 секунд
  setInterval(changeBackgroundImage, 7000); // Изменяйте каждые 7 секунд (или другое желаемое время)