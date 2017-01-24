package gamescene;

public class GameOverScene extends motion.SpriteSceneWithEntities
{
	private motion.SpriteEntity background = null;
	private motion.TextureSprite gameover = null;
	private gamescene.BackButtonEntity mainMenuButton = null;
	private double height = 0.00;
	private double width = 0.00;
	private motion.TextProperties scoreText = null;
	private motion.TextSprite scoreSprite = null;
	private int score = 0;

	public GameOverScene(int s) {
		score = s;
	}

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		addEntity((motion.Entity)(background = (motion.SpriteEntity)new gamescene.BackgroundEntity()));
		scoreText = motion.TextProperties.forText(cape.String.append("Final Score: ", score));
		scoreText.setTextColor(cave.Color.white());
		scoreText.setFontSizeRelative(0.02 * height);
		scoreText.setFontFamily("Calibri");
		scoreSprite = addTextSprite(scoreText);
		scoreSprite.move((width * 0.50) - (scoreSprite.getWidth() * 0.50), height * 0.20);
		gameover = addTextureSpriteForSize(createTextureForImageResource("gameover"), width * 0.30, height * 0.30);
		gameover.move((width * 0.50) - (gameover.getWidth() * 0.50), (height * 0.50) - (gameover.getHeight() * 0.50));
		addEntity((motion.Entity)(mainMenuButton = new gamescene.BackButtonEntity()));
	}

	@Override
	public void cleanup() {
		removeEntity((motion.Entity)mainMenuButton);
		removeEntity((motion.Entity)background);
	}
}
