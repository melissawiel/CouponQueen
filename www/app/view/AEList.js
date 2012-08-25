Ext.define('CouponQueen.view.AEList', {
    extend: 'Ext.dataview.List',
    xtype: 'aelist',
    requires: ['CouponQueen.store.AEStore'],
    
    config: {
        title: 'AE Coupons',
        grouped: true,
        itemTpl: '{Name} {Store}',
		store: 'AEStore',
		listeners: {
			itemtap: function(dView,index,item,e) {
				var record = dView.getStore().getAt(index);
				var curview = Ext.Viewport.getActiveItem();
				Ext.Viewport.animateActiveItem({
		            xtype: 'aedetail',
		            data: record.getData(),
					items: [{
						xtype: 'toolbar',
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
		}
    }
});
