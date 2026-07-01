document.addEventListener('DOMContentLoaded', function() {
    const anarchyBtn = document.querySelector('.btn-anarchy');
    if (anarchyBtn) {
        anarchyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://triviplands.easydonate.ru/'; // ← СЮДА ВСТАВЬ СВОЮ ССЫЛКУ
    });
});

    console.log('Сайт TriVipLand работает!');
});