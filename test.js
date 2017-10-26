// JavaScript Document

var casper = require('casper').create();

casper.start();

casper.then(function(){
    phantom.injectJs('site.js');
    mysite = new site(casper);
    name = mysite.getName();
    this.echo(name);

});

casper.run();