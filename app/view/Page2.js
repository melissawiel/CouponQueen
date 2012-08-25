Ext.define("Sentify.view.Page2", {
    extend: 'Ext.Panel',
	xtype: 'page2',
	
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
				html: '<div align="center"><iframe src="resources/Sentences/HemingwayQuote/index.html" frameBorder="0">',
			},
			{
				style: 'align: center; background: #fff; border: 5px solid #5F6925; -moz-border-radius: 5px;-webkit-border-radius: 5px; padding:40px; height:93%; width:95%; margin:2.5%',
				html: '<div padding="200px"><font color=#000 size=+3><br>Ernest Hemingway signature style—clipped, restrained, and spare prose—is both beloved and reviled by authors and readers. Hemingway&#39s sentences are often brief, lacking subordinating conjunctions, and with little to no internal punctuation.  Here, Hemingway&#39s seeming simple sentence is diagrammed to show the rhetorical choices that give this short and stripped style. The use of polysyndeton—using conjunctions in close succession even when they may be omitted—gives the sentence a sense of rhythm and urgency.'
			},
			{
				style: 'align: center; background: #fff; border: 5px solid #A3D184; -moz-border-radius: 5px;-webkit-border-radius: 5px; padding:10px; height:93%; width:95%; margin:2.5%',
				html: '<table border="0"><tr><td><img src="resources/Sentences/Hemingway.jpg" width="300" style="border: 20px solid #fff; -moz-border-radius: 5px;-webkit-border-radius: 5px"/><br><br><br><br><br><br>  </td>'+
					'<td><font color=#000 size=+3><br><font size=+5>Ernest Hemingway</font>(1899-1961) defined much of the modernist movement. Known as much for his spare prose style as for his macho public image and zeal for adventure, Hemingway was famous in his own time. His novels The Sun Also Rises, A Farewell to Arms cemented his influence and he ultimately won the Pulitzer Prize for Fiction in 1953 and the Nobel Prize for Literature in 1954 for his novella The Old Man and the Sea. Hemingway&#39s novels often centered on bullfighters, soldiers, and other masculine archetypes, tough characters who displayed courage and resolve in the face of a brutish modern society.</td></tr></table>'
				
			}]
		}]
	}

});