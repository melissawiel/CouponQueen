Ext.define("Sentify.view.Original", {
    extend: 'Ext.Panel',
	xtype: 'originalpage',
	
    config: {
		layout: {
			type: 'card'
		},
		items: [{
			xtype: 'carousel',
			items: [{
				xtype: 'home'
			},
			{
				xtype: 'page1'			
			},
			{
				xtype: 'page2'
			},
			{
				xtype: 'page3'
			},
			{
				xtype: 'page4'
			}]
		}]
    },

});
