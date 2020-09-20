class Deposit {
	
	constructor()
	
	{
		this.depositLinkBtn=element(by.buttonText('Deposit'));
		this.depositAmount=element(by.model('amount'));
	
		this.btnDeposit=element(by.xpath('//button[@type="submit"]'));
		this.depositSuccessMsg=element(by.xpath('//span[@ng-show="message"]'));
	}
	
	
	
}

module.exports=new Deposit();
