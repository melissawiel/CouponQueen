Ext.define("CouponQueen.view.Main", {
    extend: 'Ext.tab.Panel',
	xtype: 'main',
	
    config: {
		scrollable: true,
		title: 'Start Saving Money!',
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'browsemain',
			iconCls: 'shop1'
        },
		{
			xtype: 'findcoupons',
			iconCls: 'organize'
		}
        ]
    }
});