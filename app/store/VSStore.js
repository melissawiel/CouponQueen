Ext.define('CouponQueen.store.VSStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CouponQueen.model.VSModel',
        sorters: 'Name',
        grouper : function(record) {
            return record.get('Name')[0];
        },
        data: [
			{ID:"93820182", Name:"Weekend Only", Store:"VS", Expire:"09/10/12", Pic:"coupon photos/vs1.jpg"},
			{ID:"13629473", Name:"Fashion Show Part", Store:"VS", Expire:"11/30/11", Pic:"coupon photos/vs2.jpg"},
			{ID:"92348927", Name:"Free Cotton Panty", Store:"VS", Expire:"09/28/12", Pic:"coupon photos/vs3.jpg"},
			{ID:"56453549", Name:"Free Beauty Rush Lip Gloss", Store:"VS", Expire:"12/10/12", Pic:"coupon photos/vs4.jpg"},
			{ID:"83742873", Name:"$10 Off and Free Panty", Store:"VS", Expire:"08/17/12", Pic:"coupon photos/vs5.jpg"}
        ]
    }
});