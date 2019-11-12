function initialize() {
  var fenway = {lat: 40.3658427, lng: 49.8319405};
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   center: fenway,
  //   zoom: 14
  // });
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
}