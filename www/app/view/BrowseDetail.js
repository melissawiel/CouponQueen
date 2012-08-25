Ext.define('CouponQueen.view.BrowseDetail', {
    extend: 'Ext.Panel',
    xtype: 'browsedetail',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<div align="center">',
			'{Pic}',
			'<br>ID: {ID}',
			'<br>Store: {Store}',
			'<br>Expires: {Expire}</div>',
        ]
    }
});