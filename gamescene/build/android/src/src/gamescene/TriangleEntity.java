package gamescene;

public class TriangleEntity extends motion.SpriteEntity
{
	private motion.TextureSprite triangle = null;
	private double height = 0.00;
	private double width = 0.00;
	private gamescene.GameScene gameScene = null;
	private double px = 0.00;

	static public gamescene.GameScene objectAsGamesceneGameScene(java.lang.Object o) {
		if(o instanceof gamescene.GameScene) {
			return((gamescene.GameScene)o);
		}
		return(null);
	}

	@Override
	public motion.Sprite createSprite() {
		gameScene = gamescene.TriangleEntity.objectAsGamesceneGameScene((java.lang.Object)getScene());
		height = gameScene.getReferenceHeight();
		width = gameScene.getReferenceWidth();
		System.out.println(width);
		triangle = gameScene.addTextureSpriteForSize(gameScene.createTextureForImageResource("redtri"), width * 0.05, width * 0.05);
		triangle.move(width - triangle.getWidth(), height - triangle.getHeight());
		return((motion.Sprite)triangle);
	}

	public boolean isCollide(motion.Sprite a, motion.Sprite b) {
		double r1 = a.getWidth() * 0.60;
		double r2 = a.getHeight() * 0.10;
		double totalR = r1 + r2;
		double dx = a.getX() - b.getX();
		double dy = a.getY() - b.getY();
		double dr = cape.Math.sqrt((dx * dx) + (dy * dy));
		if(dr < totalR) {
			return(true);
		}
		return(false);
	}

	@Override
	public void tick(cape.TimeValue gameTime, double delta) {
		super.tick(gameTime, delta);
		px = triangle.getX();
		px -= delta / 2;
		if(isCollide((motion.Sprite)gameScene.getSquare(), (motion.Sprite)triangle)) {
			gameScene.pushScene((motion.Scene)new gamescene.GameOverScene());
		}
		triangle.move(px, triangle.getY());
	}
}
