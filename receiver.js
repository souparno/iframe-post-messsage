window.onload = function() {
	// Get a reference to the <div> on the page that will display the
	// message text.
	var messageEle = document.getElementById('message');

	// A function to process messages received by the window.
	function receiveMessage(e) {
            //messageEle.innerHTML = "Message Received: " + e.data;


	    //QUnit.moduleDone(function(result) {
	       //console.log(result);
	    //});
            //QUnit.done(function (result){
               //console.log(result);    
               ////event.source.postMessage(result);
            //});

            QUnit.testDone(function (result) {
               event.source.postMessage(result, e.origin);
            });
            QUnit.test( "hello test", function( assert ) {
                assert.ok( 1 == "1", "Passed!" );
            });
	}


	window.addEventListener('message', receiveMessage);
}
