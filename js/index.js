// topbar
var today = new Date();
var year = today.getFullYear();
var mes = today.getMonth()+1;
var dia = today.getDate();
var my_Date =dia+"-"+mes+"-"+year;
document.getElementById("time").innerHTML = my_Date;
document.getElementById("time").style.fontWeight = "bold";
document.getElementById("time").style.textDecoration = "none";

// searchBar
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// map
// let map

function initMap() {

  var options = {
    zoom:8,
    center:{lat: 6.712229, lng: 3.238491}
  }

  var map = new
  google.maps.Map(document.getElementById('map'), options);
 
  var marker = new google.maps.Marker({
    position:{lat: 6.712229, lng: 3.238491},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h2>32smiles Dental Clinic</h2>'
  });

  marker.addEventListener('click',function(){
    infoWindow.open(map, marker);
  })

}




