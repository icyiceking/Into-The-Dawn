package gamescene;

public class GameScene extends motion.SpriteSceneWithEntities
{
	private motion.SpriteEntity background = null;
	private motion.SpriteEntity square = null;
	private motion.SpriteEntity triangle = null;
	private motion.SpriteEntity quit = null;
	private double height = 0.00;
	private motion.TextSprite showScore = null;
	private double width = 0.00;
	private double time = 0.00;
	private cape.Random rand = new cape.Random();
	private int score = 0;
	private motion.AudioManager audioManager = null;
	private motion.AudioStream stream = null;

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		addEntity((motion.Entity)(background = (motion.SpriteEntity)new gamescene.BackgroundEntity()));
		motion.TextProperties textProp = motion.TextProperties.forText("Counter");
		textProp.setTextColor(cave.Color.black());
		textProp.setFontSizeRelative(0.75 * height);
		textProp.setFontFamily("Times new roman");
		textProp.setFontIsBold(true);
		showScore = addTextSprite(textProp);
		showScore.move(0.00, height - showScore.getHeight());
		audioManager = motion.AudioManager.forApplication(getContext());
		if(audioManager != null) {
			stream = audioManager.getStreamForResource("music");
		}
		onTimeToPlayStream();
		addEntity((motion.Entity)(square = (motion.SpriteEntity)new gamescene.SquareEntity()));
		addEntity((motion.Entity)(quit = (motion.SpriteEntity)new gamescene.QuitButtonEntity()));
	}

	public motion.SpriteEntity getSquare() {
		return(square);
	}

	@Override
	public void tick(cape.TimeValue gameTime, double delta) {
		int spawner = rand.nextInt((int)1, (int)2);
		super.tick(gameTime, delta);
		time++;
		if((time % 40) == 0) {
			score++;
		}
		showScore.setText(motion.TextProperties.forText(cape.String.append("Counter: ", score)));
		if((time % 100) == 0) {
			if(spawner == 1) {
				addEntity((motion.Entity)(triangle = (motion.SpriteEntity)new gamescene.TriangleEntity()));
			}
		}
		if((time % 105) == 0) {
			if(spawner == 2) {
				addEntity((motion.Entity)(triangle = (motion.SpriteEntity)new gamescene.TriangleEntity()));
			}
		}
	}

	public int getScore() {
		return(score);
	}

	public cape.ApplicationContext getContext() {
		return((cape.ApplicationContext)context);
	}

	public void onTimeToPlayStream() {
		if(stream != null) {
			stream.play();
			stream.setLooping(true);
		}
	}

	public void stopStream() {
		if(stream != null) {
			stream.stop();
		}
	}

	public void removeTriangleSprite() {
		if(triangle.getX() <= -width) {
			removeSprite((motion.Sprite)triangle);
		}
	}

	@Override
	public void cleanup() {
		stopStream();
		removeEntity((motion.Entity)background);
		removeEntity((motion.Entity)square);
		removeEntity((motion.Entity)triangle);
		removeEntity((motion.Entity)quit);
	}
}
