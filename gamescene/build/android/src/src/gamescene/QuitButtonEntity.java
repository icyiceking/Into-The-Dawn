package gamescene;

public class QuitButtonEntity extends motion.SpriteEntity implements cave.PointerListener
{
	private motion.TextureSprite quitButton = null;
	private double width = 0.00;
	private double height = 0.00;
	private gamescene.GameScene gameScene = null;

	static public gamescene.GameScene objectAsGamesceneGameScene(java.lang.Object o) {
		if(o instanceof gamescene.GameScene) {
			return((gamescene.GameScene)o);
		}
		return(null);
	}

	@Override
	public motion.Sprite createSprite() {
		gameScene = gamescene.QuitButtonEntity.objectAsGamesceneGameScene((java.lang.Object)getScene());
		height = gameScene.getReferenceHeight();
		width = gameScene.getReferenceWidth();
		quitButton = gameScene.addTextureSpriteForSize(gameScene.createTextureForImageResource("quit"), width * 0.30, height * 0.07);
		quitButton.move(width - quitButton.getWidth(), (double)0);
		return((motion.Sprite)quitButton);
	}

	public boolean onPointerEvent(cave.PointerEvent event) {
		if(event.action == cave.PointerEvent.DOWN) {
			if(event.isInside(quitButton.getX(), quitButton.getY(), quitButton.getWidth(), quitButton.getHeight())) {
				gameScene.pushScene((motion.Scene)new gamescene.MainMenuScene());
			}
		}
		return(false);
	}
}
