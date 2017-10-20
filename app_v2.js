
var casper = require('casper').create();
var x = require('casper').selectXPath;
var fs = require('fs');

var desktop = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';
var mobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1';

var all = ['https://www.cambridgehyundai.com', 'http://www.calgaryhyundai.com', 'http://www.bridgesgm.com', 'http://www.bmwlaval.com', 'http://www.audiwinnipeg.com', 'http://www.airdriedodge.com', 'http://www.abbotsfordvw.com', 'http://www.417nissan.com', 'http://www.417infiniti.com', 'https://www.401dixiehyundai.com', 'https://www.fishcreeknissancalgary.ca', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'https://www.crowfoothyundai.com', 'http://www.crosstownautocentre.com', 'https://www.courtesymitsubishicalgary.com', 'https://www.courtesychrysler.com', 'http://www.chilliwackvw.com', 'http://www.capitaljeep.com', 'https://www.hyattinfiniticalgary.com', 'https://www.huntclubnissan.com', 'http://www.guelphhyundai.com', 'https://www.grovedodge.com', 'https://www.grandeprairievolkswagen.com', 'https://www.gpsubaru.com', 'https://www.gpnissan.ca', 'https://www.gpmitsubishi.com', 'https://www.gphyundai.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mcnaught.com', 'https://www.mapleridgevw.com', 'https://www.mannnorthway.ca', 'https://www.mapleridgechrysler.com', 'https://www.lexusonthepark.ca', 'https://www.lakewoodchev.com', 'https://www.toyotanorthwestedmonton.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 'https://www.sherwoodbuickgmc.com', 'https://www.scarboroughtoyota.ca', 'https://www.smpchev.ca', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.northlandnissan.com', 'https://www.northlanddodge.ca', 'https://www.northedmontonkia.com', 'https://www.monctonchrysler.com', 'https://www.wellingtonmotors.com', 'https://www.victoriahyundai.com', 'https://www.toyotaonthepark.ca', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com', 'https://www.stjamesvw.com', 'https://www.southviewacura.com', 'https://www.sherwoodparkvw.com', 'https://www.sphyundai.com', 'https://www.sherwoodparkchev.com', 'http://www.whitbyoshawahonda.com'];

var hyundai = ['https://www.cambridgehyundai.com','http://www.calgaryhyundai.com', 'https://www.401dixiehyundai.com', 'https://www.crowfoothyundai.com', 'http://www.guelphhyundai.com', 	'https://www.gphyundai.com', 'https://www.victoriahyundai.com',	'https://www.sphyundai.com'];

var gm = ['http://www.bridgesgm.com', 'https://www.mcnaught.com', 'https://www.mannnorthway.ca', 'https://www.lakewoodchev.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 	'https://www.sherwoodbuickgmc.com', 'https://www.sherwoodparkchev.com', 'https://www.smpchev.ca'];

var luxury = ['http://www.bmwlaval.com', 'http://www.audiwinnipeg.com', 'http://www.417infiniti.com', 'https://www.hyattinfiniticalgary.com', 'https://www.lexusonthepark.ca', 'https://www.southviewacura.com'];

var chrysler = ['http://www.airdriedodge.com', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'http://www.crosstownautocentre.com', 	'https://www.courtesychrysler.com', 'http://www.capitaljeep.com', 'https://www.grovedodge.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mapleridgechrysler.com', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlanddodge.ca', 'https://www.monctonchrysler.com', 	'https://www.wellingtonmotors.com', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com'];

var vw = ['http://www.abbotsfordvw.com', 'http://www.chilliwackvw.com', 'https://www.grandeprairievolkswagen.com', 'https://www.mapleridgevw.com', 'https://www.sherwoodparkvw.com', 	'https://www.northlandvolkswagencalgary.com', 'https://www.stjamesvw.com'];

var nissan = ['http://www.417nissan.com', 'https://www.fishcreeknissancalgary.ca', 'https://www.huntclubnissan.com', 'https://www.gpnissan.ca', 'https://www.northlandnissan.com'];

var misc = ['https://www.courtesymitsubishicalgary.com', 'https://www.gpsubaru.com', 'https://www.gpmitsubishi.com', 'https://www.northedmontonkia.com', 'http://www.whitbyoshawahonda.com'];

var toyota = ['https://www.toyotanorthwestedmonton.com', 'https://www.scarboroughtoyota.ca', 'https://www.toyotaonthepark.ca']

var vwo1 =  ['Grande Prairie Subaru', 'Northland Volkswagen', 'Wellington Motors', 'BMW Laval', 'Kelowna Chevrolet', 'Crosstown Auto Centre', 'McNaught Cadillac Buick GMC', 'Okanagan Chrysler Jeep Dodge', 'Saskatoon Motor Products', 'Abbotsford Volkswagen', 'Calgary Hyundai', 'Northland Nissan', 'Maple Ridge Chrysler Jeep Dodge', 'Hyatt Infiniti', 'Lakewood Chevrolet']

var vwo2 = ['Fish Creek Nissan', 'Grande Prairie Mitsubishi', 'Northland Chrysler Jeep Dodge', 'Toyota On The Park', 'Sherwood Park Volkswagen', 'Audi Winnipeg', 'Bridges Chevrolet Buick GMC', 'Victoria Hyundai', 'Airdrie Chrysler Dodge Jeep', 'Guelph Hyundai', 'Hunt Club Nissan', 'Mann-Northway Auto Source', 'Grande Prairie Hyundai', 'Cambridge Hyundai']
	
var vwo3 = ['Eastern Chrysler Dodge Jeep', 'Courtesy Mitsubishi', '417 Nissan', 'Grove Dodge Chrysler Jeep', 'Maple Ridge Volkswagen', 'Northland Hyundai', 'Grande Prairie Volkswagen', 'Grande Prairie Nissan', 'Scarborough Toyota', 'Dodge City Auto', 'North Edmonton Kia', 'Crowfoot Hyundai', 'Dartmouth Chrysler Jeep Dodge', 'Whitby Oshawa Honda']
	
var vwo4 = ['Sherwood Park Hyundai', 'Capital Chrysler Jeep Dodge Ram Fiat', '401 Dixie Hyundai', 'LEXUS ON THE PARK', 'Southview Acura', 'St. James Volkswagen', 'Toronto Chrysler', 'Ponoka Chrysler Jeep Dodge', 'Island GM', 'Moncton Chrysler Jeep Dodge', 'Grande Prairie Chrysler Dodge Jeep Ram Fiat', 'Chilliwack Volkswagen', '417 Infiniti', 'BMW Canbec']


// ================================================ //

casper.userAgent(mobile); //Set browser ie. desktop or mobile

var links = vw; //Set link group ie. all / vwo1 / chrysler

var path = "/promo/national-offers.htm"; //set target page 

// ================================================ //

casper.start();


var i = 0;

// ================ SINGLE Static PAGE  ================ //

//casper.each(links, function(self, link) {
//		
//	
//    self.thenOpen(link + path, function() {
//		
//					var dealership = this.page.evaluate(function() {
//                        return window.DDC.dataLayer.dealership.dealershipName;
//                });
//		
//		 		var name = dealership.split(" ").join("-");
//		
//				var page = path.split("/").join("-");
//		
//				console.log(page);
//		
//        i++;
//
//        // Output to console on the current page's title
//        this.echo(i + ' : ' + this.getTitle() + " @ " + link);
//
//        // Dump screenshots to directory 'shots'
//        casper.wait(1000, function() {
//    		this.capture('shots/' + name + page + '.jpg');
//			});
//		
//		
//		
//		
//	
//    });
//	
//});
//
//casper.run();



// ================ SINGLE Dynamic PAGE  ================ //

casper.each(links, function(self, link) {
		
	
    self.thenOpen(link + path, function() {
		
					var dealership = this.page.evaluate(function() {
                        return window.DDC.dataLayer.dealership.dealershipName;
                });
		
		 		var name = dealership.split(" ").join("-");
		
				var page = path.split("/").join("-");
		
				console.log(page);
		
        i++;

        // Output to console on the current page's title
        this.echo(i + ' : ' + this.getTitle() + " @ " + link);

        // Dump screenshots to directory 'shots'
        casper.wait(1000, function() {
    		this.capture('shots/' + name + page + '.jpg');
			});
		
		
		
		
	
    });
	
});

casper.run();




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