//start cameroon effect
var imagesCameroon = [
    "assets/images/cameroon/map-01.jpg",
    "assets/images/cameroon/map-02.jpg"
];

var controller;

$(function() {
    controller = new ScrollMagic.Controller();
    // hide svg
    var targets = [$('#bertoua-text'), $('#abong-text'),$('#mindourou-text'), $('#lomie-text'),$('#djoum-text'),$('#arrow1'), $('#arrow2'),$('#marker-douala'), $('#marker-yaounde'),$('#yaounde-text'), $('#douala-text'),$('#marker-rantau'),$('#marker-rantau-2'),$('#arrow-31'), $('#arrow-32'),$('#arrow-33'), $('#arrow-34'),$('#arrow-35'),$('#marker-rantau-3-1'),$('#marker-rantau-3-2'), $('#yairport-text'), $('#dairport-text')]
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
    //untuk pin foto 1
    var pinFotoCameroon = new ScrollMagic.Scene({triggerElement: '#scene-cameroon',triggerHook: '0.08',duration: '300%',})
    .setPin('#pin-cameroon', {pushFollowers: false})
    .addTo(controller)
    
    //efek map pertama
    var sceneCameroon1 = new ScrollMagic.Scene({triggerElement: '#scene-cameroon',duration: '100%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
        new TimelineMax()
            .add(TweenMax.to($('#bertoua-text'), 0.25, {opacity: 1, ease:Linear.easeNone}))
            .add(TweenMax.to($('#abong-text'), 0.25, {opacity: 1, ease:Linear.easeNone}))
            .add(TweenMax.to($('#mindourou-text'), 0.25, {opacity: 1, ease:Linear.easeNone}))
            .add(TweenMax.to($('#lomie-text'), 0.25, {opacity: 1, ease:Linear.easeNone}))
            .add(TweenMax.to($('#djoum-text'), 0.25, {opacity: 1, ease:Linear.easeNone}))
        )
        .on('leave', () => {
        var targets = [$('#bertoua-text'), $('#abong-text'),$('#mindourou-text'), $('#lomie-text'),$('#djoum-text')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
        })
        .addTo(controller)
        
        // efek map kedua
        var sceneCameroon2 = new ScrollMagic.Scene({ triggerElement: '#tweenCameroon-1', triggerHook:'0.08', duration: '100%',reverse: true})
        .on('enter', () =>
            new TimelineMax()
                    .add(TweenMax.to($('#arrow1'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .add(TweenMax.to($('#marker-douala'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .add(TweenMax.to($('#douala-text'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .add(TweenMax.to($('#arrow2'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .add(TweenMax.to($('#marker-yaounde'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .add(TweenMax.to($('#yaounde-text'), 0.5, {opacity: 1, ease:Linear.easeNone}))
                    .addCallback(()=>{
                        TweenMax.fromTo($('#marker-rantau'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
                        TweenMax.fromTo($('#marker-rantau-2'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
                    }, 0.7)
        )
        .on('leave', () => {
        var targets = [$('#arrow1'), $('#arrow2'),$('#marker-douala'), $('#marker-yaounde'),$('#yaounde-text'), $('#douala-text'),$('#marker-rantau'),$('#marker-rantau-2')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
        })
        .addTo(controller)
        ;

    //untuk ganti foto
	var objCameroon = {curImg: 0};
	var gantiFotoCameroon = TweenMax.to(objCameroon, 0.5,
		{
			curImg: imagesCameroon.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#media-cameroon").attr("src", imagesCameroon[objCameroon.curImg]); // set the image source
			}
		}
	);
    // efek map ketiga
    var sceneCameroon3 = new ScrollMagic.Scene({triggerElement: '#tweenCameroon-2',triggerHook: '0.08',})
        .setTween(gantiFotoCameroon)
        .addTo(controller)
        
    // efek map keempat
    var sceneCameroon4 = new ScrollMagic.Scene({ triggerElement: '#tweenCameroon-2', triggerHook:'0.08', duration: '100%', reverse: true})
    .on('enter', () => {
        new TimelineMax()
        .add(TweenMax.to($('#arrow-31'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#arrow-32'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#arrow-33'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#arrow-34'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#arrow-35'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#yairport-text'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .add(TweenMax.to($('#dairport-text'), 0.5, {opacity: 1, ease:Linear.easeNone}))
        .addCallback(()=>{
            TweenMax.fromTo($('#marker-rantau-3-1'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
            TweenMax.fromTo($('#marker-rantau-3-2'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
        }, 0.7)
    })
    .on('leave', () => {
        var targets = [$('#arrow-31'), $('#arrow-32'), $('#arrow-33'), $('#arrow-34'), $('#arrow-35'),$('#marker-rantau-3-1'), $('#marker-rantau-3-2'), $('#yairport-text'), $('#dairport-text')]
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
    })
    .addTo(controller);
});
//end cameroon effect

// start malaysia effect
function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $highway = $("polyline#highway-line");

// prepare SVG
pathPrepare($highway);

visiable_opt = {opacity: 1, ease:Linear.easeNone},
hidden_opt = {opacity: 0, ease:Linear.easeNone}
 // untuk hide svg
 var targets = [$('#arrows'), $('#melaka-label'),$('#forest-fill'), $('#forest-label'), $('#marker-bukit'), $('#marker-padang'), $('#marker-padang-2'), $('#bukit-text'), $('#padang-text'), $('#rantau-text')]
 TweenMax.killTweensOf(targets)
 TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})

$(function() {
    //untuk pin foto
    var pinFotoMalaysia = new ScrollMagic.Scene({triggerElement: '#scene-malaysia',triggerHook: '0.08',duration: '300%',})
    .setPin('#pin-malaysia', {pushFollowers: false})
    .addTo(controller)
    
    // efek map pertama
    var sceneMalaysia1 = new ScrollMagic.Scene({triggerElement: '#scene-malaysia',duration: '100%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#arrows'), 0.5, visiable_opt))
            .add(TweenMax.to($('#melaka-label'), 0.5, visiable_opt))
        )
        .on('leave', () => {
            var targets = [$('#arrows'), $('#melaka-label')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
    // efek map kedua
    var sceneMalaysia2 = new ScrollMagic.Scene({triggerElement: '#tweenMalaysia-1',duration: '100%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#forest-fill'), 0.5, visiable_opt))
            .add(TweenMax.to($('#forest-label'), 0.5, visiable_opt))
        )
        .on('leave', () => {
            var targets = [$('#forest-fill'), $('#forest-label')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
    // efek map ketiga
    var sceneMalaysia3 = new ScrollMagic.Scene({triggerElement: '#tweenMalaysia-2',duration: '100%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
                .add(TweenMax.to($highway, 0.9, {strokeDashoffset: 1699, ease:Linear.easeNone}))
                .add(TweenMax.to([
                    $('#bukit-text'), $('#marker-bukit')
                    ], 0, visiable_opt), 0.7)
                .add(TweenMax.to([
                    $('#marker-padang-2'), $('#marker-padang'), $('#padang-text'), $('#rantau-text')
                    ], 0, visiable_opt), 0.8)
                .addCallback(()=>{
                        TweenMax.fromTo($('#marker-bukit'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
                        TweenMax.fromTo($('#marker-padang'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
                        TweenMax.fromTo($('#marker-padang-2'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
                    }, 0.7)
        )
        .on('leave', () => {
            var targets = [ $('#marker-bukit'), $('#marker-padang'), $('#marker-padang-2'), $('#bukit-text'), $('#padang-text'), $('#rantau-text')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
            new TimelineMax().add(TweenMax.to($highway, 0.1, {strokeDashoffset: 900, ease:Linear.easeNone}))
        })
        .addTo(controller)
        
})
//end malaysia effect

// start thailand effect
$(function() {
    var targets = [$('#marker-bukitTHA'),$('#marker-sadaoTHA'), $('#marker-alorTHA'), $('#marker-policeTHA'),$('#bukit-textTHA'), $('#alor-textTHB'),$('#sadao-textTHC'),$('#kedahpolice-textTHD')]
    TweenMax.killTweensOf(targets)
    TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
    //untuk pin foto
    var pinFotoThailand = new ScrollMagic.Scene({triggerElement: '#scene-thailand',triggerHook: '0.08',duration: '400%',})
    .setPin('#pin-thailand', {pushFollowers: false})
    .addTo(controller)
    

    // efek map pertama
    var sceneThailand1 = new ScrollMagic.Scene({triggerElement: '#scene-thailand',duration: '400%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#bukit-textTHA'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-bukitTHA'), 0.5, visiable_opt))
            .addCallback(()=>{
                TweenMax.fromTo($('#marker-bukitTHA'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
            }, 0.7)
        )
        .on('leave', () => {
            var targets = [$('#bukit-textTHA'), $('#marker-bukitTHA'),]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        

    // efek map kedua
    var sceneThailand2 = new ScrollMagic.Scene({triggerElement: '#tweenThailand-1',duration: '300%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#alor-textTHB'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-alorTHA'), 0.5, visiable_opt))
            .addCallback(()=>{
                TweenMax.fromTo($('#marker-alorTHA'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
            }, 0.7)
        )
        .on('leave', () => {
            var targets = [$('#alor-textTHB'), $('#marker-alorTHA'),]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        

    // efek map ketiga
    var sceneThailand3 = new ScrollMagic.Scene({triggerElement: '#tweenThailand-2',duration: '200%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#sadao-textTHC'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-sadaoTHA'), 0.5, visiable_opt))
            .addCallback(()=>{
                TweenMax.fromTo($('#marker-sadaoTHA'), 1, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
            }, 0.7)
        )
        .on('leave', () => {
            var targets = [$('#sadao-textTHC'), $('#marker-sadaoTHA'),]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
    
    // efek map keempat
    var sceneThailand4 = new ScrollMagic.Scene({triggerElement: '#tweenThailand-3',duration: '100%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>
            new TimelineMax()
            .add(TweenMax.to($('#kedahpolice-textTHD'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-policeTHA'), 0.5, visiable_opt))
            .addCallback(()=>{
                TweenMax.fromTo($('#marker-policeTHA'), 0.5, {attr:{r: 200}, opacity: 1}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
            }, 0.7)
        )
        .on('leave', () => {
            var targets = [$('#kedahpolice-textTHD'), $('#marker-policeTHA'),]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
})
// end thailand effect
// start nepal effect
$(function() {
    var $line_istanbul = $("path#istanbul-line");
    var $ndjili_line = $("path#ndjili-line");

    // prepare SVG
    pathPrepare($line_istanbul);
    pathPrepare($ndjili_line);
    var targets = [$('#marker-tribhuvanNP'),$('#marker-istanbulNP'),$('#marker-ndjiliNP'),$('#istanbul-textNP'),$('#tribhuvan-textNP'),$('#n_djili-textNP'),$('#ndjili-lineNP'),$('#istanbul-lineNP')]
    TweenMax.killTweensOf(targets)
    TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
    //untuk pin foto
    var pinFotoNepal = new ScrollMagic.Scene({triggerElement: '#scene-nepal',triggerHook: '0.08',duration: '300%',})
        .setPin('#scene-nepal')
        .addTo(controller)

    // efek map pertama
    var sceneNepal1 = new ScrollMagic.Scene({triggerElement: '#scene-nepal',duration: '300%',triggerHook: '0.08',reverse: true})
        .setTween(
            new TimelineMax()
            .add(TweenMax.to($('#marker-ndjiliNP'), 0.5, visiable_opt))
            .add(TweenMax.to($('#n_djili-textNP'), 0.5, visiable_opt))
            .add(TweenMax.to($ndjili_line, 1, {strokeDashoffset: 0, ease:Power2.easeOut}))
            .add(TweenMax.to($('#ndjili-lineNP'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-istanbulNP'), 0.5, visiable_opt))
            .add(TweenMax.to($('#istanbul-textNP'), 0.5, visiable_opt))
            .add(TweenMax.to($line_istanbul, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($('#istanbul-lineNP'), 0.5, visiable_opt))
            .add(TweenMax.to($('#marker-tribhuvanNP'), 0.5, visiable_opt))
            .add(TweenMax.to($('#tribhuvan-textNP'), 0.1, visiable_opt))
        )
        .addTo(controller)

})
// end nepal effect
// start vietnam effect
var imagesVietnam = [
    "assets/images/vietnam/map-01.jpg",
    "assets/images/vietnam/map-02.jpg"
];
$(function() {
    var targets = [$('#marker-mongVTA'),$('#marker-cauVTA'), $('#cau-textVTA'), $('#legendVTA'), $('#circles'), $('#legend-2')]
    TweenMax.killTweensOf(targets)
    TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})

    var $line_mongcai = $("path#mongcai-lineVTA");

    // prepare SVG
    pathPrepare($line_mongcai);
    //untuk pin
    var pinFotoVietnam = new ScrollMagic.Scene({triggerElement: '#scene-vietnam',triggerHook: '0.08',duration: '200%',})
    .setPin('#pin-vietnam', {pushFollowers: false})
    .addTo(controller)
    

    // efek map pertama
    var sceneVietnam1 = new ScrollMagic.Scene({triggerElement: '#scene-vietnam',duration: (pinFotoVietnam.duration())-(pinFotoVietnam.duration()/2),triggerHook: '0.08',reverse: true})
        .on('enter', () =>{
            new TimelineMax()
                .add(TweenMax.to($('#marker-cauVTA'), 0.2, visiable_opt))
                .add(TweenMax.to($('#cau-textVTA'), 0.2, visiable_opt))
                .add(TweenMax.to($line_mongcai, 0.5, {strokeDashoffset: 1803, ease:Power1.easeOut}))
                .add(TweenMax.to($('#marker-mongVTA'), 0.2, visiable_opt))
                .add(TweenMax.to($('#legendVTA'), 0.2, visiable_opt))
                .add(TweenMax.to($('#legend-2'), 0.5, visiable_opt))
                .add(TweenMax.to($('#circles'), 0.5, visiable_opt))
        })
        .on('leave', () => {
            var targets = [$('#marker-mongVTA'),$('#marker-cauVTA'), $('#cau-textVTA'), $('#legendVTA'),$('#circles'),$('#legend-2')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
            TweenMax.to($line_mongcai, 0.1, {strokeDashoffset: 900, ease:Power1.easeOut})
        })
        .addTo(controller)
        
    //untuk ganti foto
	var objVietnam = {curImg: 0};
	var gantiFotoVietnam = TweenMax.to(objVietnam, 0.5,
		{
			curImg: imagesVietnam.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#media-vietnam").attr("src", imagesVietnam[objVietnam.curImg]); // set the image source
			}
		}
	);
    // efek map kedua
    var sceneVietnam2 = new ScrollMagic.Scene({triggerElement: '#tweenVietnam-1',triggerHook: '0.08'})
        .setTween(gantiFotoVietnam)
        .on('enter', () =>{
            new TimelineMax().add(TweenMax.to($line_mongcai, 0.5, hidden_opt))
        })
        .on('leave', () => {
            new TimelineMax().add(TweenMax.to($line_mongcai, 0.1, visiable_opt))
        })
        .addTo(controller)
        
})
// end vietnam effect
// end hongkong effect
var imagesHongkong = [
    "assets/images/hongkong/map-01.jpg",
    "assets/images/hongkong/map-02.jpg"
];
$(function() {
    var targets = [$('#marker-casablancaHKA'),$('#marker-hamadHKA'), $('#marker-ndjiliHKA'), $('#marker-HKHKA'), $('#n_djili-textHKA'), $('#hamad-textHKA'),$('#HK-textHKA'),$('#casablanca-textHKA'),$('#ndjili-lineHKA'),$('#hamad-lineHKA'),$('#casablanca-lineHKA'),$('#marker-HKHKB'), $('#hk-lineHKB'), $('#HK-textHKB'), $('#macau-lineHKC'), $('#ndjili-textHKC'), $('#marker-HK-2')]
    TweenMax.killTweensOf(targets)
    TweenMax.to(targets, 0.5, {opacity: 0, ease:Linear.easeNone})
    //untuk pin
    var pinHongkong = new ScrollMagic.Scene({triggerElement: '#scene-hongkong',triggerHook: '0.08',duration: '500%',})
    .setPin('#pin-hongkong', {pushFollowers: false})
    .addTo(controller)
    
    //untuk pin deskripsi
    var pinDeskripsi = new ScrollMagic.Scene({triggerElement: '#tweenHongkong-1',triggerHook: '0.08',duration: '100%',})
    .setPin('#tweenHongkong-1')
    .addTo(controller)
    
    // efek map pertama
    var sceneHongkong1 = new ScrollMagic.Scene({triggerElement: '#scene-hongkong',duration: '290%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>{
            new TimelineMax()
                .add(TweenMax.to($('#marker-ndjiliHKA'), 0.2, visiable_opt))
                .add(TweenMax.to($('#n_djili-textHKA'), 0.5, visiable_opt))
                .add(TweenMax.to($('#ndjili-lineHKA'), 0.1, visiable_opt))
                .add(TweenMax.to($('#marker-casablancaHKA'), 0.5, visiable_opt))
                .add(TweenMax.to($('#casablanca-textHKA'), 0.5, visiable_opt))
        })
        .on('leave', () => {
            var targets = [$('#marker-casablancaHKA'), $('#marker-ndjiliHKA'), $('#n_djili-textHKA'),$('#casablanca-textHKA'),$('#ndjili-lineHKA')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
            TweenMax.to($line_mongcai, 0.1, {strokeDashoffset: 900, ease:Power1.easeOut})
        })
        .addTo(controller)
        
    // efek map kedua
    var sceneHongkong2 = new ScrollMagic.Scene({triggerElement: '#tweenHongkong-1',duration:'200%',triggerHook: '0.08',reverse: true})
        .on('enter', () =>{
            new TimelineMax()
                .add(TweenMax.to($('#casablanca-lineHKA'), 0.2, visiable_opt))
                .add(TweenMax.to($('#marker-hamadHKA'), 0.5, visiable_opt))
                .add(TweenMax.to($('#ndjili-lineHKA'), 0.1, visiable_opt))
                .add(TweenMax.to($('#hamad-textHKA'), 0.5, visiable_opt))
                .add(TweenMax.to($('#hamad-lineHKA'), 0.1, visiable_opt))
                .add(TweenMax.to($('#marker-HKHKA'), 0.5, visiable_opt))
                .add(TweenMax.to($('#HK-textHKA'), 0.5, visiable_opt))
        })
        .on('leave', () => {
            var targets = [$('#marker-hamadHKA'), $('#marker-HKHKA'), $('#hamad-textHKA'),$('#HK-textHKA'),$('#hamad-lineHKA'),$('#casablanca-lineHKA')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
            TweenMax.to($line_mongcai, 0.1, {strokeDashoffset: 900, ease:Power1.easeOut})
        })
        .addTo(controller)
        
    //untuk ganti foto
	var objHongkong = {curImg: 0};
	var gantiFotoHongkong = TweenMax.to(objHongkong, 0.5,
		{
			curImg: imagesHongkong.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#media-hongkong").attr("src", imagesHongkong[objHongkong.curImg]); // set the image source
			}
		}
    );
    // efek map ketiga
    var sceneHongkong3 = new ScrollMagic.Scene({triggerElement: '#tweenHongkong-2',triggerHook: '0.08'})
        .setTween(gantiFotoHongkong)
        .on('enter', () =>{
            new TimelineMax()
            .add(TweenMax.to($('#hk-lineHKB'), 1, visiable_opt))
            .add(TweenMax.to($('#marker-HKHKB'), 0.5, visiable_opt))
            .add(TweenMax.to($('#HK-textHKB'), 0.5, visiable_opt))
        })
        .on('leave', () => {
            var targets = [$('#marker-HKHKB'), $('#hk-lineHKB'), $('#HK-textHKB')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
    // efek map keempat
    var sceneHongkong4 = new ScrollMagic.Scene({triggerElement: '#tweenHongkong-3',triggerHook: '0.08'})
        .on('enter', () =>{
            new TimelineMax()
            .add(TweenMax.to($('#macau-lineHKC'), 1, visiable_opt))
            .add(TweenMax.to($('#marker-HK-2'), 0.5, visiable_opt))
            .add(TweenMax.to($('#ndjili-textHKC'), 0.5, visiable_opt))
        })
        .on('leave', () => {
            var targets = [$('#macau-lineHKC'), $('#ndjili-textHKC'), $('#marker-HK-2')]
            TweenMax.killTweensOf(targets)
            TweenMax.to(targets, 0.5, hidden_opt)
        })
        .addTo(controller)
        
})
// end hongkong effect
// start indonesia effect
$(function() {
    //untuk pin deskripsi
    var pinIndonesia = new ScrollMagic.Scene({triggerElement: '#scene-indonesia',triggerHook: '0.08',duration: '100%',})
    .setPin('#pin-indonesia')
    .addTo(controller)

    var visiable_opt = {opacity: 1, ease:Linear.easeNone},
        hidden_opt = {opacity: 0, ease:Linear.easeNone}

    var markers = [$('#marker-a'),$('#marker-b'),$('#marker-c'),$('#marker-d'),$('#marker-e'),$('#marker-f')]
    var captions = [$('#caption-a'),$('#caption-b'),$('#caption-c'),$('#caption-d'),$('#caption-e'),$('#caption-f'),]

    TweenMax.killTweensOf(captions)
  TweenMax.to(captions, 0.5, {opacity: 0, ease:Linear.easeNone})

  markers.forEach((marker, i)=>{
    marker.click(function(){
        return new TimelineMax()
            .add(TweenMax.to(captions, 0, hidden_opt))
            .add(TweenMax.to(captions[i], 0.5, visiable_opt))
      })
    })
})
// end indonesia effect