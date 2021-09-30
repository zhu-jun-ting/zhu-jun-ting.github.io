$(function() {
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/2.jpg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": 0,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "bottom",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 100,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
	/* 
		var fileNumber = getFileNumber()         FUCK ALL THESE
	  
		console.log(fileNumber)
	 */

	var maxNameOfPictures = 6
	var autoChangeRate = 10 // in seconds

	/* from 2 to fileNumber */
	var randomNumber = Math.floor(Math.random() * (maxNameOfPictures - 1)) + 2 /* 2-6 */


	console.log(randomNumber)

	var filePath = "http://junting6.arts244.courses.bengrosser.com/wallpaper/assets/img/" + randomNumber + ".jpeg"
	$("#background").attr("src", filePath)

	var change = false

	if (change == true) {

		var changeBackgroundPictureInterval = setInterval(function() {

			if (change == true) {

				var randomNumber = Math.floor(Math.random() * (maxNameOfPictures - 1)) + 2 /* 2-6 */
				var filePath = "file:///Users/mac/Downloads/Archives/wallpaper/assets/img/" + randomNumber + ".jpeg"
				$("#backBackground").fadeOut()
				$("#backBackground").attr("src", filePath)

				$("#backBackground").fadeIn()

				$("#background").fadeOut()

				console.log(randomNumber)

			}

		}, autoChangeRate * 1000)

	}

});





/* 
function getFileNumber() {

	for (x = 2; x < 5; x++) {

		var filePath = "file:///Users/mac/Downloads/Archives/wallpaper/assets/img/" + x + ".jpeg"
		var f = new Image()
		f.src = filePath

		console.log(f.height)

		if (f.height > 0) {          FUCK  ALL  THESE !!!!

			console.log(filePath)

		} else {

			return (x - 1);

		}

	}

} 
 */
