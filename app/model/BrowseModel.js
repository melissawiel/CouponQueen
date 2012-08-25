Ext.define('CouponQueen.model.BrowseModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['ID', 'Name', 'Store', 'Category', 'Expire', 'Pic']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.Name,
        ];
        return names.join(" ");
    }
});