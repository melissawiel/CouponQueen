Ext.define('CouponQueen.view.VSDetail', {
    extend: 'Ext.Panel',
    xtype: 'vsdetail',

    config: {
        title: 'VS Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<div align="center">',
			'{Pic}',
			'<br>ID: {ID}',
			'<br>Store: {Store}',
			'<br>Expires: {Expire}</div>',
        ].join(''),
    }
});