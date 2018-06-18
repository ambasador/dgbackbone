/**
 * Created by Grenia on 29.08.2015.
 */
define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/portfolio'],
    function ($, _, Backbone, BaseView, tmplPortfolio) {
        var PortfolioView = BaseView.extend({
            tmpl: tmplPortfolio
        });

        return PortfolioView;
    });

