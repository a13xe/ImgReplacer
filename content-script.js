browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const imgs = document.getElementsByTagName('img');
  for (let img of imgs) {
      img.style.backgroundImage = `url('${request.imageUrl}')`;
      img.style.backgroundRepeat = 'no-repeat';
      img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"; // Transparent

      switch (request.mode) {
        case 'stretch':
            img.style.backgroundSize = '100% 100%';
            break;
        case 'fill':
            img.style.backgroundSize = 'cover';
            break;
        case 'fit':
            img.style.backgroundSize = 'contain';
            break;
        case 'tile':
            img.style.backgroundRepeat = 'repeat';
            break;
        case 'center':
            img.style.backgroundPosition = 'center';
            img.style.backgroundSize = 'auto';
            break;
        case 'span':
            // Center without scaling
            img.style.backgroundPosition = 'center';
            img.style.backgroundSize = 'auto';
            break;
      }
  }
});
