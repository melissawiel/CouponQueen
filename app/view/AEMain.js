Ext.define('CouponQueen.view.AEMain', {
    extend: 'Ext.navigation.View',
    xtype: 'aemain',
    requires: [
        'CouponQueen.view.AEList',
        'CouponQueen.view.AEDetail'
    ],

    config: {
		title: 'AE Coupons',
		styleHtmlContent: true,
		scrollable: true,
        items: [{
            xtype: 'aelist'
        }]
    }
});