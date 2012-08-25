Ext.define('CouponQueen.view.AEDetail', {
    extend: 'Ext.Panel',
    xtype: 'aedetail',

    config: {
        title: 'AE Details',
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