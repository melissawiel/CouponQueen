Ext.application({
    name: 'Sentify',

    views: ['Splash', 'Original', 'Home','Page1', 'Page2', 'Page3', 'Page4'],



	launch: function () {
	        Ext.Viewport.setMasked({
	            xtype: 'splash',
	        });
	        var task = Ext.create('Ext.util.DelayedTask', function () {
	            Ext.Viewport.setMasked(false);
	            Ext.Viewport.add({
	                xclass: 'Sentify.view.Original'
	            });
	        });
			task.delay(4000);
			
	    },
});

