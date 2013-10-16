$(document).ready(function() { 
	$("#signup-form").submit(function(e){
			e.preventDefault()

		

		//make a post request to our /signup endpoint
		$.post('/formsubmission', $(this).serialize(), function(data){

			

			//if there was an error, show the error
			if(data.error){
				// add the error text to the error div
				$('#message').text(data.error)
			}

			// if the request returned a success message, display it.
			if(data.success){
				$('#message').text(data.success)
			}
		})
	})

});