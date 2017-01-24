package gamescene;

public class CreditScene extends motion.SpriteSceneWithEntities
{
	private motion.TextureSprite background = null;
	private double height = 0.00;
	private double width = 0.00;

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		background = addTextureSpriteForSize(createTextureForImageResource("gamescene"), width, height);
		background.move((double)0, (double)0);
	}

	@Override
	public void cleanup() {
		super.cleanup();
	}
}
