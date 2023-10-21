
// Get all accordion items and add event listeners
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    // Add click event listener to each header
    header.addEventListener('click', () => {
        // Toggle the active class to show/hide content
        
        item.querySelector('.accordion-content').classList.toggle('active');
        
        // Close other accordion items when one is opened
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.accordion-content').classList.remove('active');
            }
        });
    });
});