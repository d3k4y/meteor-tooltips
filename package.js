Package.describe({
  name: 'd3k4y:tooltips',
  summary: 'Reactive tooltips.',
  version: '0.6.2',
  git: 'https://github.com/lookback/meteor-tooltips.git'
});

Package.on_use(function(api) {
    api.versionsFrom('1.6');
    api.use([
        'coffeescript@2.3.2_1',
        'reactive-var',
        'jquery',
        'templating@1.3.2',
        'tracker'
    ], 'client');

    api.add_files([
        'tooltips.html',
        'tooltips.coffee'
    ], 'client');

    api.export('Tooltips', 'client');
});