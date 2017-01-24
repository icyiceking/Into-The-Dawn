package gamescene;

public class BackgroundEntity extends motion.SpriteEntity
{
	private motion.Sprite spriteScene = null;
	private double width = 0.00;

	@Override
	public motion.Sprite createSprite() {
		motion.Texture txt = ((motion.Scene)scene).createTextureForImageResource("myback");
		width = layer.getReferenceWidth();
		motion.TextureSprite bg = motion.SpriteUtil.addTextureSpriteForSize((motion.Scene)scene, layer, txt, width, layer.getReferenceHeight());
		spriteScene = (motion.Sprite)motion.SpriteUtil.addTextureSpriteForSize((motion.Scene)scene, layer, txt, width, layer.getReferenceHeight());
		bg.move(0.00, 0.00);
		spriteScene.move(width, 0.00);
		return((motion.Sprite)bg);
	}

	@Override
	public void tick(cape.TimeValue gameTime, double delta) {
		super.tick(gameTime, delta);
		double x = sprite.getX() - (delta / 2);
		if(x <= -width) {
			x = (double)0;
		}
		sprite.move(x, 0.00);
		spriteScene.move(width + x, 0.00);
	}
}
