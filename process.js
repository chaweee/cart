document.addEventListener('DOMContentLoaded', () => {
    const addButtons = Array.from(document.querySelectorAll('.add-btn'));
    if (addButtons.length === 0) {
        console.warn('No .add-btn elements found');
        return;
    }

    addButtons.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            console.log('pindot');

        });
    });
});
