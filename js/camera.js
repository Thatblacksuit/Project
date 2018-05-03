
var destinationType; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
	destinationType=navigator.camera.DestinationType;   
    
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: Camera.destinationType.FILE_URI });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
    
    var galleryimage = document.getElementById('galleryimage');
	galleryimage.style.display = 'block';
	galleryimage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}