function enter(pi) {
		if(pi.isQuestFinished(2318)){
			if(!pi.haveItem(2430014)){
				pi.warp(106020400);
			} else{
				pi.playerMessage("First, use the Killer Mushroom Spores to remove the barrier.");
			}
		}
		return true;
}