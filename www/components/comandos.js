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
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
});

function voltar(){
  location.href = "index.html";
}