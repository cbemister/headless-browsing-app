// JavaScript Document

var casper = require('casper').create();
var x = require('casper').selectXPath;
var fs = require('fs');
var webPage = require('webpage');
var page = webPage.create();

page.includeJs('app_v2b.js');//, function() {
	
	  console.log(single);

//	// ================================================ //
//
//	casper.userAgent(mobile); //Set browser ie. desktop or mobile
//
//	var links = websiteURLs.vw; //Set link group ie. all / vwo1 / chrysler
//
//	var path = '/used-inventory/index.htm'; //set target page
//
//	var pageName = '_used-vdp'
//
//	var pageType = 'dynamic'; //static || dynamic 
//
//	var clickElement = 'div[data-index-position="1"]'; //REQUIRED if dynamic
//
//
//	// ================================================ //
//
//	casper.start();
//	
//
//var i = 0;
//
//
//if (pageType === 'static') {
//	
//
//// ================ SINGLE Static PAGE  ================ //
//
//casper.each(links, function(self, link) {
//		
//	
//    self.thenOpen(link + path, function() {
//		
//					var dealership = this.page.evaluate(function() {
//                        return window.DDC.dataLayer.dealership.dealershipName;
//                });
//		
//		 		var dealershipName = dealership.split(" ").join("-");
//		
//        i++;
//
//        // Output to console on the current page's title
//        this.echo(i + ' : ' + this.getTitle() + " @ " + link);
//
//        // Dump screenshots to directory 'shots'
//        casper.wait(1000, function() {
//    		this.capture('shots/' + dealershipName + pageName + '.jpg');
//			});
//	
//    });
//	
//});
//
//casper.run();
//	
//} else {
//	
//	
//
//// ================ SINGLE Dynamic PAGE  ================ //
//
//casper.each(links, function (self, link) {
//
//
//	self.thenOpen(link + path, function () {
//
//		var dealership = this.page.evaluate(function () {
//			return window.DDC.dataLayer.dealership.dealershipName;
//		});
//
//		var dealershipName = dealership.split(" ").join("-");
//
//		//console.log(page);
//
//		i++;
//
//		//this.wait(2000, function () {
//
//			this.thenClick(clickElement, function () {
//
//
//				var pagePath = this.page.evaluate(function () {
//					return window.DDC.dataLayer.page.pageInfo.pagePath;
//				});
//
//
//				this.wait(1000, function () {
//
//					// // Output to console on the current page's title
//					this.echo(i + ' : ' + this.getTitle() + " @ " + link);
//
//					// // Dump screenshots to directory 'shots'
//					this.capture('shots/' + dealershipName + pageName + '.jpg');
//				});
//
//			});
//
//		//});
//
//	});
//
//});
//
//casper.run();
//	
//}

	

//});
