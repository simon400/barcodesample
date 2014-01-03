function wlCommonInit(){
	

	$("#btnBarcode").on("tap", function() {

		window.plugins.barcodeScanner.scan(function(result) {
			$("#myText").val(result.text);
		}, function(error) {
			alert("Scanning failed: " + error);
		});

	});

}