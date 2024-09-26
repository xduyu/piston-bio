document.addEventListener('DOMContentLoaded', function() {
    let titleText = "Annecy Bio ";
    let index = 0;

    // Анимация смены заголовка
    function animateTitle() {
        document.title = titleText.slice(index) + titleText.slice(0, index);
        index = (index + 1) % titleText.length;
    }

    setInterval(animateTitle, 300);  // Скорость смены (мс)

    // Дождь
    const rainContainer = document.getElementById('rain-container');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        // Случайное начальное положение
        raindrop.style.left = Math.random() * 100 + 'vw';

        // Случайная продолжительность анимации
        raindrop.style.animationDuration = Math.random() * 2 + 2 + 's'; // от 2 до 4 секунд

        // Добавляем каплю в контейнер
        rainContainer.appendChild(raindrop);

        // Удаляем каплю после завершения анимации
        setTimeout(() => {
            raindrop.remove();
        }, parseFloat(raindrop.style.animationDuration) * 1000);
    }

    // Создание дождевых капель каждые 100 миллисекунд
    setInterval(createRaindrop, 50);

    // Эффект параллакса
    const container = document.querySelector('.full-c');
    const overlay = document.querySelector('.overlay');

    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth - e.pageX) / 50;
        let y = (window.innerHeight - e.pageY) / 50;

        // Двигаем контейнер и наложение
        container.style.transform = `translate(${x}px, ${y}px)`;
        overlay.style.transform = `translate(${x / 2}px, ${y / 2}px)`; 
    });

    // Дополнительные улучшения и функции
    // 1. Уведомления
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000); // Удалить уведомление через 3 секунды
    }


    // 2. Анимация появления элементов
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let titleText = "Annecy Bio ";
    let index = 0;

    function animateTitle() {
        document.title = titleText.slice(index) + titleText.slice(0, index);
        index = (index + 1) % titleText.length;
    }

    setInterval(animateTitle, 300);

    const rainContainer = document.getElementById('rain-container');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = Math.random() * 2 + 2 + 's';

        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, parseFloat(raindrop.style.animationDuration) * 1000);
    }

    setInterval(createRaindrop, 50);

    const container = document.querySelector('.full-c');
    const overlay = document.querySelector('.overlay');

    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth - e.pageX) / 50;
        let y = (window.innerHeight - e.pageY) / 50;

        container.style.transform = `translate(${x}px, ${y}px)`;
        overlay.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    });
});

window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-item');
    const triggerBottom = window.innerHeight / 5 * 4;

    skills.forEach(skill => {
        const box = skill.getBoundingClientRect().top;

        if (box < triggerBottom) {
            skill.classList.add('visible');
        } else {
            skill.classList.remove('visible');
        }
    });
});


const aboutSection = document.getElementById('about');
const aboutVisibleTrigger = aboutSection.getBoundingClientRect().top;

if (aboutVisibleTrigger < window.innerHeight) {
    aboutSection.classList.add('visible');
}
