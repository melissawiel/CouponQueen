Ext.define("CouponQueen.view.Splash", {
    extend: 'Ext.Panel',
	xtype: 'splash',

    config: {
		scrollable: true,
		styleHtmlContent: true,
		items:[{
				html: '<div align="center"><iframe src="coupon photos/intro/index.html" style="border: 20px solid #CBCGD6; -moz-border-radius: 5px;-webkit-border-radius: 5px">',
			},
			{
				xtype: 'button',
				docked: 'bottom',
				padding: '40',
				margin: '62',
				width: '80%',
				text: 'Start Saving Money!',
				ui: 'lightblue',
				handler: function() {
					Ext.Viewport.animateActiveItem({
		            	xtype: 'main',
		        }, 'fade')}
		}]
}
});