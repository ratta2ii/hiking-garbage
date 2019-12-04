import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findTrails } from './apis/trails';
import { findWeather } from './apis/weather';
//import { getLocation } from './apis/geolocation';
//import { findCampgrounds } from './apis/camping';



 

$(document).ready(function() {

  $("#find-trails").click(function () {
   
    let maxHikeDistance = $("input#trail-distance").val();
    

    findTrails()
      .then((response) => {

        let dayToHikeDate = $("input#hiking-date").empty().val(); // Not changing Date ??
        console.log(dayToHikeDate);    // Remove console.log

        $("#display-results").empty();
        const body = JSON.parse(response);
        const trails = body.trails;
   
        for (let i in trails){
          if (trails[i].length < maxHikeDistance) {

            let trailCoordinates = `${trails[i].latitude},${trails[i].longitude}`;

/* Dark Sky Weather API. Trail coordinates are used as arguments to find weather for that area. */  

            findWeather(trailCoordinates, dayToHikeDate)
              .then((response) => {

                let weatherBody = JSON.parse(response);
                let weatherSummary = weatherBody.daily.data[0].summary; 
                let temperature = weatherBody.daily.data[0].temperatureHigh; 
              

                $("#display-results").append(`<ul><li>${trails[i].name}</li><li>${trails[i].location}</li><li>${trails[i].length} mile hike</li><li>${trails[i].latitude}</li><li>${trails[i].longitude}</li><li>${weatherSummary}</li><li>${temperature} degree high</li><a href="https://www.google.com/maps/dir/47.6062,-122.3321/${trailCoordinates}">GET DIRECTIONS</a></ul>`);
              },
              function(error) {
                console.error(`I am the error message: ${error.message}`);
              });
          }

        }      
      },
      function(error) {
        $("#display-results").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
        $("#display-div").show();
      });

  });
  
});







// // https://www.google.com/maps/dir/${getLocation()}/${...Camping Coordinates...}

// let trailCoordinates = `${trails[i].latitude},${trails[i].longitude}`;













