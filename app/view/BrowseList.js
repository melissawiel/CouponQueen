Ext.define('CouponQueen.view.BrowseList', {
    extend: 'Ext.dataview.List',
    xtype: 'browselist',
    requires: ['CouponQueen.store.BrowseStore'],
    
    config: {
        title: 'Coupons',
        grouped: true,
        itemTpl: '{Name} {Store}',
		store: 'BrowseStore',
		listeners: {
			itemtap: function(dView,index,item,e) {
				var record = dView.getStore().getAt(index);
				var curview = Ext.Viewport.getActiveItem();
				Ext.Viewport.setActiveItem({
		            xtype: 'browsedetail',
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
									Ext.Viewport.setActiveItem(curview);
										
							}
						}
						]
					}]
		        })
		
			}
		}
    }
});
