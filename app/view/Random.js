Ext.define("CouponQueen.view.Random", {
    extend: 'Ext.Panel',
	xtype: 'random',

    config: {
		scrollable: true,
		html: ['<br><div align="center"><img src="coupon photos/c1.jpg" width="70%"/>',
			'<br><br><p>ID: 123<br>',
			'Store: Piggly Wiggly<br>',
			'Expires: 12/12/12</p></div>',
			].join('')
		}
});