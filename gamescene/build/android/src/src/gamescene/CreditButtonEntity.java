package gamescene;

public class CreditButtonEntity extends motion.SpriteEntity implements cave.PointerListener
{
	private motion.TextureSprite creditButton = null;
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
		menuScene = gamescene.CreditButtonEntity.objectAsGamesceneMainMenuScene((java.lang.Object)getScene());
		height = menuScene.getReferenceHeight();
		width = menuScene.getReferenceWidth();
		creditButton = menuScene.addTextureSpriteForSize(menuScene.createTextureForImageResource("credits"), width * 0.30, height * 0.07);
		creditButton.move((width * 0.50) - (creditButton.getWidth() * 0.50), height * 0.70);
		return((motion.Sprite)creditButton);
	}

	public boolean onPointerEvent(cave.PointerEvent event) {
		if(event.action == cave.PointerEvent.DOWN) {
			if(event.isInside(creditButton.getX(), creditButton.getY(), creditButton.getWidth(), creditButton.getHeight())) {
				menuScene.pushScene((motion.Scene)new gamescene.CreditScene());
			}
		}
		return(false);
	}
}
