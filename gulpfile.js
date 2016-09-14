var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/thinky/assets';
elixir.config.publicPath = 'themes/thinky/assets/compiled';

elixir(function(mix) {
    mix.styles([
        'bootstrap.min.css',
        'font-awesome.min.css',
        'templatemo-blue.css',
        'thinky.css'
    ]);

    mix.scripts([
        'jquery.js',
        'jquery.backstretch.min.js',
        'bootstrap.min.js',
        'thinky.js'
    ]);
});