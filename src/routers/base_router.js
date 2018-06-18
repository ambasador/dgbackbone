define([
        'jquery',
        'underscore',
        'backbone',
        'views/index_view',
        'views/about_view',
        'views/portfolio_view',
        'views/item_view',
        'views/contact_view',
        'views/404_view'
    ],
    function ($, _, Backbone, IndexView, AboutView, PortfolioView, ItemView, ContactView, Error404) {
        var BaseRouter = Backbone.Router.extend({
            routes: {
                '(/)': 'index',
                'home': 'index',
                'about': 'about',
                'portfolio': 'portfolio',
                'portfolio/:id': 'item',
                'contact': 'contact',
                '*actions' : 'error404'
            },
            deselectMenu: function () {
                //deselect all navigation pills
                $('ul.menu li').removeClass('active');
            },

            selectMenu: function (menu) {
                this.deselectMenu();
                $(menu).addClass('active');
            },
            index: function () {
                indexView = new IndexView({el: $('main')});
                indexView.render();
                this.selectMenu('li.home');
            },
            about: function () {
                aboutView = new AboutView({el: $('main')});
                aboutView.render();
                this.selectMenu('li.about');
            },
            portfolio: function () {
                portfolioView = new PortfolioView({el: $('main')});
                portfolioView.render();
                this.selectMenu('li.portfolio');
            },
            item: function () {
                itemView = new ItemView({el: $('main')});
                itemView.render();
                this.selectMenu('li.portfolio');
            },
            contact: function () {
                contactView = new ContactView({el: $('main')});
                contactView.render();
                this.selectMenu('li.contact');
            },
            error404: function () {
                Error404 = new Error404({el: $('main')});
                Error404.render();
                this.deselectMenu();

            }
        });

        var initialize = function () {
            var baseRouter = new BaseRouter();
            Backbone.history.start();

        };

        return {initialize: initialize};
    });

