window.onload = function () {
    var mapContainer = document.getElementById('map');
    var mapIframe = document.createElement('iframe');
    mapIframe.setAttribute('id', 'map');
    mapIframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.6189948264346!2d80.2166204567285!3d50.39940215009724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f265c115f16be7%3A0xa3afa09cc787de98!2z0JTQtdGCLtGB0LDQtA!5e0!3m2!1sru!2skz!4v1679747986432!5m2!1sru!2skz');
    mapIframe.setAttribute('style', 'border:0;');
    mapIframe.setAttribute('allowfullscreen', '');
    mapIframe.setAttribute('loading', 'lazy');
    mapIframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    mapContainer.appendChild(mapIframe);
};
