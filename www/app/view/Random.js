Ext.define("CouponQueen.view.Random", {
    extend: 'Ext.Panel',
	xtype: 'random',
	requires: ['CouponQueen.store.VSStore'],

    config: {
		scrollable: true,
			
		html: ['<br><div align="center"><img src="coupon photos/vs2.jpg" width="80%"/>',
			'<br><br><p>ID: 13629473<br>',
			'Store: VS<br>',
			'Expires: 11/30/11</p></div>',
			].join('')
		}
});