Ext.define("CouponQueen.view.Main", {
    extend: 'Ext.tab.Panel',
	xtype: 'main',
	
    config: {
        tabBarPosition: 'bottom',
        items: [{
			xtype: 'home'
		},
        {
            xtype: 'browsemain'
        },
		{
			xtype: 'input'
		}
        ]
    }
});