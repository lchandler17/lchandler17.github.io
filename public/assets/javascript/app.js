$(document).ready(function(){

	$('#main').scrollspy({ target: '#nav' });

	//MODAL FUNCTIONS

	$('#mailModal').on('shown.bs.modal', function () {
  		$('#myInput').focus();
  		//??? my Input?? //
	});

	$("#mailSend").on("click", function() {

	});

	$('#mailCancel').modal('hide');

});