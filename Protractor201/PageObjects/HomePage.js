class Home {
	
	constructor()
	
	{
		this.btnCustomerLoginlink=element(by.buttonText('Customer Login'));
		this.selectName=element(by.id('selectByvalue'));
		this.btnLogin=element(by.buttonText('Login'));
		this.btnLogout=element(by.buttonText('Logout'));
		this.nameLabel=element(by.xpath('//label[text()="Your Name :"]'));


	}
	
	
	
}
module.exports=new Home();
