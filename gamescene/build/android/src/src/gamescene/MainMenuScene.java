package gamescene;

public class MainMenuScene extends motion.SpriteSceneWithEntities
{
	private motion.TextureSprite background = null;
	private double height = 0.00;
	private double width = 0.00;
	private motion.SpriteEntity play = null;
	private motion.SpriteEntity credit = null;

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		background = addTextureSpriteForSize(createTextureForImageResource("backgroundmain"), width, height);
		background.move((double)0, (double)0);
		addEntity((motion.Entity)(credit = (motion.SpriteEntity)new gamescene.CreditButtonEntity()));
		addEntity((motion.Entity)(play = (motion.SpriteEntity)new gamescene.PlayButtonEntity()));
	}

	public motion.Sprite getPlayButton() {
		return((motion.Sprite)play);
	}

	public motion.Sprite getCreditButton() {
		return((motion.Sprite)credit);
	}

	@Override
	public void cleanup() {
		removeSprite((motion.Sprite)background);
		removeEntity((motion.Entity)play);
		removeEntity((motion.Entity)credit);
	}
}
