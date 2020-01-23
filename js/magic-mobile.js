//start cameroon effect
var controller;

var imagesCameroonMobile = [
    "assets/images/cameroon/mobile/m-01.jpg",
    "assets/images/cameroon/mobile/m-02.jpg",
    "assets/images/cameroon/mobile/m-03.jpg"
];

var imagesMalaysiaMobile = [
    "assets/images/malaysia/mobile/m-01.jpg",
    "assets/images/malaysia/mobile/m-02.jpg",
    "assets/images/malaysia/mobile/m-03.jpg"
];

var imagesThailandMobile = [
    "assets/images/malaysia/mobile/m-04.jpg",
    "assets/images/malaysia/mobile/m-05.jpg",
    "assets/images/malaysia/mobile/m-06.jpg",
    "assets/images/malaysia/mobile/m-07.jpg"
];

var imagesHongkongMobile = [
    "assets/images/hongkong/mobile/m-01.jpg",
    "assets/images/hongkong/mobile/m-02.jpg",
    "assets/images/hongkong/mobile/m-03.jpg"
];

var imagesVietnamMobile = [
    "assets/images/vietnam/mobile/m-01.jpg",
    "assets/images/vietnam/mobile/m-02.jpg",
    "assets/images/vietnam/mobile/m-03.jpg"
];

$(function() {
    controller = new ScrollMagic.Controller();
// cameroon section
    //untuk pin foto 1
    var CamerronPin = new ScrollMagic.Scene({
        triggerElement: '#scene-cameroon-mobile',
        triggerHook: '0.09',
        duration: '200%',
    })
    .setPin('#pin-cameroon-mobile', {
        pushFollowers: false
    })

    .addTo(controller)

    // efek 1
    gantiFotoCameroon1 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesCameroonMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-cameroon-mobile").attr("src", imagesCameroonMobile[0]); // set the image source
            }
        })
    var CamerronEffect1a= new ScrollMagic.Scene({triggerElement: '#scene-cameroon-mobile',triggerHook: '0.09',})
    .setTween(gantiFotoCameroon1)

    .addTo(controller)

    var CamerronEffect1b= new ScrollMagic.Scene({triggerElement: '#back-cameroon-mobile1',triggerHook: '0.09',})
    .setTween(gantiFotoCameroon1)

    .addTo(controller)

    // efek 2
    gantiFotoCameroon2 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesCameroonMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-cameroon-mobile").attr("src", imagesCameroonMobile[1]); // set the image source
            }
        })
    var CamerronEffect2a= new ScrollMagic.Scene({triggerElement: '#cameroon-mobile1',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesCameroonMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-cameroon-mobile").attr("src", imagesCameroonMobile[1]); // set the image source
            }
        })
    )

    .addTo(controller)

    var CamerronEffect2b= new ScrollMagic.Scene({triggerElement: '#back-cameroon-mobile2',triggerHook: '0.09',})
    .setTween(gantiFotoCameroon2)

    .addTo(controller)
    // efek 3
    var CamerronEffect3 = new ScrollMagic.Scene({
        triggerElement: '#cameroon-mobile2',
        triggerHook: '0.09',
    })
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesCameroonMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-cameroon-mobile").attr("src", imagesCameroonMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)
// Malaysia section
    //untuk pin foto 1
    var MalaysiaPin = new ScrollMagic.Scene({
        triggerElement: '#scene-malaysia-mobile',
        triggerHook: '0.09',
        duration: '200%',
    })
    .setPin('#pin-malaysia-mobile', {
        pushFollowers: false
    })

    .addTo(controller)

    // efek 1
    gantiFotoMalaysia1 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesMalaysiaMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-malaysia-mobile").attr("src", imagesMalaysiaMobile[0]); // set the image source
            }
        })
    var MalaysiaEffect1a= new ScrollMagic.Scene({triggerElement: '#scene-malaysia-mobile',triggerHook: '0.09',})
    .setTween(gantiFotoMalaysia1)

    .addTo(controller)

    var MalaysiaEffect1b= new ScrollMagic.Scene({triggerElement: '#back-malaysia-mobile1',triggerHook: '0.09',})
    .setTween(gantiFotoMalaysia1)

    .addTo(controller)

    // efek 2
    gantiFotoMalaysia2 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesMalaysiaMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-malaysia-mobile").attr("src", imagesMalaysiaMobile[1]); // set the image source
            }
        })
    var MalaysiaEffect2a= new ScrollMagic.Scene({triggerElement: '#malaysia-mobile1',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesMalaysiaMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-malaysia-mobile").attr("src", imagesMalaysiaMobile[1]); // set the image source
            }
        })
    )

    .addTo(controller)

    var MalaysiaEffect2b= new ScrollMagic.Scene({triggerElement: '#back-malaysia-mobile2',triggerHook: '0.09',})
    .setTween(gantiFotoMalaysia2)

    .addTo(controller)
    // efek 3
    var MalaysiaEffect3 = new ScrollMagic.Scene({
        triggerElement: '#malaysia-mobile2',
        triggerHook: '0.09',
    })
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesMalaysiaMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-malaysia-mobile").attr("src", imagesMalaysiaMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)
// Thailand section
    //untuk pin foto 1
    var ThailandPin = new ScrollMagic.Scene({
        triggerElement: '#scene-thailand-mobile',
        triggerHook: '0.09',
        duration: '300%',
    })
    .setPin('#pin-thailand-mobile', {
        pushFollowers: false
    })

    .addTo(controller)

    // efek 1
    gantiFotoThailand1 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-thailand-mobile").attr("src", imagesThailandMobile[0]); // set the image source
            }
        })
    var ThailandEffect1a= new ScrollMagic.Scene({triggerElement: '#scene-thailand-mobile',triggerHook: '0.09',})
    .setTween(gantiFotoThailand1)

    .addTo(controller)

    var ThailandEffect1b= new ScrollMagic.Scene({triggerElement: '#back-thailand-mobile1',triggerHook: '0.09',})
    .setTween(gantiFotoThailand1)

    .addTo(controller)

    // efek 2
    gantiFotoThailand2 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-thailand-mobile").attr("src", imagesThailandMobile[1]); // set the image source
            }
        })
    var ThailandEffect2a= new ScrollMagic.Scene({triggerElement: '#thailand-mobile1',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-thailand-mobile").attr("src", imagesThailandMobile[1]); // set the image source
            }
        })
    )

    .addTo(controller)

    var ThailandEffect2b= new ScrollMagic.Scene({triggerElement: '#back-thailand-mobile2',triggerHook: '0.09',})
    .setTween(gantiFotoThailand2)

    .addTo(controller)
    // efek 3
    var ThailandEffect3a = new ScrollMagic.Scene({triggerElement: '#thailand-mobile2',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-thailand-mobile").attr("src", imagesThailandMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)
    var ThailandEffect3b = new ScrollMagic.Scene({triggerElement: '#back-thailand-mobile2',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-thailand-mobile").attr("src", imagesThailandMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)

    // efek 4
    var ThailandEffect4a = new ScrollMagic.Scene({triggerElement: '#thailand-mobile3',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-thailand-mobile").attr("src", imagesThailandMobile[3]); // set the image source
                }
            })
    )

    .addTo(controller)
    var ThailandEffect4b = new ScrollMagic.Scene({triggerElement: '#back-thailand-mobile3',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesThailandMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-thailand-mobile").attr("src", imagesThailandMobile[3]); // set the image source
                }
            })
    )

    .addTo(controller)
