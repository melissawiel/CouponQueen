Ext.define('CouponQueen.store.AEStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.AEModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"0195832", Name:"Take 15% off", Store:"AE", Expire:"04/04/13", Pic:'<img src="coupon photos/ae1.jpeg" width="80%"/>'},
			{ID:"8275910", Name:"Save $10 When You Spend $50", Store:"AE", Expire:"11/17/12", Pic:'<img src="coupon photos/ae2.png" width="80%"/>'},
			{ID:"2049188", Name:"Take 20% off", Store:"AE", Expire:"3/24/13", Pic:'<img src="coupon photos/ae3.jpeg" width="80%"/>'},
			{ID:"9987201", Name:"Take 25% off", Store:"AE", Expire:"11/22/12", Pic:'<img src="coupon photos/ae4.jpeg" width="80%"/>'},
        ]
    }
});