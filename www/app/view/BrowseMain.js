Ext.define('CouponQueen.view.BrowseMain', {
    extend: 'Ext.navigation.View',
    xtype: 'browsemain',
    requires: [
        'CouponQueen.view.BrowseList',
        'CouponQueen.view.BrowseDetail'
    ],

    config: {
		title: 'Coupons',
		styleHtmlContent: true,
		scrollable: true,
        items: [{
            xtype: 'browselist'
        }]
    }
});