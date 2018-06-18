require.config({
    baseUrl: './src',
    paths: {
        jquery: '../lib/jquery',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        Handlebars: '../lib/Handlebars',
        hbs: '../lib/hbs'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'Handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    hbs: {
        disableI18n: true,
        helpers: true,
        templateExtension: 'hbs'
    }
});

require(['application'],
    function (AppMain) {
        AppMain.initialize();
    });
