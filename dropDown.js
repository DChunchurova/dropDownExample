$(function(){ 
	var countries = {
		Bulgaria:['sofia','vidin','burgas'],
		France:['paris', 'lyeon','dijon']
	}

	function search(evt){
		var country = this.value,
			cities = evt.data.countries[country];
			$("#result").html('')
		for (var i = 0; i < cities.length; i++) {
			$("#result").append('<div>'+ cities[i] +'</div>')
		};

	}
	
	$("#choose").on('change',{countries:countries},search);

})