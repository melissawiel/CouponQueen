Ext.define('CouponQueen.view.VSDetail', {
    extend: 'Ext.Panel',
    xtype: 'vsdetail',

    config: {
        title: 'VS Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'Hello {Name}!'
        ]
    }
});