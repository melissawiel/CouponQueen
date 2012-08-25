Ext.define("CouponQueen.view.Scanner", {
    extend: 'Ext.Panel',
	xtype: 'scanner',

    config: {
		scrollable: true,
		html: ['<br><div align="center"><img src="coupon photos/c1.jpg" width="70%"/>'
			].join('')
		}
});