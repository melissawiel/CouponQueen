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
                xtype: 'button',
				text: 'Coupon of the Day',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.setActiveItem({
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
											Ext.Viewport.setActiveItem(curview);
									}
								}
								]
							}]
				        })

					}
            },
			{
				xtype: 'button',
				text: 'Coupons by Store',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.setActiveItem({
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
											Ext.Viewport.setActiveItem(curview);
									}
								}
								]
							}]
				        })

					}
			},
            {
				xtype: 'button',
				text: 'Random Coupon',
				handler: function() {
						var curview = Ext.Viewport.getActiveItem();
						Ext.Viewport.setActiveItem({
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
											Ext.Viewport.setActiveItem(curview);
									}
								}
								]
							}]
				        })

					}
            }]
    }
});
