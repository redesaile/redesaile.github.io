// Script made by Google AI
document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('#portfolio-categories article');

    categoryCards.forEach(card => {
        const h2 = card.querySelector('h2');
        if (!h2) return;

        const categoryName = h2.innerText.trim().toLowerCase()
                               .replace(/\s+/g, '-')
                               .replace(/[^a-z0-9-_]/g, '');

        card.addEventListener('click', (event) => {
            categoryCards.forEach(c => c.style.outline = 'none');
            card.style.outline = 'var(--border-portfolio-categories-selected)';

            const galleryItems = document.querySelectorAll('li[data-category]');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category').trim().toLowerCase();

                item.style.animation = 'none';

                if (categoryName === 'all' || itemCategory === categoryName) {
                    item.style.display = '';

                    void item.offsetWidth; 

                    item.style.animation = 'fadeIn 0.25s ease-out forwards';
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });
});