"use strict";

var casper = require('casper').create();
var x = require('casper').selectXPath;
var fs = require('fs');

var desktop = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';
var mobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1';

var single = ['https://www.northland-hyundai.ca/'];


var all = ['https://www.cambridgehyundai.com', 'http://www.calgaryhyundai.com', 'http://www.bridgesgm.com', 'http://www.bmwcanbec.ca', 'http://www.audiwinnipeg.com', 'http://www.airdriedodge.com', 'http://www.abbotsfordvw.com', 'http://www.417nissan.com', 'http://www.417infiniti.com', 'https://www.401dixiehyundai.com', 'https://www.fishcreeknissancalgary.ca', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'https://www.crowfoothyundai.com', 'http://www.crosstownautocentre.com', 'https://www.courtesymitsubishicalgary.com', 'https://www.courtesychrysler.com', 'http://www.chilliwackvw.com', 'http://www.capitaljeep.com', 'https://www.hyattinfiniticalgary.com', 'https://www.huntclubnissan.com', 'http://www.guelphhyundai.com', 'https://www.grovedodge.com', 'https://www.grandeprairievolkswagen.com', 'https://www.gpsubaru.com', 'https://www.gpnissan.ca', 'https://www.gpmitsubishi.com', 'https://www.gphyundai.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mcnaught.com', 'https://www.mapleridgevw.com', 'https://www.mannnorthway.ca', 'https://www.mapleridgechrysler.com', 'https://www.lexusonthepark.ca', 'https://www.lakewoodchev.com', 'https://www.toyotanorthwestedmonton.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 'https://www.sherwoodbuickgmc.com', 'https://www.scarboroughtoyota.ca', 'https://www.smpchev.ca', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.northlandnissan.com', 'https://www.northlanddodge.ca', 'https://www.northland-hyundai.ca', 'https://www.northedmontonkia.com', 'https://www.monctonchrysler.com', 'https://www.wellingtonmotors.com', 'https://www.victoriahyundai.com', 'https://www.toyotaonthepark.ca', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com', 'https://www.stjamesvw.com', 'https://www.southviewacura.com', 'https://www.sherwoodparkvw.com', 'https://www.sphyundai.com', 'https://www.sherwoodparkchev.com', 'http://www.whitbyoshawahonda.com'];

var hyundai = ['https://www.cambridgehyundai.com', 'http://www.calgaryhyundai.com', 'https://www.401dixiehyundai.com', 'https://www.crowfoothyundai.com', 'http://www.guelphhyundai.com', 'https://www.gphyundai.com', 'https://www.victoriahyundai.com', 'https://www.sphyundai.com', 'https://www.northland-hyundai.ca/'];

var gm = ['http://www.bridgesgm.com', 'https://www.mcnaught.com', 'https://www.mannnorthway.ca', 'https://www.lakewoodchev.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 'https://www.sherwoodbuickgmc.com', 'https://www.sherwoodparkchev.com', 'https://www.smpchev.ca'];

var luxury = ['http://www.bmwlaval.com', 'http://www.audiwinnipeg.com', 'http://www.417infiniti.com', 'https://www.hyattinfiniticalgary.com', 'https://www.lexusonthepark.ca', 'https://www.southviewacura.com'];

var chrysler = ['http://www.airdriedodge.com', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'http://www.crosstownautocentre.com', 'https://www.courtesychrysler.com', 'http://www.capitaljeep.com', 'https://www.grovedodge.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mapleridgechrysler.com', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlanddodge.ca', 'https://www.monctonchrysler.com', 'https://www.wellingtonmotors.com', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com'];

var vw = ['http://www.abbotsfordvw.com', 'http://www.chilliwackvw.com', 'https://www.grandeprairievolkswagen.com', 'https://www.mapleridgevw.com', 'https://www.sherwoodparkvw.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.stjamesvw.com'];

var nissan = ['http://www.417nissan.com', 'https://www.fishcreeknissancalgary.ca', 'https://www.huntclubnissan.com', 'https://www.gpnissan.ca', 'https://www.northlandnissan.com'];

var misc = ['https://www.courtesymitsubishicalgary.com', 'https://www.gpsubaru.com', 'https://www.gpmitsubishi.com', 'https://www.northedmontonkia.com', 'http://www.whitbyoshawahonda.com'];

var toyota = ['https://www.toyotanorthwestedmonton.com', 'https://www.scarboroughtoyota.ca', 'https://www.toyotaonthepark.ca']

var vwo1 = ['https://www.gpsubaru.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.wellingtonmotors.com', 'http://www.bmwlaval.com', 'https://www.kelownachev.com', 'http://www.crosstownautocentre.com', 'https://www.mcnaught.com', 'https://www.okanagandodge.com', 'https://www.smpchev.ca', 'http://www.abbotsfordvw.com', 'http://www.calgaryhyundai.com', 'https://www.northlandnissan.com', 'https://www.mapleridgechrysler.com', 'https://www.hyattinfiniticalgary.com', 'https://www.lakewoodchev.com']

var vwo2 = ['https://www.fishcreeknissancalgary.ca', 'https://www.gpmitsubishi.com', 'https://www.northlanddodge.ca', 'https://www.toyotaonthepark.ca', 'https://www.sherwoodparkvw.com', 'http://www.audiwinnipeg.com', 'http://www.bridgesgm.com', 'https://www.victoriahyundai.com', 'http://www.airdriedodge.com', 'http://www.guelphhyundai.com', 'https://www.huntclubnissan.com', 'https://www.mannnorthway.ca', 'https://www.gphyundai.com', 'https://www.cambridgehyundai.com']

var vwo3 = ['http://www.easternchrysler.com', 'https://www.courtesymitsubishicalgary.com', 'http://www.417nissan.com', 'https://www.grovedodge.com', 'https://www.mapleridgevw.com', 'https://www.northland-hyundai.ca', 'https://www.grandeprairievolkswagen.com', 'https://www.gpnissan.ca', 'https://www.scarboroughtoyota.ca', 'http://www.dodgecitymotorschrysler.com', 'https://www.northedmontonkia.com', 'https://www.crowfoothyundai.com', 'http://www.ddodge.com', 'http://www.whitbyoshawahonda.com']

var vwo4 = ['https://www.sphyundai.com', 'http://www.capitaljeep.com', 'https://www.401dixiehyundai.com', 'https://www.lexusonthepark.ca', 'https://www.southviewacura.com', 'https://www.stjamesvw.com', 'https://www.torontochrysler.com', 'https://www.ponokachrysler.com', 'https://www.islandgm.com', 'https://www.monctonchrysler.com', 'https://www.gpchrysler.com', 'http://www.chilliwackvw.com', 'http://www.417infiniti.com', 'http://www.bmwcanbec.ca']


// ================================================ //

casper.userAgent(mobile); //Set browser ie. desktop or mobile

var links = single; //Set link group ie. all / vwo1 / chrysler

var path = '/new-inventory/index.htm'; //set target page

var pageName = '_new-vdp'

var pageType = 'dynamic'; //static || dynamic 

var clickElement = 'div[data-index-position="1"]'; //REQUIRED if dynamic


// ================================================ //

casper.start();


var i = 0;


if (pageType === 'static') {
	

// ================ SINGLE Static PAGE  ================ //

casper.each(links, function(self, link) {
		
	
    self.thenOpen(link + path, function() {
		
					var dealership = this.page.evaluate(function() {
                        return window.DDC.dataLayer.dealership.dealershipName;
                });
		
		 		var dealershipName = dealership.split(" ").join("-");
		
        i++;

        // Output to console on the current page's title
        this.echo(i + ' : ' + this.getTitle() + " @ " + link);

        // Dump screenshots to directory 'shots'
        casper.wait(1000, function() {
    		this.capture('shots/' + dealershipName + pageName + '.jpg');
			});
	
    });
	
});

casper.run();
	
} else {
	
	

// ================ SINGLE Dynamic PAGE  ================ //

casper.each(links, function (self, link) {


	self.thenOpen(link + path, function () {

		var dealership = this.page.evaluate(function () {
			return window.DDC.dataLayer.dealership.dealershipName;
		});

		var dealershipName = dealership.split(" ").join("-");

		//console.log(page);

		i++;

		//this.wait(2000, function () {

			this.thenClick(clickElement, function () {


				var pagePath = this.page.evaluate(function () {
					return window.DDC.dataLayer.page.pageInfo.pagePath;
				});


				this.wait(1000, function () {

					// // Output to console on the current page's title
					this.echo(i + ' : ' + this.getTitle() + " @ " + link);

					// // Dump screenshots to directory 'shots'
					this.capture('shots/' + dealershipName + pageName + '.jpg');
				});

			});

		//});

	});

});

casper.run();
	
}




//var links = [
//    'http://google.com/',
//    'http://yahoo.com/',
//    'http://bing.com/'
//];
//
//casper.start().each(links, function(self, link) {
//    self.thenOpen(link, function() {
//        this.echo(this.getTitle());
//    });
//});
//
//casper.run();