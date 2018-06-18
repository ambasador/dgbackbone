/**
 * Created by Grenia on 29.08.2015.
 */
define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/item'],
    function ($, _, Backbone, BaseView, tmplItem) {
        var ItemView = BaseView.extend({
            tmpl: tmplItem
        });

        return ItemView;
    });
