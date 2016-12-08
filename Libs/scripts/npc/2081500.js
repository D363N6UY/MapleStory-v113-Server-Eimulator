/*  NPC : Samuel
	Pirate 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 511 || cm.getJob() == 521)) {
	    cm.sendOk("Why do you want to see me? There is nothing you want to ask me.");
	    cm.safeDispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("You're still weak to go to pirate extreme road. If you get stronger, come back to me.");
	    cm.safeDispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6944) == 2) {
		if (cm.getJob() == 511)
		    cm.sendSimple("You're qualified to be a true pirate. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Viper.#l\r\n#b#L1#  Let me think for a while.#l");
		else
		    cm.sendSimple("You're qualified to be a true pirate. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Captain.#l\r\n#b#L1#  Let me think for a while.#l");
	    } else {
		cm.sendOk("You're not ready to make 4th job advancement. When you're ready, talk to me.");
		cm.safeDispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("You don't have to hesitate.... Whenever you decide, talk to me. If you're ready, I'll let you make the 4th job advancement.");
	    cm.safeDispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
	    cm.safeDispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainAp(5);
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 511) {
		    cm.changeJob(512);
		    cm.teachSkill(5121007,0,10); // Barrage
		    cm.teachSkill(5121001,0,10); // Dragon Strike
		    cm.teachSkill(5121002,0,10); // Energy Orb
		    cm.teachSkill(5121009,0,10); // Infusion
		    cm.sendNext("You became the best pirate #bViper#k. Vi[er is good at using #bFake#k to avoid enemy's attack and #bNinja Ambush#k to call hidden colleagues. It attacks the blind side of enemy. ");
		} else if (cm.getJob() == 521) {
		    cm.changeJob(522);
		    cm.teachSkill(5221004,0,10); // Rapidfire
		    cm.teachSkill(5220001,0,10); // Elemental Boost
		    cm.teachSkill(5220002,0,10); // Support Oct
		    cm.teachSkill(5220011,0,10); // Bullseye
		    cm.sendNext("You became the best pirate #bCaptain#k. Captain is good at using #bFake#k to avoid enemy's attack and #bNinja Ambush#k to call hidden colleagues. It attacks the blind side of enemy. ");
		}
	    } else {
		cm.sendOk("You can't proceed as you don't have an empty slot in your inventory. Please clear your inventory and try again.");
		cm.safeDispose();
		return;
	    }
	}
    } else if (status == 2) {
	if (cm.getJob() == 512) {
	    cm.sendNext("This is not all about Viper. Viper is good at fast war. It can throw many stars at one time and may beat off plenty of enemies at once.");
	} else {
	    cm.sendNext("This is not all about Captain. Captain is good at sudden attack. It can attack enemies before they notice and even beat them locked in the darkness.");
	}
    } else if (status == 3) {
	cm.sendNextPrev("Don't forget that it all depends on how much you train.");
    } else if (status == 4) {
	cm.dispose();
    }
}