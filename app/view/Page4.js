Ext.define("Sentify.view.Page4", {
    extend: 'Ext.Panel',
	xtype: 'page4',

    config: {
		layout: {
			type: 'card'
		},
		items: [{
			xtype: 'carousel',
			direction: 'vertical',
			style: 'background-color: #D2EDAF',
			items: [{
				style: 'align: center; background: #fff; border: 5px solid #A3D184; -moz-border-radius: 5px;-webkit-border-radius: 5px; padding:10px; height:93%; width:95%; margin:2.5%',
				html: '<div align="center"><iframe src="resources/Sentences/ShakespeareQuote/index.html" frameBorder="0">',
			}]
		}]
	}

});