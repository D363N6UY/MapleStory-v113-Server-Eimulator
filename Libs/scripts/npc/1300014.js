/* ===========================================================
			Resonance
	NPC Name: 		SELF
	Map(s): 		Mushroom Castle: Deep inside Mushroom Forest(106020300)
	Description: 	Upon reaching the magic barrier.
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if (mode == 1)
            status++;
        else
            status--;
		}
	if(status == 0){
		if(cm.isQuestActive(2314))
			cm.PlayerToNpc("This... is a powerful magical barrier that converted #bmushroom spores#k into a powerful form of magic. This cannot be penetrated with brute force. I better report this to #bMinister of Home Affairs#k.");
		else if(cm.isQuestActive(2322))
			cm.PlayerToNpc("Right on the surface of the colossal castle wall is a daunting scene of spine vines tangled up on the wall. How in the world am I going to enter the castle? Oh well, I better report this to #b#p1300003##k first.");
		else {
			cm.PlayerToNpc("I think I may be able to break the barrier using #t2430014#.");
			cm.dispose();
		}
	}if(status == 1){
		if(cm.isQuestActive(2314)){
			cm.ShowWZEffect("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon1");
			cm.forceCompleteQuest(2314);
			cm.dispose();
		} else {
			cm.playerMessage("Please return to the Minister of Home Affairs and report results.");
		}
	}
}
			