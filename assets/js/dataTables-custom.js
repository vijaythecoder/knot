$('document').ready(function(){
	//data table
	$('#example').dataTable({
		"sPaginationType": "bootstrap",
		"iDisplayLength": 10
	});

	//widget data table
	$('#users_widget').dataTable({
		"sPaginationType": "bootstrap",
		"iDisplayLength": 3,
		"oStdClasses": {"sFilter": "dataTables_filter"}
	});
});