const display = document.querySelector('.display');
if (display) {
    const handleDigitClick = (event) => {
        if (display.textContent.length > 8) {
            return;
        }
        if (display.textContent === '0') {
            display.textContent =  event.target.textContent || '';      
            return;     
        }
        display.textContent +=  event.target.textContent || '';
    };
    const addClickListener = (selector) => {
        document.querySelector(selector).addEventListener('click', handleDigitClick)
    }
    addClickListener('#btn-0');
    addClickListener('#btn-1');
    addClickListener('#btn-2');
    addClickListener('#btn-3');
    addClickListener('#btn-4');
    addClickListener('#btn-5');
    addClickListener('#btn-6');
    addClickListener('#btn-7');
    addClickListener('#btn-8');
    addClickListener('#btn-9');
}