Ext.define('CouponQueen.view.VSMain', {
    extend: 'Ext.navigation.View',
    xtype: 'vsmain',
    requires: [
        'CouponQueen.view.VSList',
        'CouponQueen.view.VSDetail'
    ],

    config: {
		title: 'VS Coupons',
		styleHtmlContent: true,
		scrollable: true,
        items: [{
            xtype: 'vslist'
        }]
    }
});