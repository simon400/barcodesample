
/* JavaScript content from js/SampleBarcodeScanner.js in folder common */
function wlCommonInit(){
	

	$("#btnBarcode").on("tap", function() {

		window.plugins.barcodeScanner.scan(function(result) {
			$("#myText").val(result.text);
		}, function(error) {
			alert("Scanning failed: " + error);
		});

	});

}
/* JavaScript content from js/SampleBarcodeScanner.js in folder android */
/**
 *  @license
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}