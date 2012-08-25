Ext.define('CouponQueen.view.BrowseDetail', {
    extend: 'Ext.Panel',
    xtype: 'browsedetail',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'Hello {Name}!'
        ]
    }
});