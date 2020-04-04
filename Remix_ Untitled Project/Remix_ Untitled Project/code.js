var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e6fdd063-8ee7-4210-b303-056bc344e6ad","0a8d4c59-8adc-4585-974f-f18ac4ea87d9","8f251b6a-6ec0-4a7f-8a40-3622b30fc700","29cce921-1ed9-4867-8e1f-b162299a5b53","73a00834-e82b-4f4c-8c4d-831bb3c4e26b","b69e5a03-d87d-4531-8492-a640f318ec2a","773ec965-8d9a-411b-a7df-6cb4b36e6155","02ec1772-c328-4f5d-bc26-3bca89a19ae8","ddddaf2e-8ab8-450c-b496-5edd60163ec2","0c1e63ba-419a-49ec-8ab5-eb27eb772e88","10a9da9c-6248-4127-bce5-f2103973fdb6","5927c3a0-085f-4bf8-8459-a4699bd44be5"],"propsByKey":{"e6fdd063-8ee7-4210-b303-056bc344e6ad":{"name":"gun","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"iu.FZMewHs7QaobVvR2JGbsXorGc0YX5","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/e6fdd063-8ee7-4210-b303-056bc344e6ad.png"},"0a8d4c59-8adc-4585-974f-f18ac4ea87d9":{"name":"gun_shooting","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":12,"looping":false,"frameDelay":1,"version":"ucUtQPDgF1URZM3h3j3hD197b63_ruFR","loadedFromSource":true,"saved":true,"sourceSize":{"x":2400,"y":3200},"rootRelativePath":"assets/0a8d4c59-8adc-4585-974f-f18ac4ea87d9.png"},"8f251b6a-6ec0-4a7f-8a40-3622b30fc700":{"name":"crosshair","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".5iNVG3c1KU2qEVGBLEtmUDUd5K3r6SL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8f251b6a-6ec0-4a7f-8a40-3622b30fc700.png"},"29cce921-1ed9-4867-8e1f-b162299a5b53":{"name":"enemyL","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":1,"looping":true,"frameDelay":12,"version":"rAQEobj0L1LPTWTZi339nvUiZ4DbSbhy","loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":690},"rootRelativePath":"assets/29cce921-1ed9-4867-8e1f-b162299a5b53.png"},"73a00834-e82b-4f4c-8c4d-831bb3c4e26b":{"name":"enemyL_death","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":6,"looping":false,"frameDelay":1,"version":"pWuLOp5SXSBj2igxa9nlmHWIw1pGYqSk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1204,"y":1380},"rootRelativePath":"assets/73a00834-e82b-4f4c-8c4d-831bb3c4e26b.png"},"b69e5a03-d87d-4531-8492-a640f318ec2a":{"name":"enemyL_ duck","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":27,"looping":false,"frameDelay":2,"version":"j24i93zYmdtHRCFeO96.n98vUelhcWKf","loadedFromSource":true,"saved":true,"sourceSize":{"x":2408,"y":2760},"rootRelativePath":"assets/b69e5a03-d87d-4531-8492-a640f318ec2a.png"},"773ec965-8d9a-411b-a7df-6cb4b36e6155":{"name":"enemyR","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":1,"looping":true,"frameDelay":12,"version":"LKw51.mJSxlqe.kXrXOLvcFWlzs9zB_K","loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":690},"rootRelativePath":"assets/773ec965-8d9a-411b-a7df-6cb4b36e6155.png"},"02ec1772-c328-4f5d-bc26-3bca89a19ae8":{"name":"enemyR_death","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":6,"looping":false,"frameDelay":1,"version":"WK0BRlvKQE79CU2Yn66MgAejqvZpCZsU","loadedFromSource":true,"saved":true,"sourceSize":{"x":1204,"y":1380},"rootRelativePath":"assets/02ec1772-c328-4f5d-bc26-3bca89a19ae8.png"},"ddddaf2e-8ab8-450c-b496-5edd60163ec2":{"name":"enemyR_duck","sourceUrl":null,"frameSize":{"x":301,"y":690},"frameCount":15,"looping":false,"frameDelay":2,"version":"cPk1oL4BUfwZb5Ui3kufJl9y0H6CVno7","loadedFromSource":true,"saved":true,"sourceSize":{"x":1806,"y":2070},"rootRelativePath":"assets/ddddaf2e-8ab8-450c-b496-5edd60163ec2.png"},"0c1e63ba-419a-49ec-8ab5-eb27eb772e88":{"name":"background","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"qFaTeVH1ObB8.S5FKfK8m4RcK71uU06a","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/0c1e63ba-419a-49ec-8ab5-eb27eb772e88.png"},"10a9da9c-6248-4127-bce5-f2103973fdb6":{"name":"wall","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"81cP3UpzkQLlkIFkfnE7RGvSHBWXVg7V","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/10a9da9c-6248-4127-bce5-f2103973fdb6.png"},"5927c3a0-085f-4bf8-8459-a4699bd44be5":{"name":"blood","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":8,"looping":false,"frameDelay":1,"version":"EofH4dU.WKB85Gbea.UgBQCv3LXi5_8y","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/5927c3a0-085f-4bf8-8459-a4699bd44be5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


 var backdrop = createSprite(200,200,400,400)
backdrop.setAnimation("background")

var playarea1 = createSprite(200,30,400,50)
playarea1.visible = false;

var playarea2 = createSprite(130,60,50,270)
playarea2.visible = false;

var playarea3 = createSprite(195,300,440,210)
playarea3.visible = false;

var playarea4 = createSprite(365,200,200,400);
playarea4.visible = false;

var enemyL = createSprite(55,170)
enemyL.setAnimation("enemyL")
enemyL.scale = 0.3

var enemyR = createSprite(205,175)
enemyR.setAnimation("enemyR")
enemyR.scale = 0.3

var wall = createSprite(135,220,150,55)
wall.setAnimation("wall")
wall.scale = 0.7

var crosshair =  createSprite(210,200)
crosshair.setAnimation("crosshair")

var gun = createSprite(230,300)
gun.setAnimation("gun")
gun.scale = 0.3

var edge = createSprite(200,200,20,400)
edge.visible=false



var ammo = 6;



function draw() {
   background("white")
  createEdgeSprites()
    
    text(ammo,30,350);
    
  //  console.log(World.frameRate)
 
 crosshair.x = World.mouseX
 crosshair.y = World.mouseY
 
 gun.x = crosshair.x

 camera.mouseY
 camera.mouseY
 
 if(mousePressedOver(playarea1)|| mousePressedOver(playarea2) || mousePressedOver(playarea3) || mousePressedOver(playarea4)){
   gun.setAnimation("gun_shooting")
   playSound("assets/9_mm_gunshot-mike-koenig-123.mp3");
   ammo = ammo - 1;
   
  enemyL.setAnimation("enemyL_ duck")
  enemyR.setAnimation("enemyR_duck")
 }
  if(  mousePressedOver(enemyL)){
   gun.setAnimation("gun_shooting")
   playSound("assets/9_mm_gunshot-mike-koenig-123.mp3");
   ammo = ammo - 1;

 enemyL.setAnimation("enemyL_death")
  enemyR.setAnimation("enemyR_duck")
  
  
 }
 
 
 
 if( mousePressedOver(enemyR)){
   gun.setAnimation("gun_shooting")
   playSound("assets/9_mm_gunshot-mike-koenig-123.mp3");
   ammo = ammo - 1;

 enemyL.setAnimation("enemyL_ duck")
  enemyR.setAnimation("enemyR_death")
  }
 
 
  if( mousePressedOver(enemyL) && mousePressedOver(enemyR)){
   gun.setAnimation("gun_shooting")
   playSound("assets/9_mm_gunshot-mike-koenig-123.mp3");
   ammo = ammo - 1;
   }


if (mouseIsOver(enemyL) && mousePressedOver(enemyL)){
  var blood = createSprite(World.mouseX,World.mouseY)
  blood.setAnimation("blood")
  playSound("assets/9_mm_gunshot-mike-koenig-123.mp3");
  }
  
  
  if (mousePressedOver(enemyR) && mouseIsOver(enemyR)){
 
 var blood = createSprite(World.mouseX,World.mouseY)
  blood.setAnimation("blood")
  
  }
 

if(ammo === 0){
  ammo = 6
}
 
 drawSprites() 
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
