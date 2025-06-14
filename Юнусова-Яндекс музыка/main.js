// Открытие/закрытие модального окна
const uploadBtns = document.querySelectorAll('#uploadBtn, #uploadBtn2');
const uploadModal = document.getElementById('uploadModal');
const closeModal = document.getElementById('closeModal');

// Обработка модального окна загрузки
uploadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        uploadModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    });
});

// Закрытие по клику на крестик
closeModal.addEventListener('click', () => {
    uploadModal.style.display = 'none';
    document.body.style.overflow = ''; // Восстанавливаем прокрутку
});

// Закрытие по клику вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === uploadModal) {
        uploadModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Обработка формы
const uploadForm = document.querySelector('.upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Трек успешно загружен и отправлен на модерацию!');
        uploadModal.style.display = 'none';
        document.body.style.overflow = '';
        uploadForm.reset();
    });
}

// Анимация карточек при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.track-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Закрытие уведомления о cookies
const cookiesBtn = document.querySelector('.cookies-btn');
if (cookiesBtn) {
    cookiesBtn.addEventListener('click', () => {
        document.querySelector('.cookies-notice').style.display = 'none';
    });
}