$(function(){ 
	var countries = {
		Bulgaria:['Sofia','Vidin','Burgas','Plovdiv','Varna','Lovech'],
		France:['Paris', 'Lyeon','Dijon'],
		Germany:['Hamburg', 'Berlin','Munich'],
		Italy:['Rome', 'Milan','Bari','Palermo']
	}

	function search(evt){
		var country = this.value,
			cities = evt.data.countries[country];
			
		$("#result").html('')
		for (var i = 0; i <cities.length; i++) {
			$("#result").append('<div>'+ cities[i] +'</div>')
		};
		$("#result div:odd").addClass("odd");

	}
	
	$("#choose").on('change',{countries:countries},search);
	

})
$("#result:odd").addClass("odd");
