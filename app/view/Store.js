Ext.define("CouponQueen.view.Store", {
    extend: 'Ext.tab.Panel',
	xtype: 'store',

    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'aemain',
			iconCls: 'shop1'
        },
		{
			xtype: 'vsmain',
			iconCls: 'organize'
		}
        ]
    }

});