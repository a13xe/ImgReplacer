const imageUrlInput = document.getElementById('imageUrl');
const imagePreview = document.getElementById('imagePreview');
const replaceButton = document.getElementById('replace');
const modeSelect = document.getElementById('mode');

let imageUrl = '';

imageUrlInput.addEventListener('input', function() {
    imageUrl = this.value;
    imagePreview.style.backgroundImage = `url('${imageUrl}')`;
});

replaceButton.addEventListener('click', function() {
    if (!imageUrl) {
        alert('Please enter a valid image URL.');
        return;
    }
    const mode = modeSelect.value;
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, { imageUrl, mode });
    });
});
