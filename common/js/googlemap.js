jQuery(document).ready(function($){

    function wfMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(53.91419734, 27.54742384),
            zoom: 14,
            gestureHandling: 'cooperative',
            mapTypeId: 'roadmap',
            styles: [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
            "featureType": "administrative.neighborhood",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "poi",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "transit",
            "stylers": [{
            "visibility": "off"
            }]
            },
            {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{
            "visibility": "off"
            }]
            }]
        });
        setMarker1(map);
        setMarker2(map);
        setMarker3(map);
    }

    function setMarker1(map) {
        var contentString = '<div id="map_content">'+
                            '<div id="map_title">Музей</div>'+
                            '<div id="map_bodyContent1">Музей гісторыі Вялікай Айчыннай вайны</div>'+
                            '<div id="map_bodyContent2">просп. Победителей 8</div>'+
                            '</div>';
        var icon = {
            url: '../img/icon-mapplace.png'
        };
        var iconHover = {
            url: '../img/icon-mapplace-hover.png'
        };
        var iconActive = {
            url: '../img/icon-mapplace-active.png'
        };
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 210
        });
        var marker = new google.maps.Marker({
            position: {lat: 53.915894, lng: 27.538103},
            map: map,
            icon: icon,
            title: 'Музей гісторыі Вялікай Айчыннай вайны'
        });
        google.maps.event.addListener(marker, 'mouseover', function() {
            marker.setIcon(iconHover);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            marker.setIcon(icon);
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            marker.setIcon(iconActive);
        });
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
            marker.setIcon(icon);
        });
        google.maps.event.addListener(infowindow, 'domready', function() {
            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'none', 'z-index' : '100'});
            var iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({display: 'none'});
        });
    }
    
    function setMarker2(map) {
        var contentString = '<div id="map_content">'+
                            '<div id="map_title">Спортивный комплекс</div>'+
                            '<div id="map_bodyContent1">Дворец спорта</div>'+
                            '<div id="map_bodyContent2">просп. Победителей 4</div>'+
                            '</div>';
        var icon = {
            url: '../img/icon-mapplace.png'
        };
        var iconHover = {
            url: '../img/icon-mapplace-hover.png'
        };
        var iconActive = {
            url: '../img/icon-mapplace-active.png'
        };
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 210
        });
        var marker = new google.maps.Marker({
            position: {lat: 53.9106507, lng: 27.5494524},
            map: map,
            icon: icon,
            title: 'Дворец спорта'
        });
        google.maps.event.addListener(marker, 'mouseover', function() {
            marker.setIcon(iconHover);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            marker.setIcon(icon);
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            marker.setIcon(iconActive);
        });
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
            marker.setIcon(icon);
        });
        google.maps.event.addListener(infowindow, 'domready', function() {
            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'none', 'z-index' : '100'});
            var iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({display: 'none'});
        });
    }

    function setMarker3(map) {
        var contentString = '<div id="map_content">'+
                            '<div id="map_title">Казино</div>'+
                            '<div id="map_bodyContent1">Покерный клуб "Федерация"</div>'+
                            '<div id="map_bodyContent2">ул. Сторожёвская 15а</div>'+
                            '</div>';
        var icon = {
            url: '../img/icon-mapplace.png'
        };
        var iconHover = {
            url: '../img/icon-mapplace-hover.png'
        };
        var iconActive = {
            url: '../img/icon-mapplace-active.png'
        };
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 210
        });
        var marker = new google.maps.Marker({
            position: {lat: 53.9153917, lng: 27.5494087},
            map: map,
            icon: icon,
            title: 'Покерный клуб "Федерация"'
        });
        google.maps.event.addListener(marker, 'mouseover', function() {
            marker.setIcon(iconHover);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            marker.setIcon(icon);
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            marker.setIcon(iconActive);
        });
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
            marker.setIcon(icon);
        });
        google.maps.event.addListener(infowindow, 'domready', function() {
            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'none', 'z-index' : '100'});
            var iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({display: 'none'});
        });
    }

});