// This is a JavaScript file

var click = new Audio();
click.src = 'sound/click.mp3';

function mudarParaFoto(){
  document.getElementById("imgCamera").src = "img/camera.gif";
  click.play();
  location.href = "foto.html";
}

$(document).on("click", "#btnFoto", function(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL, saveToPhotoAlbum:true, });

  function onSuccess(imageData) {
      click.play();
      var image = document.getElementById('imgFoto');
      image.src = "data:image/jpeg;base64," + imageData;

      var onSuccess = function(position) {

      L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';

      var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],
      layers: L.mapquest.tileLayer('map'),
      zoom: 15
      });

      map.addControl(L.mapquest.control());
    };

  }
  function onFail(message) {
      alert('Failed because: ' + message);
  }

  function valLat(){
    position.coords.latitude;
  }

  function valLng(){
    positiom.coords.longitude;
  }

});
function voltar(){
  location.href = "index.html";
}