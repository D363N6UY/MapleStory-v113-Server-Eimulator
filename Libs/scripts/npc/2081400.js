/*  NPC : Hellin
	Thief 4th job advancement
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
	if (!(cm.getJob() == 411 || cm.getJob() == 421 || cm.getJob() == 433)) {
	    cm.sendOk("Why do you want to see me? There is nothing you want to ask me.");
	    cm.safeDispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("You're still weak to go to thief extreme road. If you get stronger, come back to me.");
	    cm.safeDispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6934) == 2 || cm.getJob() == 433) {
		if (cm.getJob() == 411)
		    cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Night Lord.#l\r\n#b#L1#  Let me think for a while.#l");
		else if (cm.getJob() == 421)
		    cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Shadower.#l\r\n#b#L1#  Let me think for a while.#l");
		else {
		    if (cm.haveItem(4031348) || cm.getQuestStatus(6934) == 2) {
		        cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Dual Master.#l\r\n#b#L1#  Let me think for a while.#l");
		    } else {
			cm.sendNext("You need the Secret Scroll for 10 million meso.");
			cm.dispose();
			return;
		    }
		    
		}
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
	    cm.dispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainAp(5);
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 411) {
		    cm.changeJob(412);
		    cm.teachSkill(4120002,0,10);
		    cm.teachSkill(4121006,0,10);
		    cm.teachSkill(4120005,0,10);
		    cm.sendNext("You became the best thief #bNight Lord#k.");
		} else if (cm.getJob() == 421) {
		    cm.changeJob(422);
		    cm.teachSkill(4220002,0,10);
		    cm.teachSkill(4221007,0,10);
		    cm.teachSkill(4220005,0,10);
		    cm.sendNext("You became the best thief #bShadower#k.");
		} else if (cm.getJob() == 433) {
		    if (cm.getQuestStatus(6934) != 2) {
		    	cm.gainItem(4031348, -1);
		    }
		    cm.changeJob(434);
		    cm.teachSkill(4340001,0,10);
		    cm.teachSkill(4341003,0,10);
		    cm.teachSkill(4341004,0,10);
		    cm.teachSkill(4341006,0,10);
		    cm.teachSkill(4341007,0,10);
		    cm.sendNext("You became the best thief #bDual Master#k.");
		}
	    } else {
		cm.sendOk("You can't proceed as you don't have an empty slot in your inventory. Please clear your inventory and try again.");
		cm.safeDispose();
		return;
	    }
	}
    } else if (status == 2) {
	cm.sendNextPrev("Don't forget that it all depends on how much you train.");
    } else if (status == 3) {
	cm.dispose();
    }
}