Ext.define('CouponQueen.store.FStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.FModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"9847262", Name:"20% Off", Store:"Forever 21", Expire:"03/24/12", Pic:'<img src="coupon photos/f1.png" width="80%"/>'},
			{ID:"5465933", Name:"Summer Sale 90% Off", Store:"Forever 21", Expire:"09/01/12", Pic:'<img src="coupon photos/f2.png" width="80%"/>'},
			{ID:"6938439", Name:"15% Off for Military", Store:"Forever 21", Expire:"05/28/12", Pic:'<img src="coupon photos/f3.gif" width="80%"/>'},
			{ID:"2348548", Name:"70% Off 3 Day Sale", Store:"Forever 21", Expire:"08/28/12", Pic:'<img src="coupon photos/f4.jpeg" width="80%"/>'},
			{ID:"7348757", Name:"10% Off Purchase of $40", Store:"Forever 21", Expire:"05/10/12", Pic:'<img src="coupon photos/f5.jpeg" width="80%"/>'}
        ]
    }
});