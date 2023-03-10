// Config linking page to Google Firebase Project
 const firebaseConfig = {
    /*apiKey: "AIzaSyBYwa7ifHMP_z1MsZ7CBRTGY_aqnSp4XeE",
    authDomain: "image-upload-39545.firebaseapp.com",
    projectId: "image-upload-39545",
    storageBucket: "image-upload-39545.appspot.com",
    messagingSenderId: "284565950625",
    appId: "1:284565950625:web:975404091286cbebcf60e0"*/
	apiKey: "AIzaSyChettIA_eN1Z7LRDAbGxcvWD4kpJhhBMI",
	authDomain: "imageuploads-ec685.firebaseapp.com",
	projectId: "imageuploads-ec685",
	storageBucket: "imageuploads-ec685.appspot.com",
	messagingSenderId: "769792792284",
	appId: "1:769792792284:web:a8426e31838d11fdf68619"
	
  };
  
	firebase.initializeApp(firebaseConfig);

//Choose files
var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

//File selected 
document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);
		
		storage.getDownloadURL()
		.then(function(url) {
		//document.querySelector(".picture").src = url;
		console.log(url);
		})
				
      //upload file
      var upload = storage.put(files[i]);
	  
      //update progress bar (currently hidden on page)
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          document.getElementById(
            "uploading"
	    ).innerHTML = "Uploaded Successfully";
		 }
      );
    }
  } else {
    alert("No file chosen");
  };

 });
 
  function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}

//Word animation 
let animation = anime({
  targets: '.letter',
  opacity: 1,
  translateY: 50, 
  rotate: {
    value: 360,
    duration: 2000,
    easing: 'easeInExpo'
  }, 
  scale: anime.stagger([1, 1], {from: 'center'}), 
  delay: anime.stagger(100, {start: 100}), 
  translateX: [-10, 30]
});                