// hongkong section
    //untuk pin foto 1
    var CamerronPin = new ScrollMagic.Scene({
        triggerElement: '#scene-hongkong-mobile',
        triggerHook: '0.09',
        duration: '200%',
    })
    .setPin('#pin-hongkong-mobile', {
        pushFollowers: false
    })

    .addTo(controller)

    // efek 1
    gantiFotoHongkong1 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesHongkongMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-hongkong-mobile").attr("src", imagesHongkongMobile[0]); // set the image source
            }
        })
    var CamerronEffect1a= new ScrollMagic.Scene({triggerElement: '#scene-hongkong-mobile',triggerHook: '0.09',})
    .setTween(gantiFotoHongkong1)

    .addTo(controller)

    var CamerronEffect1b= new ScrollMagic.Scene({triggerElement: '#back-hongkong-mobile1',triggerHook: '0.09',})
    .setTween(gantiFotoHongkong1)

    .addTo(controller)

    // efek 2
    gantiFotoHongkong2 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesHongkongMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-hongkong-mobile").attr("src", imagesHongkongMobile[1]); // set the image source
            }
        })
    var CamerronEffect2a= new ScrollMagic.Scene({triggerElement: '#hongkong-mobile1',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesHongkongMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-hongkong-mobile").attr("src", imagesHongkongMobile[1]); // set the image source
            }
        })
    )

    .addTo(controller)

    var CamerronEffect2b= new ScrollMagic.Scene({triggerElement: '#back-hongkong-mobile2',triggerHook: '0.09',})
    .setTween(gantiFotoHongkong2)

    .addTo(controller)
    // efek 3
    var CamerronEffect3 = new ScrollMagic.Scene({
        triggerElement: '#hongkong-mobile2',
        triggerHook: '0.09',
    })
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesHongkongMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-hongkong-mobile").attr("src", imagesHongkongMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)
// Vietnam section
    //untuk pin foto 1
    var VietnamPin = new ScrollMagic.Scene({
        triggerElement: '#scene-vietnam-mobile',
        triggerHook: '0.09',
        duration: '200%',
    })
    .setPin('#pin-vietnam-mobile', {
        pushFollowers: false
    })

    .addTo(controller)

    // efek 1
    gantiFotoVietnam1 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesVietnamMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-vietnam-mobile").attr("src", imagesVietnamMobile[0]); // set the image source
            }
        })
    var VietnamEffect1a= new ScrollMagic.Scene({triggerElement: '#scene-vietnam-mobile',triggerHook: '0.09',})
    .setTween(gantiFotoVietnam1)

    .addTo(controller)

    var VietnamEffect1b= new ScrollMagic.Scene({triggerElement: '#back-vietnam-mobile1',triggerHook: '0.09',})
    .setTween(gantiFotoVietnam1)

    .addTo(controller)

    // efek 2
    gantiFotoVietnam2 = TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesVietnamMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-vietnam-mobile").attr("src", imagesVietnamMobile[1]); // set the image source
            }
        })
    var VietnamEffect2a= new ScrollMagic.Scene({triggerElement: '#vietnam-mobile1',triggerHook: '0.09',})
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
        {
            curImg: imagesVietnamMobile.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            // immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
              $("#media-vietnam-mobile").attr("src", imagesVietnamMobile[1]); // set the image source
            }
        })
    )

    .addTo(controller)

    var VietnamEffect2b= new ScrollMagic.Scene({triggerElement: '#back-vietnam-mobile2',triggerHook: '0.09',})
    .setTween(gantiFotoVietnam2)

    .addTo(controller)
    // efek 3
    var VietnamEffect3 = new ScrollMagic.Scene({
        triggerElement: '#vietnam-mobile2',
        triggerHook: '0.09',
    })
    .setTween(
        TweenMax.to( {curImg: 0}, 0.5,
            {
                curImg: imagesVietnamMobile.length - 1,	// animate propery curImg to number of images
                roundProps: "curImg",				// only integers so it can be used as an array index
                // immediateRender: true,			// load first image automatically
                ease: Linear.easeNone,			// show every image the same ammount of time
                onUpdate: function () {
                  $("#media-vietnam-mobile").attr("src", imagesVietnamMobile[2]); // set the image source
                }
            })
    )

    .addTo(controller)
})
//end cameroon effect
// start indonesia effect
$(function() {
    //untuk pin deskripsi
    var pinIndonesia = new ScrollMagic.Scene({
        triggerElement: '#scene-indonesia-mobile',
        triggerHook: '0.09',
        duration: '200%',
    })
    .setPin('#pin-indonesia-mobile',{pushFollowers:false})
    .addTo(controller)


    var visiable_opt = {opacity: 1, ease:Linear.easeNone},
      hidden_opt = {opacity: 0, ease:Linear.easeNone}

  var markersM = [
    $('#marker-a-m'),
    $('#marker-b-m'),
    $('#marker-c-m'),
    $('#marker-d-m'),
    $('#marker-e-m'),
    $('#marker-f-m'),
  ]

  var captionsM = [
    $('#indonesia-caption-m-1'),
    $('#indonesia-caption-m-2'),
    $('#indonesia-caption-m-3'),
    $('#indonesia-caption-m-4'),
    $('#indonesia-caption-m-5'),
    $('#indonesia-caption-m-6'),
  ]

  markersM.forEach((marker, i)=>{
  	marker.click(function() {
  		captionsM.forEach(item=>{
  			item.css('z-index',10);
  		})
  		return new TimelineMax()
  			.add(TweenMax.to(captionsM, 0, hidden_opt))
				.add(TweenMax.to(captionsM[i], 0.5, visiable_opt))
		})
  })

  captionsM.forEach(caption=>{
  	caption.click(function(){
  		captionsM.forEach(item=>{
            item.css('z-index',0);
  		})
  		TweenMax.to(captionsM, 0, hidden_opt)
  	})
  })
})
// end indonesia effect