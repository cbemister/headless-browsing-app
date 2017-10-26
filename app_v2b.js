"use strict";

var desktop = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';
var mobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1';

var single = ['http://www.bmwcanbec.ca'];

var websiteURLs = {
	all: ['https://www.cambridgehyundai.com', 'http://www.calgaryhyundai.com', 'http://www.bridgesgm.com', 'http://www.bmwcanbec.ca', 'http://www.audiwinnipeg.com', 'http://www.airdriedodge.com', 'http://www.abbotsfordvw.com', 'http://www.417nissan.com', 'http://www.417infiniti.com', 'https://www.401dixiehyundai.com', 'https://www.fishcreeknissancalgary.ca', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'https://www.crowfoothyundai.com', 'http://www.crosstownautocentre.com', 'https://www.courtesymitsubishicalgary.com', 'https://www.courtesychrysler.com', 'http://www.chilliwackvw.com', 'http://www.capitaljeep.com', 'https://www.hyattinfiniticalgary.com', 'https://www.huntclubnissan.com', 'http://www.guelphhyundai.com', 'https://www.grovedodge.com', 'https://www.grandeprairievolkswagen.com', 'https://www.gpsubaru.com', 'https://www.gpnissan.ca', 'https://www.gpmitsubishi.com', 'https://www.gphyundai.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mcnaught.com', 'https://www.mapleridgevw.com', 'https://www.mannnorthway.ca', 'https://www.mapleridgechrysler.com', 'https://www.lexusonthepark.ca', 'https://www.lakewoodchev.com', 'https://www.toyotanorthwestedmonton.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 'https://www.sherwoodbuickgmc.com', 'https://www.scarboroughtoyota.ca', 'https://www.smpchev.ca', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.northlandnissan.com', 'https://www.northlanddodge.ca', 'https://www.northland-hyundai.ca', 'https://www.northedmontonkia.com', 'https://www.monctonchrysler.com', 'https://www.wellingtonmotors.com', 'https://www.victoriahyundai.com', 'https://www.toyotaonthepark.ca', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com', 'https://www.stjamesvw.com', 'https://www.southviewacura.com', 'https://www.sherwoodparkvw.com', 'https://www.sphyundai.com', 'https://www.sherwoodparkchev.com', 'http://www.whitbyoshawahonda.com'],
	hyundai: ['https://www.cambridgehyundai.com', 'http://www.calgaryhyundai.com', 'https://www.401dixiehyundai.com', 'https://www.crowfoothyundai.com', 'http://www.guelphhyundai.com', 'https://www.gphyundai.com', 'https://www.victoriahyundai.com', 'https://www.sphyundai.com', 'https://www.northland-hyundai.ca/'],
	gm: ['http://www.bridgesgm.com', 'https://www.mcnaught.com', 'https://www.mannnorthway.ca', 'https://www.lakewoodchev.com', 'https://www.kelownachev.com', 'https://www.islandgm.com', 'https://www.sherwoodbuickgmc.com', 'https://www.sherwoodparkchev.com', 'https://www.smpchev.ca'],
	luxury: ['http://www.bmwlaval.com', 'http://www.audiwinnipeg.com', 'http://www.417infiniti.com', 'https://www.hyattinfiniticalgary.com', 'https://www.lexusonthepark.ca', 'https://www.southviewacura.com'],
	chrysler: ['http://www.airdriedodge.com', 'http://www.easternchrysler.com', 'http://www.dodgecitymotorschrysler.com', 'http://www.ddodge.com', 'http://www.crosstownautocentre.com', 'https://www.courtesychrysler.com', 'http://www.capitaljeep.com', 'https://www.grovedodge.com', 'https://www.gpchrysler.com', 'https://www.monctonchrysler.com', 'https://www.mapleridgechrysler.com', 'https://www.ponokachrysler.com', 'https://www.okanagandodge.com', 'https://www.northlanddodge.ca', 'https://www.monctonchrysler.com', 'https://www.wellingtonmotors.com', 'https://www.towerchrysler.com', 'https://www.torontochrysler.com'],
	vw: ['http://www.abbotsfordvw.com', 'http://www.chilliwackvw.com', 'https://www.grandeprairievolkswagen.com', 'https://www.mapleridgevw.com', 'https://www.sherwoodparkvw.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.stjamesvw.com'],
	nissan: ['http://www.417nissan.com', 'https://www.fishcreeknissancalgary.ca', 'https://www.huntclubnissan.com', 'https://www.gpnissan.ca', 'https://www.northlandnissan.com']
};

var misc = ['https://www.courtesymitsubishicalgary.com', 'https://www.gpsubaru.com', 'https://www.gpmitsubishi.com', 'https://www.northedmontonkia.com', 'http://www.whitbyoshawahonda.com'];

var toyota = ['https://www.toyotanorthwestedmonton.com', 'https://www.scarboroughtoyota.ca', 'https://www.toyotaonthepark.ca']

var vwo1 = ['https://www.gpsubaru.com', 'https://www.northlandvolkswagencalgary.com', 'https://www.wellingtonmotors.com', 'http://www.bmwlaval.com', 'https://www.kelownachev.com', 'http://www.crosstownautocentre.com', 'https://www.mcnaught.com', 'https://www.okanagandodge.com', 'https://www.smpchev.ca', 'http://www.abbotsfordvw.com', 'http://www.calgaryhyundai.com', 'https://www.northlandnissan.com', 'https://www.mapleridgechrysler.com', 'https://www.hyattinfiniticalgary.com', 'https://www.lakewoodchev.com']

var vwo2 = ['https://www.fishcreeknissancalgary.ca', 'https://www.gpmitsubishi.com', 'https://www.northlanddodge.ca', 'https://www.toyotaonthepark.ca', 'https://www.sherwoodparkvw.com', 'http://www.audiwinnipeg.com', 'http://www.bridgesgm.com', 'https://www.victoriahyundai.com', 'http://www.airdriedodge.com', 'http://www.guelphhyundai.com', 'https://www.huntclubnissan.com', 'https://www.mannnorthway.ca', 'https://www.gphyundai.com', 'https://www.cambridgehyundai.com']

var vwo3 = ['http://www.easternchrysler.com', 'https://www.courtesymitsubishicalgary.com', 'http://www.417nissan.com', 'https://www.grovedodge.com', 'https://www.mapleridgevw.com', 'https://www.northland-hyundai.ca', 'https://www.grandeprairievolkswagen.com', 'https://www.gpnissan.ca', 'https://www.scarboroughtoyota.ca', 'http://www.dodgecitymotorschrysler.com', 'https://www.northedmontonkia.com', 'https://www.crowfoothyundai.com', 'http://www.ddodge.com', 'http://www.whitbyoshawahonda.com']

var vwo4 = ['https://www.sphyundai.com', 'http://www.capitaljeep.com', 'https://www.401dixiehyundai.com', 'https://www.lexusonthepark.ca', 'https://www.southviewacura.com', 'https://www.stjamesvw.com', 'https://www.torontochrysler.com', 'https://www.ponokachrysler.com', 'https://www.islandgm.com', 'https://www.monctonchrysler.com', 'https://www.gpchrysler.com', 'http://www.chilliwackvw.com', 'http://www.417infiniti.com', 'http://www.bmwcanbec.ca']




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