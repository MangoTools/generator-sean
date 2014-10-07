'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    app: {
        title: '<%= appName %>',
        description: '<%= appDescription %>',
        keywords: '<%= appKeywords %>'
    },
    root: rootPath,
	port: process.env.PORT || 3000,
    modelsDir : rootPath + '/app/models',
	templateEngine: 'swig',
	secret: 'SEAN - Need to be Changed',

    assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/angularjs-toaster/toaster.css'
			],
			js: [
				'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js', <% if (angularCookies) { %>
                'public/lib/angular-cookies/angular-cookies.js', <% } if (angularAnimate) { %>
                'public/lib/angular-animate/angular-animate.js', <% } if (angularTouch) { %>
                'public/lib/angular-touch/angular-touch.js', <% } if (angularSanitize) { %>
                'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angularjs-toaster/toaster.js',
                'public/lib/angular-socket-io/socket.js',
                'public/lib/angular-local-storage/dist/angular-local-storage.js',
                'public/lib/socket.io-client/socket.io.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
            'public/roleManager.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
