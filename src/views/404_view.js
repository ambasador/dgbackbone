define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/404'],
    function ($, _, Backbone, BaseView, tmpError404) {
        var Error404 = BaseView.extend({
            tmpl: tmpError404
        });

        return Error404;
    });
