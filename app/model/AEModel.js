Ext.define('CouponQueen.model.AEModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['ID', 'Name', 'Store', 'Expire', 'Pic']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.Name,
        ];
        return names.join(" ");
    }
});