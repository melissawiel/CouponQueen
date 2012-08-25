Ext.define('CouponQueen.view.FindCoupons', {
    extend: 'Ext.Panel',
    xtype: 'findcoupons',

	layout: {
		type:'vbox',
		align: 'center',
		pack: 'center'
	},

    config: {
        title:'Add Coupons',
		scrollable: true,
		items: [{
				xtype: 'titlebar',
			    docked: 'top',
			    title: 'Find Coupons',
			},
			{
                xtype: 'button',
				margin:'62',
				padding: '40',
				width: '80%',
				ui: 'lightblue',
				text: 'Coupon of the Day',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.animateActiveItem({
				            xtype: 'couponday',
							items: [{
								xtype: 'toolbar',
								title: 'Coupon of the Day',
								docked: 'top',
								items: [
								{
									xtype: 'button',
									ui: 'back',
									text: 'Back',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								},
								{
									xtype: 'button',
									ui: 'square',
									text: 'Add',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								}
								]
							}]
				        }, 'fade')

					}
            },
			{
				xtype: 'button',
				text: 'Coupons by Store',
				ui: 'lightblue',
				margin:'62',
				padding: '40',
				width: '80%',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.animateActiveItem({
				            xtype: 'store',
							items: [{
								xtype: 'toolbar',
								title: 'Coupons by Store',
								docked: 'top',
								items: [
								{
									xtype: 'button',
									ui: 'back',
									text: 'Back',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								}
								]
							}]
				        }, 'fade')

					}
			},
            {
				xtype: 'button',
				text: 'Random Coupon',
				ui: 'lightblue',
				margin:'62',
				padding: '40',
				width: '80%',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.animateActiveItem({
				            xtype: 'random',
							items: [{
								xtype: 'toolbar',
								title: 'Random Coupon',
								docked: 'top',
								items: [
								{
									xtype: 'button',
									ui: 'back',
									text: 'Back',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								},
								{
									xtype: 'button',
									ui: 'square',
									text: 'Add',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								}
								]
							}]
				        }, 'fade')

					}
            },
			{
                xtype: 'button',
				ui: 'lightblue',
				text: 'Scan Coupon',
				margin:'62',
				padding: '40',
				width: '80%',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.animateActiveItem({
				            xtype: 'scanner',
							items: [{
								xtype: 'toolbar',
								title: 'Scan Coupon',
								docked: 'top',
								items: [
								{
									xtype: 'button',
									ui: 'back',
									text: 'Back',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								},
								{
									xtype: 'button',
									ui: 'square',
									text: 'Add',
									handler: function() {
											Ext.Viewport.animateActiveItem(curview, 'fade');
									}
								}
								]
							}]
				        }, 'fade')

					}
            }]
    }
});
