package gamescene;

public class BackButtonEntity extends motion.SpriteEntity implements cave.PointerListener
{
	private motion.TextureSprite mainMenuButton = null;
	private double width = 0.00;
	private double height = 0.00;
	private gamescene.GameOverScene gameOverScene = null;

	static public gamescene.GameOverScene objectAsGamesceneGameOverScene(java.lang.Object o) {
		if(o instanceof gamescene.GameOverScene) {
			return((gamescene.GameOverScene)o);
		}
		return(null);
	}

	@Override
	public motion.Sprite createSprite() {
		gameOverScene = gamescene.BackButtonEntity.objectAsGamesceneGameOverScene((java.lang.Object)getScene());
		height = gameOverScene.getReferenceHeight();
		width = gameOverScene.getReferenceWidth();
		mainMenuButton = gameOverScene.addTextureSpriteForSize(gameOverScene.createTextureForImageResource("mainmenu"), width * 0.30, height * 0.07);
		mainMenuButton.move(width - mainMenuButton.getWidth(), mainMenuButton.getHeight());
		return((motion.Sprite)mainMenuButton);
	}

	public boolean onPointerEvent(cave.PointerEvent event) {
		if(event.action == cave.PointerEvent.DOWN) {
			if(event.isInside(mainMenuButton.getX(), mainMenuButton.getY(), mainMenuButton.getWidth(), mainMenuButton.getHeight())) {
				gameOverScene.pushScene((motion.Scene)new gamescene.MainMenuScene());
			}
		}
		return(false);
	}
}
