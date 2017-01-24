package gamescene;

public class GameOverScene extends motion.SpriteSceneWithEntities
{
	private motion.SpriteEntity background = null;
	private gamescene.BackButtonEntity mainMenuButton = null;
	private double height = 0.00;
	private double width = 0.00;

	@Override
	public void initialize() {
		super.initialize();
		height = getReferenceHeight();
		width = getReferenceWidth();
		addEntity((motion.Entity)(background = (motion.SpriteEntity)new gamescene.BackgroundEntity()));
		addEntity((motion.Entity)(mainMenuButton = new gamescene.BackButtonEntity()));
	}

	@Override
	public void cleanup() {
		removeEntity((motion.Entity)mainMenuButton);
		removeEntity((motion.Entity)background);
	}
}
