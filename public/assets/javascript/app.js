$(document).ready(function(){

	$('#main').scrollspy({ target: '#nav' });

	//MODAL FUNCTIONS

	$('#mailModal').on('shown.bs.modal', function () {
  		$('#myInput').focus();
	});

	$("#mailSend").on("click", function() {
		

	});

	$('#mailCancel').modal('hide');

});