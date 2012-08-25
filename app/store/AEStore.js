Ext.define('CouponQueen.store.AEStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.AEModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"1", Name:"a", Store:"AE", Expire:"12/12/12", Pic:"merr"},
			{ID:"2", Name:"b", Store:"AE", Expire:"11/11/11", Pic:"bloop"}
			
        ]
    }
});