window.onload = function() {
	// Get a reference to the <div> on the page that will display the
	// message text.
	var messageEle = document.getElementById('message');

	// A function to process messages received by the window.
	function receiveMessage(e) {
            messageEle.innerHTML = "Message Received: " + e.data;
            event.source.postMessage('Hello A, how are you?', e.origin);
	}

	window.addEventListener('message', receiveMessage);
}
