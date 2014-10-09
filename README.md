generator-sean
==============

Yo generator for [sean](https://github.com/MangoTools/sean)

SEAN is an full-stack javascript open-source framework based on SQL (Sequelize Express Angular and Node).
It provides everything needed  to build applications with [Sequilize](http://www.sequelize.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/).
This project  found it's root on [SEANJS](http://sean.org) project.

## Overview

SEAN uses [Yeoman](http://yeoman.io/index.html) generator for scaffolding application and rapid development. Yeoman generators provides a powerful, easy to maintain, and open solution for scaffolding applications.
For clarity we decided to use the same generator formatting as SEAN so user coming from this framework will feel right at home.

## Getting Started

Before you begin make sure you have the [yo scaffolding tool](http://yeoman.io/generators.html) installed(As it is part of the Yeoman tool set you might have installed it before). To globally install *yo* you will need to use npm:


```
$ npm install -g yo
```


**Note:** Your user might not have the permissions to install package globally, so use a super user or **sudo**.



Once you have *yo* installed, you will need to install the SEAN generator as well:


```
$ npm install -g generator-sean
```

You are now ready to get started with the SEAN generator. The generator will help you create a SEAN application, a CRUD module, Angular Module, and other AngularJS/Express entities.

## Generators

Available generators:

* [sean](#application-generator)
* [sean:crud-module](#crud-module-sub-generator)
* [sean:angular-module](#angularjs-module-sub-generator)
* [sean:angular-route](#angularjs-route-sub-generator)
* [sean:angular-controller](#angularjs-controller-sub-generator)
* [sean:angular-view](#angularjs-view-sub-generator)
* [sean:angular-service](#angularjs-service-sub-generator)
* [sean:angular-directive](#angularjs-directive-sub-generator)
* [sean:angular-filter](#angularjs-filter-sub-generator)
* [sean:angular-config](#angularjs-config-sub-generator)
* [sean:angular-test](#angularjs-test-sub-generator)
* [sean:express-model](#express-model-sub-generator)
* [sean:express-controller](#express-controller-sub-generator)
* [sean:express-route](#express-routes-sub-generator)
* [sean:express-test](#express-test-sub-generator)

**Note: Generators are to be run from the root directory of your app.**


## Application Generator

The application generator will help you create a fresh copy of a SEAN application in your working folder. To create your SEAN application, navigate to a new project folder, and then use *yo* to generate your application:


```
$ yo sean
```

The generator will ask you a few questions about your new application and will generate it for you. When the installation process is over, you will be able to use grunt to run your new SEAN application:


```
$ grunt
```

Now, the application generator does a great job scaffolding a whole application, but daily work requires us to repeat a lot of structured code. For this purpose we provided you with some sub-generators to help you speed up your development.



## CRUD Module Sub-Generator

The CRUD module sub-generator will help you create a new CRUD module, similar to the article sample provided with the project. To create a new CRUD module you will need to use *yo* again:


```
$ yo sean:crud-module <module-name>
```

This will create both AngularJS and Express files supporting full CRUD functionality, and add the Karma and Mocha tests.


**Note:** Don’t forget to use your module name as an argument when calling the CRUD module sub-generator.



## AngularJS Module Sub-Generator

Another redundant task is creating a new AngularJS module structure. For this purpose you can use the Angular module sub-generator. It will create the proper folder structure for you and the module initialization file. Creating a new AngularJS module is simple:


```
$ yo sean:angular-module <module-name>
```

The sub-generator will ask for more information about your folder structure, and will create the empty new AngularJS module. Now, to fill that new module with your business logic, we provided you with several AngularJS entities sub-generators.



## AngularJS Route Sub-Generator

To construct your module you will often need to create a new route. The AngularJS route sub-generator will help you create a view, controller and a proper route in your module **routes.js** file. If it can’t find the module routes file the sub-generator will create one for you. Creating a new AngularJS route will involve executing this command:



```
$ yo sean:angular-route <route-name>
```

The sub-generator will ask for more information about your controller, view and routing URL, and will generate the appropriate files for you.



## AngularJS Controller Sub-Generator

The AngularJS Controller sub-generator will create a new AngularJS controller in the specified module's **controllers** folder. To create a new AngularJS controller run *yo* again by using this command:


```
$ yo sean:angular-controller <controller-name>
```

The sub-generator will ask you for the module name under which you would like to create your new controller, and will create a new AngularJS controller file in that module **controllers** folder and a test file in the **tests** folder.


**Don’t forget!** This time you pass the controller name as an argument.



## AngularJS View Sub-Generator

Once you have your controller file ready, you may want to add a view that makes use of this controller. The AngularJS view sub-generator will create a new AngularJS view in thr specified module's **views** folder, and will allow you to add a route definition for it. To create a new AngularJS view you will need to execute this command:


```
$ yo sean:angular-view <view-name>
```

The sub-generator will ask you for the module name under which you would like to create your new view, and some additional routing information. It will then create a new view file in that module's **views** folder and add a routing state to the module **routes.js** file. If it can’t find the module routes file it will create one for you.



## AngularJS Service Sub-Generator

The AngularJS service sub-generator will create a new AngularJS service in the specified module's **services** folder. To create a new AngularJS service you will need to execute this command:


```
$ yo sean:angular-service <service-name>
```

The sub-generator will ask you for the module name under which you would like to create your new service, and will create a new AngularJS service file in that module's **services** folder.



## AngularJS Directive Sub-Generator

The AngularJS directive sub-generator will create a new AngularJS directive in the specified module's **directives** folder. Creating a new AngularJS directive should already look familiar:


```
$ yo sean:angular-directive <directive-name>
```

The sub-generator will ask you for the module name under which you would like to create your new directive, and will create a new AngularJS directive file in that module's **directives** folder.



## AngularJS Filter Sub-Generator

The AngularJS filter sub-generator will create a new AngularJS filter in a specified module's **filters** folder. To create a new AngularJS filter you need to call yo again:


```
$ yo sean:angular-filter <filter-name>
```

The sub-generator will ask you for the module name under which you would like to create your new filter, and will create a new AngularJS filter file in that module **filters** folder.



## AngularJS Config Sub-Generator

The AngularJS config sub-generator will create a new AngularJS config section in a specified module's **config** folder. To create a new AngularJS config file just call yo:


```
$ yo sean:angular-config <config-name>
```

The sub-generator will ask you for the module name under which you would like to create your new config, and will create a new AngularJS config file in that module's **config** folder.



## AngularJS Test Sub-Generator

Your SEAN application comes pre-bundled with the Karma test runner and Jasmine testing framework. To test your AngularJS controllers you’ll need to create a test file, which Karma will later use to run the tests. For this purpose we provided you with the AngularJS test sub-generator. Creating a new AngularJS test is effortless, just execute this command:


```
$ yo sean:angular-test <controller-name>
```

This will create a test file for your controller, and if the sub-generator doesn’t find the specified controller file, it will create one for you.


**Don’t forget!** You're suppose to pass the controller name as an argument.



## Express Model Sub-Generator

Often you will find the need to just create a single Express model. The Express model sub-generator will help you with creating an Express model in the **app/models** folder. To create a new model just use *yo*:


```
$ yo sean:express-model <model-name>
```

This will create a new empty model in the **app/models** folder and a test file in the **app/tests** folder.


**Note:** It is recommended you avoid naming your model in plural form and use a singular form instead. i.e article and not articles



## Express Controller Sub-Generator

Another recurring task is creating an empty Express controller. The Express controller sub-generator will help you with creating an Express controller in the **app/controllers** folder. To create a new controller just use *yo*:


```
$ yo sean:express-controller <controller-name>
```

This will create a new empty controller in the **app/controllers** folder.



## Express Routes Sub-Generator

To make HTTP requests to your controller methods you will need to use a routing file in the **app/routes** folder. The Express routes sub-generator will help you to add a new empty routes file. To create a new routes file execute this *yo* command:


```
$ yo sean:express-route <route-name>
```

This will create a new empty route file in the **app/routes** folder.


## Express Test Sub-Generator

Your SEAN application comes pre-bundled with the Mocha testing framework. To test your Express models you’ll need to create a new test file, which Mocha will use while running tests. For this purpose we provided you with the Express test sub-generator. Creating a new Express test is easy, just execute this command:


```
$ yo sean:express-test <model-name>
```

This will create a test file for your Express model, and if the sub-generator doesn’t find the specified model, it will create one for you.


**Don’t forget!** You're suppose to pass the model name as an argument.

## Next step

Improve test generation

## Contribution

You wish to contribute to this generate, no problem keep in touch and we will find ways :)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
