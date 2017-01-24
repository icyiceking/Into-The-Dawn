package gamescene;

public class SquareEntity extends motion.SpriteEntity implements cave.PointerListener
{
	private motion.TextureSprite square = null;
	private double width = 0.00;
	private double height = 0.00;
	private gamescene.GameScene gameScene = null;
	private boolean isPressedUp = true;
	private double speedY = 0.00;

	// var speedX as double

	private double px = 0.00;

	static public gamescene.GameScene objectAsGamesceneGameScene(java.lang.Object o) {
		if(o instanceof gamescene.GameScene) {
			return((gamescene.GameScene)o);
		}
		return(null);
	}

	@Override
	public motion.Sprite createSprite() {
		gameScene = gamescene.SquareEntity.objectAsGamesceneGameScene((java.lang.Object)getScene());
		height = gameScene.getReferenceHeight();
		width = gameScene.getReferenceWidth();
		square = gameScene.addTextureSpriteForSize(gameScene.createTextureForImageResource("square"), width * 0.10, width * 0.10);
		square.move((double)(0 + square.getWidth()), height - square.getHeight());
		return((motion.Sprite)square);
	}

	public boolean onPointerEvent(cave.PointerEvent event) {
		if(event.action == cave.PointerEvent.DOWN) {
			isPressedUp = true;
		}
		return(false);
	}

	public void jump() {
		speedY -= 0.01 * 0.10;
		move(getX(), getY() - speedY);
		if(speedY <= -0.02) {
			isPressedUp = false;
			speedY = 0.02;
			square.move(getX(), height - square.getHeight());
		}
	}

	@Override
	public void tick(cape.TimeValue gameTime, double delta) {
		super.tick(gameTime, delta);
		px = square.getX();
		px -= delta / 5;
		if(isPressedUp) {
			jump();
		}
	}
}
