describe('test suite',function(){
		var d=require("./TestData/TestData.js");
		var using=require('jasmine-data-provider');
		
		
	using(d.dataDriven, function (data, description){
		
		it ('test case', function(){
			
			browser.get('https://angularjs.org');
			console.log("Hellow world");
			console.log(data.first);
		            });
		
		
	                 });
	
	
	
	
		});