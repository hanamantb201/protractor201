BrowserActions= function(){
	
	this.isElementVisilble= function(oElement)
	{
		
		oElement.isDisplayed().then(function(expstatus){
			if (expstatus)
			{
				console.log("Element displayed");
			return true;
			}
			else {
				return false;
				
			}
			
		});
		
	
		
		
		
	};
	
	
	this.isElementEnabled=function(oElement){
		try{	
		oElement.isEnabled().then(function(value){
			browser.sleep(2000);
			return value;
		       })
		}
		catch (error){
	           console.log("error message" + error);
	           return false;
	   	}		
		};
	
	
	this.clickOn=function(oElement){
	try{	
	oElement.click().then(function(){
		browser.sleep(2000);
		return true;
	       })
	}
	catch (error){
           console.log("error message" + error);
           return false;
   	}		
	};
	
	this.selectByvalue =function(value) {
		try{
			element(by.xpath('//option[.="'+value+'"]')).click().then(function(){	
				browser.sleep(2000);
				return true;
			})
			
		}
		catch(error){
			 	console.log("error message" + error);
	             return false;
		}
	};
	
	
	
}
module.exports.BrowserActions=BrowserActions;