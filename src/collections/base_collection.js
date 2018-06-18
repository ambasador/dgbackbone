/**
 * Created by Grenia on 29.08.2015.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/base_model'
], function ($, _, Backbone, PortfolioModel) {
    var PortfoliosCollection = Backbone.Collection.extend({
        model: PortfolioModel,
        url: "data/Portfolios.json",
        parse : function(response) {
            return response;
        },

        initialize: function() {

            this.deferred = this.fetch();
        }
    });
    return PortfoliosCollection;

});