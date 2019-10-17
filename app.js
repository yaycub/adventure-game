import { saveUser, createChar } from './utils/utils.js';

const charCustomization = document.getElementById('user-customization');

charCustomization.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(charCustomization);
    const char = createChar(formData);

    saveUser(char);

    window.location = 'map';
});