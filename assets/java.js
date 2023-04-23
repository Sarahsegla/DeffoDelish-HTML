
// starting from 0. array of images that will be loope through
var i = 0;

// creating an empty array of the images
var images = [];

// time that will be counted in miller seconds between each image
var time = 3000;


//list of the images. filling the emppty images array
images[0] = './assets/images/ice.jpg';
images[1] = './assets/images/mix.jpg';
images[2] = './assets/images/smoke.jpg';
images[3] = './assets/images/spag.png';
images[4] = './assets/images/spag2.jpg';

// function that changes the images in the array
function imgChange() {
    // getting mySlides from html (img name="mySlides") and getting the source images to [i] which is 0 from (var i = 0;)
    document.mySlides.src = images[i];

    // if statement
    // if [i] is bigger than the array of the images take away one
    if (i < images.length - 1 ){
        // if its true incriment (increase) by 1 
        i++;

    } else {
        //if not reset to 0
        i = 0;
    }

    // to run the function for a sorten amount of seconds 
    // getting time from the variable time
    setTimeout("imgChange()", time)
}

//want the images to run when the page loads
window.onload = imgChange;



// api


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://the-fork-the-spoon.p.rapidapi.com/sale-type-menu/list?id_restaurant=522995&locale=en_US',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': ' ',
		'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	// console.log(response);
    console.log(response.data);
});