/**
 * Created by Grenia on 29.08.2015.
 */
define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/contact'],
    function ($, _, Backbone, BaseView, tmplContact) {
        var ContactView = BaseView.extend({
            tmpl: tmplContact
        });

        return ContactView;
    });
