/*

Get a list of all files within the Shopify Admin (/admin/settings/files)
This needs to be run within the Chrome Browser. Paste into the debug console and run...

A text file will download when done.

*/
(function(){
	var debug = false; // enable logging
	var fileArray = [];
	var saveList = function(fileArray){
		console.log('============ DONE. DOWNLOAD FILE ============');
		var a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		var blob = new Blob(["\ufeff",fileArray],{type:'text/plain'}),
		link = window.URL.createObjectURL(blob);
		a.href = link;
		a.download = 'shopify-files-list' + '.txt';
		a.click();
		window.URL.revokeObjectURL(link);
	};
	var getFiles = function(url){
		if(typeof(url) === 'undefined'){ var url = '/admin/settings/files?limit=250' }
		$.ajax({
			url: url,
			success: function(d){

				var html = $(d);
				var fields = html.find('.next-input.next-input--readonly');
				for (var i = 0; i < fields.length; i++) {
					if(debug){ console.log('Adding ' + fields[i].value) }
					fileArray.push(fields[i].value);
				};

				var next = html.find('#pagination-links li:last a');
				if(!next.length || next.hasClass('disabled')){
					if(fileArray.length){ saveList(fileArray) }
					return;
				}

				var nextUrl = next[0].href;
				console.log(nextUrl)

				if(nextUrl.indexOf('direction=next')>-1){
					if(debug){ console.log('Fields grabbed. Next page now...') }
					getFiles(nextUrl);
				}else{
					saveList(fileArray);
				}
			}
		});
	}
	getFiles();
})();
