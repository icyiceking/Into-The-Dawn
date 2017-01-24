"use strict";var GamesceneBackButtonEntity = function() {MotionSpriteEntity.call(this);this.mainMenuButton = null;this.width = null;this.height = null;this.gameOverScene = null;{} };var P = GamesceneBackButtonEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamesceneBackButtonEntity;P._t = {}; P._t["GamesceneBackButtonEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;P._t["CavePointerListener"] = true;GamesceneBackButtonEntity.createInstance = function() {var _v = new GamesceneBackButtonEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.gameOverScene) = (null);(this.height) = (0.0);(this.width) = (0.0);(this.mainMenuButton) = (null);return(this);};GamesceneBackButtonEntity.objectAsGamesceneGameOverScene = function(o) {if(((function(o, t) {return(o != null && o._t != null && o._t[t] === true);}) (o, "GamesceneGameOverScene"))) {return(o);}return(null);};P.createSprite = function() {(this.gameOverScene) = GamesceneBackButtonEntity.objectAsGamesceneGameOverScene(this.getScene());(this.height) = this.gameOverScene.getReferenceHeight();(this.width) = this.gameOverScene.getReferenceWidth();(this.mainMenuButton) = this.gameOverScene.addTextureSpriteForSize(this.gameOverScene.createTextureForImageResource("mainmenu"), (this.width) * (0.3), (this.height) * (0.07));this.mainMenuButton.move((this.width) - this.mainMenuButton.getWidth(), 0);return(this.mainMenuButton);};P.onPointerEvent = function(event) {if(event.action === (CavePointerEvent.DOWN)) {if(event.isInside(this.mainMenuButton.getX(), this.mainMenuButton.getY(), this.mainMenuButton.getWidth(), this.mainMenuButton.getHeight())) {this.gameOverScene.pushScene(GamesceneMainMenuScene.createInstance());}}return(false);};var GamesceneBackgroundEntity = function() {MotionSpriteEntity.call(this);this.spriteScene = null;this.width = null;{} };var P = GamesceneBackgroundEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamesceneBackgroundEntity;P._t = {}; P._t["GamesceneBackgroundEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;GamesceneBackgroundEntity.createInstance = function() {var _v = new GamesceneBackgroundEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.width) = (0.0);(this.spriteScene) = (null);return(this);};P.createSprite = function() {var txt = this.scene.createTextureForImageResource("myback");(this.width) = this.layer.getReferenceWidth();var bg = MotionSpriteUtil.addTextureSpriteForSize(this.scene, this.layer, txt, this.width, this.layer.getReferenceHeight());(this.spriteScene) = MotionSpriteUtil.addTextureSpriteForSize(this.scene, this.layer, txt, this.width, this.layer.getReferenceHeight());bg.move(0.0, 0.0);this.spriteScene.move(this.width, 0.0);return(bg);};P.tick = function(gameTime, delta) {MotionSpriteEntity.prototype.tick.call(this, gameTime, delta);var x = this.sprite.getX() - (delta) / (2);if((x) <= -(this.width)) {(x) = (0);}this.sprite.move(x, 0.0);this.spriteScene.move((this.width) + (x), 0.0);};var GamesceneGameOverScene = function() {MotionSpriteSceneWithEntities.call(this);this.background = null;this.gameover = null;this.mainMenuButton = null;this.height = null;this.width = null;this.scoreText = null;this.scoreSprite = null;this.score = null;{} };var P = GamesceneGameOverScene.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteSceneWithEntities.prototype);P.constructor = GamesceneGameOverScene;P._t = {}; P._t["GamesceneGameOverScene"] = true;P._t["MotionSpriteSceneWithEntities"] = true;P._t["MotionSpriteScene"] = true;P._t["MotionScene"] = true;P._t["MotionSpriteLayer"] = true;P._t["MotionEntityScene"] = true;P._t["MotionScene"] = true;GamesceneGameOverScene.createInstance = function() {var _v = new GamesceneGameOverScene();return(_v._construct());};P._construct = function() {if(MotionSpriteSceneWithEntities.prototype._construct.call(this) == (null)) {return(null);}return(this);};GamesceneGameOverScene.createInstanceWithSignedInteger = function(s) {var _v = new GamesceneGameOverScene();return(_v._constructSignedInteger(s));};P._constructSignedInteger = function(s) {if(MotionSpriteSceneWithEntities.prototype._construct.call(this) == (null)) {return(null);}(this.score) = (0);(this.scoreSprite) = (null);(this.scoreText) = (null);(this.width) = (0.0);(this.height) = (0.0);(this.mainMenuButton) = (null);(this.gameover) = (null);(this.background) = (null);(this.score) = (s);return(this);};P.initialize = function() {MotionSpriteSceneWithEntities.prototype.initialize.call(this);(this.height) = this.getReferenceHeight();(this.width) = this.getReferenceWidth();this.addEntity((this.background) = GamesceneBackgroundEntity.createInstance());(this.scoreText) = MotionTextProperties.forText(CapeString.appendStringAndSignedInteger("Final Score: ", this.score));this.scoreText.setTextColor(CaveColor.white());this.scoreText.setFontSizeRelative((0.02) * (this.height));this.scoreText.setFontFamily("Calibri");(this.scoreSprite) = this.addTextSprite(this.scoreText);this.scoreSprite.move((this.width) * (0.5) - this.scoreSprite.getWidth() * (0.5), (this.height) * (0.2));(this.gameover) = this.addTextureSpriteForSize(this.createTextureForImageResource("gameover"), (this.width) * (0.3), (this.height) * (0.3));this.gameover.move((this.width) * (0.5) - this.gameover.getWidth() * (0.5), (this.height) * (0.5) - this.gameover.getHeight() * (0.5));this.addEntity((this.mainMenuButton) = GamesceneBackButtonEntity.createInstance());};P.cleanup = function() {this.removeEntity(this.mainMenuButton);this.removeEntity(this.background);};var GamesceneGameScene = function() {MotionSpriteSceneWithEntities.call(this);this.background = null;this.square = null;this.triangle = null;this.quit = null;this.height = null;this.showScore = null;this.width = null;this.time = null;this.rand = null;this.score = null;this.audioManager = null;this.stream = null;{} };var P = GamesceneGameScene.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteSceneWithEntities.prototype);P.constructor = GamesceneGameScene;P._t = {}; P._t["GamesceneGameScene"] = true;P._t["MotionSpriteSceneWithEntities"] = true;P._t["MotionSpriteScene"] = true;P._t["MotionScene"] = true;P._t["MotionSpriteLayer"] = true;P._t["MotionEntityScene"] = true;P._t["MotionScene"] = true;GamesceneGameScene.createInstance = function() {var _v = new GamesceneGameScene();return(_v._construct());};P._construct = function() {if(MotionSpriteSceneWithEntities.prototype._construct.call(this) == (null)) {return(null);}(this.stream) = (null);(this.audioManager) = (null);(this.score) = (0);(this.rand) = CapeRandom.createInstance();(this.time) = (0.0);(this.width) = (0.0);(this.showScore) = (null);(this.height) = (0.0);(this.quit) = (null);(this.triangle) = (null);(this.square) = (null);(this.background) = (null);return(this);};P.initialize = function() {MotionSpriteSceneWithEntities.prototype.initialize.call(this);(this.height) = this.getReferenceHeight();(this.width) = this.getReferenceWidth();this.addEntity((this.background) = GamesceneBackgroundEntity.createInstance());var textProp = MotionTextProperties.forText("Counter");textProp.setTextColor(CaveColor.black());textProp.setFontSizeRelative((0.75) * (this.height));textProp.setFontFamily("Times new roman");textProp.setFontIsBold(true);(this.showScore) = this.addTextSprite(textProp);this.showScore.move(0.0, (this.height) - this.showScore.getHeight());(this.audioManager) = MotionAudioManager.forApplication(this.getContext());if((this.audioManager) !== (null)) {(this.stream) = this.audioManager.getStreamForResource("music");}this.onTimeToPlayStream();this.addEntity((this.square) = GamesceneSquareEntity.createInstance());this.addEntity((this.quit) = GamesceneQuitButtonEntity.createInstance());};P.getSquare = function() {return(this.square);};P.tick = function(gameTime, delta) {var spawner = this.rand.nextIntWithSigned32bitIntegerAndSigned32bitInteger(1, 2);MotionSpriteSceneWithEntities.prototype.tick.call(this, gameTime, delta);(this.time)++;if((this.time) % (40) === (0)) {(this.score)++;}this.showScore.setText(MotionTextProperties.forText(CapeString.appendStringAndSignedInteger("Counter: ", this.score)));if((this.time) % (100) === (0)) {if((spawner) === (1)) {this.addEntity((this.triangle) = GamesceneTriangleEntity.createInstance());}}if((this.time) % (105) === (0)) {if((spawner) === (2)) {this.addEntity((this.triangle) = GamesceneTriangleEntity.createInstance());}}};P.getScore = function() {return(this.score);};P.getContext = function() {return(this.context);};P.onTimeToPlayStream = function() {if((this.stream) !== (null)) {this.stream.play();this.stream.setLooping(true);}};P.stopStream = function() {if((this.stream) !== (null)) {this.stream.stop();}};P.removeTriangleSprite = function() {if(this.triangle.getX() <= -(this.width)) {this.removeSprite(this.triangle);}};P.cleanup = function() {this.stopStream();this.removeEntity(this.background);this.removeEntity(this.square);this.removeEntity(this.triangle);this.removeEntity(this.quit);};var GamesceneMainMenuScene = function() {MotionSpriteSceneWithEntities.call(this);this.background = null;this.height = null;this.width = null;this.play = null;{} };var P = GamesceneMainMenuScene.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteSceneWithEntities.prototype);P.constructor = GamesceneMainMenuScene;P._t = {}; P._t["GamesceneMainMenuScene"] = true;P._t["MotionSpriteSceneWithEntities"] = true;P._t["MotionSpriteScene"] = true;P._t["MotionScene"] = true;P._t["MotionSpriteLayer"] = true;P._t["MotionEntityScene"] = true;P._t["MotionScene"] = true;GamesceneMainMenuScene.createInstance = function() {var _v = new GamesceneMainMenuScene();return(_v._construct());};P._construct = function() {if(MotionSpriteSceneWithEntities.prototype._construct.call(this) == (null)) {return(null);}(this.play) = (null);(this.width) = (0.0);(this.height) = (0.0);(this.background) = (null);return(this);};P.initialize = function() {MotionSpriteSceneWithEntities.prototype.initialize.call(this);(this.height) = this.getReferenceHeight();(this.width) = this.getReferenceWidth();(this.background) = this.addTextureSpriteForSize(this.createTextureForImageResource("backgroundmain"), this.width, this.height);this.background.move(0, 0);this.addEntity((this.play) = GamescenePlayButtonEntity.createInstance());};P.cleanup = function() {this.removeSprite(this.background);this.removeEntity(this.play);};GamesceneMainMenuScene.main = function(args) {var context = CaveGuiApplicationContextForHTML.createInstance();var resources = ["backgroundmain.jpg", "credits.png", "gameover.png", "instruction.png", "mainmenu.png", "myback.png", "quit.png", "redtri.png", "square.png", "start.png", "music.mp3"];context.prepareResources(resources, function(){var backend = MotionBackendForHTMLElements.forScene(GamesceneMainMenuScene.createInstance(), context, CaveHTMLDOM.getDocumentBody());backend.start();}.bind(this));return(0);};var GamescenePlayButtonEntity = function() {MotionSpriteEntity.call(this);this.playButton = null;this.width = null;this.height = null;this.menuScene = null;{} };var P = GamescenePlayButtonEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamescenePlayButtonEntity;P._t = {}; P._t["GamescenePlayButtonEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;P._t["CavePointerListener"] = true;GamescenePlayButtonEntity.createInstance = function() {var _v = new GamescenePlayButtonEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.menuScene) = (null);(this.height) = (0.0);(this.width) = (0.0);(this.playButton) = (null);return(this);};GamescenePlayButtonEntity.objectAsGamesceneMainMenuScene = function(o) {if(((function(o, t) {return(o != null && o._t != null && o._t[t] === true);}) (o, "GamesceneMainMenuScene"))) {return(o);}return(null);};P.createSprite = function() {(this.menuScene) = GamescenePlayButtonEntity.objectAsGamesceneMainMenuScene(this.getScene());(this.height) = this.menuScene.getReferenceHeight();(this.width) = this.menuScene.getReferenceWidth();(this.playButton) = this.menuScene.addTextureSpriteForSize(this.menuScene.createTextureForImageResource("start"), (this.width) * (0.3), (this.height) * (0.07));this.playButton.move((this.width) * (0.5) - this.playButton.getWidth() * (0.5), (this.height) * (0.6));return(this.playButton);};P.onPointerEvent = function(event) {if(event.action === (CavePointerEvent.DOWN)) {if(event.isInside(this.playButton.getX(), this.playButton.getY(), this.playButton.getWidth(), this.playButton.getHeight())) {this.menuScene.pushScene(GamesceneGameScene.createInstance());}}if(event.isConsumed) {return(false);}return(false);};var GamesceneQuitButtonEntity = function() {MotionSpriteEntity.call(this);this.quitButton = null;this.width = null;this.height = null;this.gameScene = null;{} };var P = GamesceneQuitButtonEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamesceneQuitButtonEntity;P._t = {}; P._t["GamesceneQuitButtonEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;P._t["CavePointerListener"] = true;GamesceneQuitButtonEntity.createInstance = function() {var _v = new GamesceneQuitButtonEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.gameScene) = (null);(this.height) = (0.0);(this.width) = (0.0);(this.quitButton) = (null);return(this);};GamesceneQuitButtonEntity.objectAsGamesceneGameScene = function(o) {if(((function(o, t) {return(o != null && o._t != null && o._t[t] === true);}) (o, "GamesceneGameScene"))) {return(o);}return(null);};P.createSprite = function() {(this.gameScene) = GamesceneQuitButtonEntity.objectAsGamesceneGameScene(this.getScene());(this.height) = this.gameScene.getReferenceHeight();(this.width) = this.gameScene.getReferenceWidth();(this.quitButton) = this.gameScene.addTextureSpriteForSize(this.gameScene.createTextureForImageResource("quit"), (this.width) * (0.3), (this.height) * (0.07));this.quitButton.move((this.width) - this.quitButton.getWidth(), 0);return(this.quitButton);};P.onPointerEvent = function(event) {if(event.action === (CavePointerEvent.DOWN)) {if(event.isInside(this.quitButton.getX(), this.quitButton.getY(), this.quitButton.getWidth(), this.quitButton.getHeight())) {this.gameScene.pushScene(GamesceneMainMenuScene.createInstance());}}return(false);};var GamesceneSquareEntity = function() {MotionSpriteEntity.call(this);this.square = null;this.width = null;this.height = null;this.gameScene = null;this.isPressedUp = null;this.speedY = null;this.px = null;{} };var P = GamesceneSquareEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamesceneSquareEntity;P._t = {}; P._t["GamesceneSquareEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;P._t["CavePointerListener"] = true;GamesceneSquareEntity.createInstance = function() {var _v = new GamesceneSquareEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.px) = (0.0);(this.speedY) = (0.0);(this.isPressedUp) = (true);(this.gameScene) = (null);(this.height) = (0.0);(this.width) = (0.0);(this.square) = (null);return(this);};GamesceneSquareEntity.objectAsGamesceneGameScene = function(o) {if(((function(o, t) {return(o != null && o._t != null && o._t[t] === true);}) (o, "GamesceneGameScene"))) {return(o);}return(null);};P.createSprite = function() {(this.gameScene) = GamesceneSquareEntity.objectAsGamesceneGameScene(this.getScene());(this.height) = this.gameScene.getReferenceHeight();(this.width) = this.gameScene.getReferenceWidth();(this.square) = this.gameScene.addTextureSpriteForSize(this.gameScene.createTextureForImageResource("square"), (this.width) * (0.1), (this.width) * (0.1));this.square.move((0) + this.square.getWidth(), (this.height) - this.square.getHeight());return(this.square);};P.onPointerEvent = function(event) {if(event.action === (CavePointerEvent.DOWN)) {(this.isPressedUp) = (true);}return(false);};P.jump = function() {(this.speedY) -= (0.01) * (0.1);this.move(this.getX(), this.getY() - (this.speedY));if((this.speedY) <= -(0.022)) {(this.isPressedUp) = (false);(this.speedY) = (0.022);this.square.move(this.getX(), (this.height) - this.square.getHeight());}};P.tick = function(gameTime, delta) {MotionSpriteEntity.prototype.tick.call(this, gameTime, delta);(this.px) = this.square.getX();(this.px) -= (delta) / (5);if(this.isPressedUp) {this.jump();}};var GamesceneTriangleEntity = function() {MotionSpriteEntity.call(this);this.triangle = null;this.height = null;this.width = null;this.gameScene = null;this.px = null;this.score = null;{} };var P = GamesceneTriangleEntity.prototype = (function(o) {function F() {} F.prototype = o;return(new F());}) (MotionSpriteEntity.prototype);P.constructor = GamesceneTriangleEntity;P._t = {}; P._t["GamesceneTriangleEntity"] = true;P._t["MotionSpriteEntity"] = true;P._t["MotionSprite"] = true;P._t["MotionEntity"] = true;GamesceneTriangleEntity.createInstance = function() {var _v = new GamesceneTriangleEntity();return(_v._construct());};P._construct = function() {if(MotionSpriteEntity.prototype._construct.call(this) == (null)) {return(null);}(this.score) = (0);(this.px) = (0.0);(this.gameScene) = (null);(this.width) = (0.0);(this.height) = (0.0);(this.triangle) = (null);return(this);};GamesceneTriangleEntity.objectAsGamesceneGameScene = function(o) {if(((function(o, t) {return(o != null && o._t != null && o._t[t] === true);}) (o, "GamesceneGameScene"))) {return(o);}return(null);};P.createSprite = function() {(this.gameScene) = GamesceneTriangleEntity.objectAsGamesceneGameScene(this.getScene());(this.height) = this.gameScene.getReferenceHeight();(this.width) = this.gameScene.getReferenceWidth();console.log(this.width);(this.triangle) = this.gameScene.addTextureSpriteForSize(this.gameScene.createTextureForImageResource("redtri"), (this.width) * (0.05), (this.width) * (0.05));this.triangle.move((this.width) - this.triangle.getWidth(), (this.height) - this.triangle.getHeight());return(this.triangle);};P.isCollide = function(a, b) {var r1 = a.getWidth() * (0.6);var r2 = a.getHeight() * (0.1);var totalR = (r1) + (r2);var dx = a.getX() - b.getX();var dy = a.getY() - b.getY();var dr = CapeMath.sqrt((dx) * (dx) + (dy) * (dy));if((dr) < (totalR)) {return(true);}return(false);};P.tick = function(gameTime, delta) {MotionSpriteEntity.prototype.tick.call(this, gameTime, delta);(this.px) = this.triangle.getX();(this.px) -= (delta) / (2);(this.score) = this.gameScene.getScore();console.log("++++");console.log(this.score);console.log("++++");if(this.isCollide(this.gameScene.getSquare(), this.triangle)) {this.gameScene.pushScene(GamesceneGameOverScene.createInstanceWithSignedInteger(this.score));this.gameScene.stream.stop();}this.triangle.move(this.px, this.triangle.getY());};