// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

// // document.write(settings).innerHTML.
// // $("#gif1").html(response);

//  $.get( "https://las.api.pvp.net/api/lol/las/v1.4/summoner/by-name/mohademago",{api_key:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"}).done(function( JSON ) {  
//            	var objectJS = jQuery.parseJSON(JSON);
//             var URL=objectJS['url'];
//             }); 
//         

document.getElementById("pulsar").addEventListener("click", function () {
	q = "finger guns"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("gifs").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function () {
		console.log('connection error');
	};

	request.send();
});

// $("#pulsar").click(function(){
 

// });


// $(document).ready(function() {
// 	$("#pulsar").click(function(event) {

		

// 					// $("gifs").load("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC");
// 				});
// });