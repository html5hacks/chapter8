// Get an ImageData object from the main thread, process it, send it back

//onmessage = function(e) { postMessage(smear(e.data)); }

// onmessage = function(e) {postMessage(change(e.data.pixels, e.data.x, e.data.y))};
// onmessage = function(e) {postMessage(e.data)};
onmessage = function(e) {postMessage(change(e.data))};

// Smear the ImageData pixels to the right, producing a motion blur.
// For large images, this function does a lot of computation and would
// cause UI responsiveness issues if it was used on the main thread.

	// function smear(pixels) {

	// 	var data = pixels.data, width = pixels.width, height = pixels.height;

	// 	// var n = 10, m = n-1; // Make n bigger for more smearing

	// 	// for(var row = 0; row < height; row++) { // For each row

	// 	// 	var i = row*width*4 + 4; // 2nd pixel offset

	// 	// 	for(var col = 1; col < width; col++, i += 4) { // For each column
	// 	// 		data[i] = (data[i] + data[i-4]*m)/n; 	 // Red pixel component
	// 	// 		data[i+1] = (data[i+1] + data[i-3]*m)/n; // Green
	// 	// 		data[i+2] = (data[i+2] + data[i-2]*m)/n; // Blue
	// 	// 		data[i+3] = (data[i+3] + data[i-1]*m)/n; // Alpha component
	// 	// 	}
	// 	// }

 //    	w2 = width / 2;
 //    	// run through the image, increasing blue, but filtering down red and green:
	//     for (y = 0; y < height; y++) {
	//         inpos = y * width * 4; // *4 for 4 ints per pixel
	//         outpos = inpos + w2 * 4
	//         for (x = 0; x < w2; x++) {
	//             r = pixels.data[inpos++] / 3; // less red
	//             g = pixels.data[inpos++] / 3; // less green
	//             b = pixels.data[inpos++] * 5; // MORE BLUE
	//             a = pixels.data[inpos++];     // same alpha

	//             b = Math.min(255, b); // clamp to [0..255]

	//             pixels.data[outpos++] = r;
	//             pixels.data[outpos++] = g;
	//             pixels.data[outpos++] = b;
	//             pixels.data[outpos++] = a;
	//         }
	//     }
	//     return pixels;
	//  }

	function change(imgd) {

		var pix = imgd.pixels.data;
		var xcord = imgd.x/1000;
		var ycord = imgd.y/1000;

		for (var i = 0, n = pix.length; i < n; i += 4) {
		    //var grayscale = pix[i] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
		    var grayscale = pix[i] * xcord + pix[i+1] * .59 + pix[i+2] * .11;
		    //var grayscale = pix[i] * xcord + pix[i+1] * ycord + pix[i+2] * xcord;
		    pix[i] = grayscale;   // red
		    pix[i+1] = grayscale;   // green
		    pix[i+2] = grayscale;   // blue
		    // i+3 is alpha (the fourth element)
		}

		imgd['pixels'].data = pix;
		// imgd['x'] = 0;
		// imgd['y'] = 0;
		return imgd;
	}