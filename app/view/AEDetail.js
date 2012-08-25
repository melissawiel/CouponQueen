Ext.define('CouponQueen.view.AEDetail', {
    extend: 'Ext.Panel',
    xtype: 'aedetail',

    config: {
        title: 'AE Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'Hello {Name}!'
        ]
    }
});