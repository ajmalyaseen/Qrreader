// Set up QuaggaJS config
const config = {
	inputStream: {
		type: "LiveStream",
		constraints: {
			width: { min: 640 },
			height: { min: 480 },
			aspectRatio: { min: 1, max: 100 },
			facingMode: "environment", // or "user" for front camera
		},
	},
	locator: {
		patchSize: "medium",
	},
	numOfWorkers: 2,
	decoder: {
		readers: ["code_128_reader", "ean_reader", "ean_8_reader"],
	},
};

// Start the scanner
Quagga.init(config, function (err) {
	if (err) {
		console.log(err);
		return;
	}
	Quagga.start();

	// Listen for scan events
	Quagga.onDetected(function (result) {
		const code = result.codeResult.code;
		document.getElementById("result").textContent = code;
	});
});
