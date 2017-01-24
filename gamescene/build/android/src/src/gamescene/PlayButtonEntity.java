package gamescene;

public class PlayButtonEntity extends motion.SpriteEntity implements cave.PointerListener
{
	private motion.TextureSprite playButton = null;
	private double width = 0.00;
	private double height = 0.00;
	private gamescene.MainMenuScene menuScene = null;

	static public gamescene.MainMenuScene objectAsGamesceneMainMenuScene(java.lang.Object o) {
		if(o instanceof gamescene.MainMenuScene) {
			return((gamescene.MainMenuScene)o);
		}
		return(null);
	}

	@Override
	public motion.Sprite createSprite() {
		menuScene = gamescene.PlayButtonEntity.objectAsGamesceneMainMenuScene((java.lang.Object)getScene());
		height = menuScene.getReferenceHeight();
		width = menuScene.getReferenceWidth();
		playButton = menuScene.addTextureSpriteForSize(menuScene.createTextureForImageResource("start"), width * 0.30, height * 0.07);
		playButton.move((width * 0.50) - (playButton.getWidth() * 0.50), height * 0.60);
		return((motion.Sprite)playButton);
	}

	public boolean onPointerEvent(cave.PointerEvent event) {
		if(event.action == cave.PointerEvent.DOWN) {
			if(event.isInside(playButton.getX(), playButton.getY(), playButton.getWidth(), playButton.getHeight())) {
				menuScene.pushScene((motion.Scene)new gamescene.GameScene());
			}
		}
		return(false);
	}
}
