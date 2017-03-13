window.onload = function() {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
  
	// Get a reference to the 'Send Message' button.
	var btn = document.getElementById('send');

	// Get a reference to the <div> on the page that will display the
	// message text.
	var messageEle = document.getElementById('message');
	
        // A function to handle sending messages.
	function sendMessage(e) {
		// Prevent any default browser behaviour.
		e.preventDefault();

		// Send a message with the text 'Hello Treehouse!' to the receiver window.
		receiver.postMessage('Hello B', window.location.origin);
	}

        function receiveMessage(e){
            messageEle.innerHTML = "Message Received: " + e.data;
            console.log(e.data);
        }

	// Add an event listener that will execute the sendMessage() function
	// when the send button is clicked.
	btn.addEventListener('click', sendMessage);
        window.addEventListener( "message", receiveMessage);
}
