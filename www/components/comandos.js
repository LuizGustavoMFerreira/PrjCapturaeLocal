// This is a JavaScript file

function mudarParaFoto(){
  location.href = "foto.html";
}

$(document).on("click", "#btnFoto", function(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL, saveToPhotoAlbum:true, });

  function onSuccess(imageData) {
      var image = document.getElementById('imgFoto');
      image.src = "data:image/jpeg;base64," + imageData;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
});