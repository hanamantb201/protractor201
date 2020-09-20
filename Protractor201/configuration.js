var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');

exports.config = {
 
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['test1.js'],
    
	   onPrepare: function() {
		   
		   browser.driver.manage().window().maximize();
		   browserActions=new (require('./utilityFunctions.js')).BrowserActions();
		   
		   browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login").then(function(){
			   
			   browser.sleep(3000);   
			   
		   });
	
		      jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   },
		   
		   suites:{
			   regression : [
				//   './TestCases/customerLogin.js',
				   './TestCases/depositTC.js']
			   
		  },

jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
  
  
  
  

		};