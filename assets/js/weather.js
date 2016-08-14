$(function() {

    // Add a few preload

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=antarctica antarctica&units=imperial', addLocation);

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=rajahmundry india&units=imperial', addLocation);

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=newyork usa&units=imperial', addLocation);


    $('#new-location').keydown(function(e) {

        if (e.keyCode == 13) {

            e.preventDefault();

            if ($(this).val().length > 0) {

                $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + $(this).val() + '&units=imperial', addLocation);

                $(this).val('');

            }

            return false;

        }

    });

    function addLocation(data) {

        var tempClass, rTemp = Math.round(data.main.temp);

        if (rTemp > 60) {
            tempClass = 'sunny';
        } else if (rTemp < 60 && rTemp > 40) {
            tempClass = 'cool';
        } else {
            tempClass = 'cold';
        }

        var template = '<li class="' + tempClass + '">' +
            '<div class="city">' + data.name + '<span>' + data.sys.country + '</span></div>' +
            '<div class="weather">' + Math.round(data.main.temp) + '<span>&deg;F</span></div>' +
            '</li>';

        $('#locations').prepend(template);

    }
});
