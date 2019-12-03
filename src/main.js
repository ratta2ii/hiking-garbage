import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findTrails } from './scripts';


$(document).ready(function() {

  $("#find-trails").click(function () {

    let maxHikeDistance = $("input#trail-distance").val();

    findTrails()
      .then((response) => {
        $("#display-results").empty();
        const body = JSON.parse(response);
        const trails = body.trails;
        console.log(trails);

        

        for (let i in trails){
            if (trails[i].length > maxHikeDistance){
              $("#display-results").append(`<li>${trails[i].name}</li><li>${trails[i].location}</li><li>${trails[i].length} mile hike</li><li>${trails[i].latitude}</li><li>${trails[i].longitude}</li><p></p>`);
            }
        }
        
        
      }
      , function(error) {
        $("#display-results").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
        $("#display-div").show();
      });

  });
  
});




// 'https://www.google.com/maps/dir/?api=1&destination=' . $address



