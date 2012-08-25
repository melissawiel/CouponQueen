Ext.define("CouponQueen.view.CouponDay", {
    extend: 'Ext.Panel',
	xtype: 'couponday',

    config: {
		scrollable: true,		

		html: ['<br><div align="center"><img src="coupon photos/vs5.jpg" width="80%"/>',
		'<br><br><p>ID: 83742873<br>',
		'Store: AEbr>',
		'Expires: 08/17/12</p></div>'
		].join(''),
		
	}

});