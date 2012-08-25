Ext.define('CouponQueen.view.VSList', {
    extend: 'Ext.dataview.List',
    xtype: 'vslist',
    requires: ['CouponQueen.store.VSStore'],
    
    config: {
        title: 'VS Coupons',
        grouped: true,
        itemTpl: '{Name}',
		store: 'VSStore',
		listeners: {
			itemtap: function(dView,index,item,e) {
				var record = dView.getStore().getAt(index);
				var curview = Ext.Viewport.getActiveItem();
				Ext.Viewport.animateActiveItem({
		            xtype: 'vsdetail',
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
