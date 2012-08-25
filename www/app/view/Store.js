Ext.define("CouponQueen.view.Store", {
    extend: 'Ext.Panel',
	xtype: 'store',

    config: {
		scrollable: true,
		html:[
		'<div align="center"><font size=+9>American Eagle</font><br><br>'+
		'<img src="coupon photos/ae1.jpeg" width="30%"/><br>ID: 0195832<br>Name: Take 15% off<br>Expires: 04/04/13<br><input type="button" value="Add"<br><br><br>'+
		'<img src="coupon photos/ae2.png" width="30%"/><br>ID: 8275910<br>Name: Save $10 When You Spend $50<br>Expires:11/17/12<br><input type="button" value="Add"<br><br><br>'+
		'<img src="coupon photos/ae3.jpeg" width="30%"/><br>ID: 2049188<br>Name: Take 20% off<br>Expire: 3/24/13<br><input type="button" value="Add"<br><br><br>'+
		'<img src="coupon photos/ae4.jpeg" width="30%"/><br>ID: 9987201<br>Name: Take 25% off<br>Expires: 11/22/12<br><input type="button" value="Add"<br><br><br>'
	
		]
}

});