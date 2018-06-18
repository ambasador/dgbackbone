/**
 * Created by Grenia on 29.08.2015.
 */
define([
    'underscore',
    'backbone'
], function ( _, Backbone) {
    var PortfolioModel = Backbone.Model.extend({
        defaults: {
            "Id": "BWDSi",
            "Name": "Archer: Season 2: Disc 1",
            "AverageRating": 4.6,
            "ReleaseYear": 2011,
            "Url": "http://www.netflix.com/Movie/Archer_Season_2_Disc_1/70217944",
            "Rating": "TV-MA"
        },
        parse: function(data){
            return data;
        }
    });
    return PortfolioModel;
});