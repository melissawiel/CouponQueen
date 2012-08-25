Ext.define("CouponQueen.view.Home", {
    extend: 'Ext.Panel',
	xtype: 'home',

    config: {
		title: 'Home',
		styleHtmlContent: true,
		scrollable: true,

		html: ['HOME PAGE'
			].join('')
		}

});