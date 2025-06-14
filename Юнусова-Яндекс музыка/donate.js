  // Воспроизведение музыки
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const audio = this.nextElementSibling;
                const allAudios = document.querySelectorAll('.audio-player');
                
                // Останавливаем все другие аудио
                allAudios.forEach(a => {
                    if (a !== audio) {
                        a.pause();
                        a.previousElementSibling.innerHTML = '<i class="fas fa-play"></i>';
                    }
                });
                
                if (audio.paused) {
                    audio.play();
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    audio.pause();
                    this.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        });

        // Обработка донатов
        document.querySelectorAll('.donate-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const artistCard = this.closest('.artist-card');
                const artistName = artistCard.querySelector('.artist-name').textContent;
                const amountInput = artistCard.querySelector('input[type="number"]');
                const amount = amountInput.value;
                
                document.getElementById('artistNameModal').textContent = artistName;
                document.getElementById('customAmount').value = amount;
                document.getElementById('donateModal').style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Выбор суммы доната
        document.querySelectorAll('.donate-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.donate-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                document.getElementById('customAmount').value = this.dataset.amount;
            });
        });

        // Выбор способа оплаты
        document.querySelectorAll('.method-card').forEach(method => {
            method.addEventListener('click', function() {
                document.querySelectorAll('.method-card').forEach(m => {
                    m.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Подтверждение доната
        document.getElementById('confirmDonate').addEventListener('click', function() {
            const amount = document.getElementById('customAmount').value;
            const artist = document.getElementById('artistNameModal').textContent;
            
            alert(`Спасибо! Вы поддержали ${artist} на сумму ${amount}₽`);
            document.getElementById('donateModal').style.display = 'none';
            document.body.style.overflow = '';
            
            // Здесь можно добавить логику отправки данных на сервер
        });

        // Закрытие модального окна
        document.getElementById('closeDonateModal').addEventListener('click', function() {
            document.getElementById('donateModal').style.display = 'none';
            document.body.style.overflow = '';
        });

        document.getElementById('cancelDonate').addEventListener('click', function() {
            document.getElementById('donateModal').style.display = 'none';
            document.body.style.overflow = '';
        });

        // Закрытие по клику вне модального окна
        window.addEventListener('click', function(e) {
            if (e.target === document.getElementById('donateModal')) {
                document.getElementById('donateModal').style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Закрытие уведомления о cookies
        document.querySelector('.cookies-btn').addEventListener('click', function() {
            document.querySelector('.cookies-notice').style.display = 'none';
        });