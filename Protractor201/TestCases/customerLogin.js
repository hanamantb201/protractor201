describe('Verify customer login',function(){
		var d=require("./../TestData/TestData.js");
		var using=require('jasmine-data-provider');
		var element_home=require("./../PageObjects/HomePage.js");
		
		
	using(d.dataDriven, function (data, description){
		
		it ('click on customer Login ', function(){
			 browserActions.clickOn(element_home.btnCustomerLoginlink);	
			 
		     browserActions.selectByvalue(data.name);
		    expect(element_home.btnLogin.isEnabled()).toBe(true);
		   //  expect(browserActions.isElementEnabled(element_home.btnLogin)).toBe(true);
			 browserActions.clickOn(element_home.btnLogin);
		                       
		            });

		
		
		it ('logout', function(){
						browserActions.clickOn(element_home.btnLogout);
    					  expect(element_home.nameLabel.isDisplayed()).toBe(true);
		            });
		
		
		
		
		
		
	                 });

		});