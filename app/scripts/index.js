// https://maps.googleapis.com/maps/api/geocode/json?address="31 rue Verdi, Nice"&key=AIzaSyBEU8Q8RuphCdPfJfzonMz7g2vSQxUewmw
let inpt = document.querySelector('#inpt');
let btn = document.querySelector('#send');
let lbl = document.querySelector('#label');



function sendAction (){
  initMap();
  const req = new XMLHttpRequest();

  req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        console.log("Réponse reçue: %s", this.responseText);

        let resp = JSON.parse(this.responseText);
        lbl.textContent=resp.results;
        console.log(typeof(resp));
        console.log(resp.results[0].geometry.location);
        // initMap(resp.results[0].geometry.location)
        initMap(resp.results[0].geometry.location)
        //initMap();
      } else {
        console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
      }
    }
  };
  console.log(inpt.value);
  let url =`https://maps.googleapis.com/maps/api/geocode/json?address=${inpt.value}
  &key=AIzaSyBEU8Q8RuphCdPfJfzonMz7g2vSQxUewmw`
  req.open('GET', url);
  req.send();

}



function initMap(coords) {
  var myLatLng = coords;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

// let map = document.querySelector('#map');
// function initMap(location) {
// console.log('init');
//   var coords = location;
//   map = new google.maps.Map(document.getElementById('map'), {
//            center: coords
//        }),
//        marker = new google.maps.Marker({
//             position: coords,
//             map: map
//         });
//   }
//



btn.addEventListener('click',sendAction);
