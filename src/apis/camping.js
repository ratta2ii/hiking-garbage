// const API_KEY = process.env.API_KEY;

// export function findCampgrounds(lat, long){
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
  
//       const endPoint = "https://www.hikingproject.com/data/get-campgrounds?";
//       let url = `${endPoint}lat=${lat}&lon=${long}&maxDistance=50&key=${API_KEY}&maxResults=10&sort=distance`;
  
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         }
//         else {
//           reject(Error(request.statusText));
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }










// Required Arguments:

// key - Your private key

// lat - Latitude for a given area

// lon - Longitude for a given area

// Optional Arguments:

// maxDistance - Max distance, in miles, from lat, long. Default: 30. Max: 200.

// maxResults - Max number of campgrounds to return. Default: 10. Max: 500.



// let test = https://www.hikingproject.com/data/get-campgrounds?lat=47.6062&lon=122.3321&maxDistance=20&key=200647098-0a0b56802af2813b7718381cda690066&maxResults=25&sort=distance

// https://www.hikingproject.com/data/get-campgrounds?lat=40.0274&lon=-105.2519&maxDistance=10&key=200647098-0a0b56802af2813b7718381cda690066&maxResults=25&sort=distance