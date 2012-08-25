Ext.define('CouponQueen.view.FindCoupons', {
    extend: 'Ext.Panel',
    xtype: 'findcoupons',

    config: {
        title:'FindCoupons',

		items: [{
				xtype: 'titlebar',
			    docked: 'top',
			    title: 'Find Coupons',
			},
			{
				html:'<br>'
			},
			{
                xtype: 'button',
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
								}
								]
							}]
				        }, 'fade')

					}
            },
			{
				html:'<br>'
			},
			{
				xtype: 'button',
				text: 'Coupons by Store',
				ui: 'lightblue',
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
				html:'<br>'
			},
            {
				xtype: 'button',
				text: 'Random Coupon',
				ui: 'lightblue',
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
								}
								]
							}]
				        }, 'fade')

					}
            }]
    }
});
