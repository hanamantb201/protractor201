describe('Verify Deposit transaction',function(){
		var d=require("./../TestData/TestData.js");
		var using=require('jasmine-data-provider');
		var element_home=require("./../PageObjects/HomePage.js");
		var element_deposit=require("./../PageObjects/DepositPage.js");
		
	using(d.dataDriven, function (data, description){
		
		it ('click on customer Login ', function(){
			 browserActions.clickOn(element_home.btnCustomerLoginlink);	
			 
		     browserActions.selectByvalue(data.name);
		    expect(element_home.btnLogin.isEnabled()).toBe(true);
			 browserActions.clickOn(element_home.btnLogin);
		                       
		            });

		
		it ('Deposit an amount  ', function(){
			
			 browserActions.clickOn(element_deposit.depositLinkBtn);	
			 
			 element_deposit.depositAmount.sendKeys("5000");
			 browserActions.clickOn(element_deposit.btnDeposit);
			 
		   element_deposit.depositSuccessMsg.getText().then(function(actualText){
		    
		           expect(actualText).toEqual(data.successMsg);
		          })
		                       
		            });

		
		it ('click on logout', function(){
						browserActions.clickOn(element_home.btnLogout);
    					  expect(element_home.nameLabel.isDisplayed()).toBe(true);
		            });		
		
		
	                 });

		});