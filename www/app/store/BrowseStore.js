Ext.define('CouponQueen.store.BrowseStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.BrowseModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"93820182", Name:"Lingerie", Store:"VS", Expire:"09/10/12", Pic:'<img src="coupon photos/vs1.jpg" width="80%"/>'},
			{ID:"13629473", Name:"Fashion Show Panty", Store:"VS", Expire:"11/30/11", Pic:'<img src="coupon photos/vs2.jpg" width="80%"/>'},
			{ID:"92348927", Name:"Free Cotton Panty", Store:"VS", Expire:"09/28/12", Pic:'<img src="coupon photos/vs3.jpg" width="80%"/>'},
			{ID:"56453549", Name:"Free Beauty Rush Lip Gloss", Store:"VS", Expire:"12/10/12", Pic:'<img src="coupon photos/vs4.jpg" width="80%"/>'},
			{ID:"83742873", Name:"$10 Off and Free Panty", Store:"VS", Expire:"08/17/12", Pic:'<img src="coupon photos/vs5.jpg" width="80%"/>'},
			{ID:"0195832", Name:"Take 15% off", Store:"AE", Expire:"04/04/13", Pic:'<img src="coupon photos/ae1.jpeg" width="80%"/>'},
			{ID:"8275910", Name:"Save $10 When You Spend $50", Store:"AE", Expire:"11/17/12", Pic:'<img src="coupon photos/ae2.png" width="80%"/>'},
			{ID:"2049188", Name:"Take 20% off", Store:"AE", Expire:"3/24/13", Pic:'<img src="coupon photos/ae3.jpeg" width="80%"/>'},
			{ID:"9987201", Name:"Take 25% off", Store:"AE", Expire:"11/22/12", Pic:'<img src="coupon photos/ae4.jpeg" width="80%"/>'},
        ]
    }
});