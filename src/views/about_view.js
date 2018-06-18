define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/about'],
    function ($, _, Backbone, BaseView, tmplAbout) {
        var AboutView = BaseView.extend({
            tmpl: tmplAbout
        });

        return AboutView;
    });
