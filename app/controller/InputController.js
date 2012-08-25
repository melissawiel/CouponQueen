Ext.define('MyApp.controller.InputController', {
    extend: 'Ext.app.Controller',

    config: {

    },

    refs: [
        {
            ref: 'CouponDay',
            selector: '#CouponDay'
        },
        {
            ref: 'Store',
            selector: '#Store'
        },
        {
            ref: 'Random',
            selector: '#Random'
        }
    ],

    views : [
        'CouponDay',
        'Store',
		'Random'
    ],

     init: function() {
          this.getTestMainView().create();


        this.control({
            '#CouponDay': {
                tap: function() {
                }
            },
            '#Store': {
                tap: function() {
                }
            },
            '#Random': {
                tap: function() {
                }
            }
        });
    }
});