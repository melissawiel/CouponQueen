Ext.define("CouponQueen.view.Input", {
    extend: 'Ext.List',
    requires: [
		'Ext.form.FieldSet',
        'Ext.TitleBar',
        'Ext.Video'
    ],
	xtype: 'input',
    config: {

        title:'Input',
		itemTpl: '{title}',
		data: [
		{title: 'Featured Coupons'},
		{title: 'Browse By Store'},
		{title: 'Random'}
		],
		OnItemTap: function(){
			getActiveItem();
		}
    }
});




Ext.define('CouponQueen.view.Input', {
    extend: 'Ext.dataview.List',
    xtype: 'input',
	requires: [
		'Ext.form.FieldSet',
        'Ext.TitleBar',
        'Ext.Video'
    ],
    
    config: {
        title:'Input',
		itemTpl: '{title}',
		data: [
		{title: 'Featured Coupons'},
		{title: 'Browse By Store'},
		{title: 'Random'}
		],
		listeners: {
			itemtap: function(dView,index,item,e) {
				var curview = Ext.Viewport.getActiveItem();
				Ext.Viewport.setActiveItem({
		            xtype: 'browsedetail',
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
