Ext.define('CouponQueen.store.BrowseStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.BrowseModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"1", Name:"a", Store:"VS", Expire:"12/12/12", Pic:"merr"},
			{ID:"2", Name:"b", Store:"AE", Category:"bat", Expire:"11/11/11", Pic:"bloop"}
			
        ]
    }
});