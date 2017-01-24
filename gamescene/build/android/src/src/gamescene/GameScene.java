package gamescene;

public class GameScene extends motion.SpriteSceneWithEntities
{
	private motion.SpriteEntity background = null;
	private motion.SpriteEntity square = null;
	private motion.SpriteEntity triangle = null;
	private motion.SpriteEntity quit = null;
	private double height = 0.00;
	private double width = 0.00;
	private double time = 0.00;
	private cape.Random rand = new cape.Random();
	private int score = 0;

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		addEntity((motion.Entity)(background = (motion.SpriteEntity)new gamescene.BackgroundEntity()));
		addEntity((motion.Entity)(square = (motion.SpriteEntity)new gamescene.SquareEntity()));
		addEntity((motion.Entity)(quit = (motion.SpriteEntity)new gamescene.QuitButtonEntity()));
	}

	public motion.SpriteEntity getSquare() {
		return(square);
	}

	@Override
	public void tick(cape.TimeValue gameTime, double delta) {
		super.tick(gameTime, delta);
		time++;
		if((time % 40) == 0) {
			score++;
		}
		if((time % rand.nextInt((int)85, (int)90)) == 0) {
			addEntity((motion.Entity)(triangle = (motion.SpriteEntity)new gamescene.TriangleEntity()));
		}
	}

	public void removeTriangleSprite() {
		if(triangle.getX() <= -width) {
			removeSprite((motion.Sprite)triangle);
		}
	}

	@Override
	public void cleanup() {
		removeEntity((motion.Entity)background);
		removeEntity((motion.Entity)square);
		removeEntity((motion.Entity)triangle);
		removeEntity((motion.Entity)quit);
	}
}
