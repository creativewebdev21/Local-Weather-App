$(document).ready( function() {

  //If geolocation is available
  if ("geolocation" in navigator) {

    var coords, city, lat, lon, region, weatherJSON;

    //IP & Location Info: http://ipinfo.io/developers/getting-started
    $.getJSON('http://ipinfo.io', function(data) {

      city = data.city;
      coords = data.loc;
      coords = coords.split(",");
      lat = coords[0];
      lon = coords[1];

      //Set Initial Page Information
      weatherJSON = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=284ef95ba09144d17281ea34b72c56ed&units=imperial";

      //Weather API: https://openweathermap.org/current#geo
      $.getJSON(weatherJSON, function(json) {

        var currentTemp = json.main.temp;
        var currentCond = json.weather[0].main;
        var icon = json.weather[0].icon;

        icon = "http://openweathermap.org/img/w/" + icon +".png"

        console.log(icon);

        //Assign current values to webpage
        $("#temp").text(currentTemp + " °F");
        $("#city").text(city);
        //$("#my_image").attr("src","second.jpg");
        $("#weather-icon").attr("src",icon);

      });

      //Changes Units to C/F on button click
      $("#farenheit").click( function() {
        //Set Initial Page Information
      weatherJSON = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=284ef95ba09144d17281ea34b72c56ed&units=imperial";

      //Weather API: https://openweathermap.org/current#geo
      $.getJSON(weatherJSON, function(json) {

        var currentTemp = json.main.temp;
        var currentCond = json.weather[0].main;
        var icon = json.weather[0].icon;

        icon = "http://openweathermap.org/img/w/" + icon +".png"

        console.log(icon);

        //Assign current values to webpage
        $("#temp").text(currentTemp + " °F");
        $("#city").text(city);
        //$("#my_image").attr("src","second.jpg");
        $("#weather-icon").attr("src",icon);

      });
      });

      //Updates page when Celcius Button Clicked
      $("#celcius").click( function() {

        //Set Initial Page Information
      weatherJSON = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=284ef95ba09144d17281ea34b72c56ed&units=metric";

      //Weather API: https://openweathermap.org/current#geo
      $.getJSON(weatherJSON, function(json) {

        var currentTemp = json.main.temp;
        var currentCond = json.weather[0].main;
        var icon = json.weather[0].icon;

        icon = "http://openweathermap.org/img/w/" + icon +".png"

        console.log(icon);

        //Assign current values to webpage
        $("#temp").text(currentTemp + " °C");
        $("#city").text(city);
        //$("#my_image").attr("src","second.jpg");
        $("#weather-icon").attr("src",icon);

      });


      });



    });

  }

});
