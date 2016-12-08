var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("I'm sure it will come in handy during your journey. Please, don't decline my offer.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendSimple("Ah, you're the hero. I've been dying to meet you.  \r\n#b#L0#(Seems a bit shy...)#l");
    } else if (status == 1) {
	qm.askAcceptDecline("I have something I''ve been wanting to give you as a gift for a very long time... I know you''re busy, especially since you''re on your way to town, but will you accept my gift?");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("The parts of the gift have been packed inside a box nearby. Sorry to trouble you, but could you break the box and bring me a #b#t4032309##k and some #b#t4032310##k? I''ll assemble them for you right away.", 1);
    } else if (status == 3) {
	qm.summonMsg(18);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("What? You don't want the potion?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("Ah, you've brought all the components. Give me a few seconds to assemble them... Like this... And like that... and... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
    } else if (status == 1) {
	if (qm.getQuestStatus(21013) == 1) {
	    qm.gainItem(3010062, 1);
	    qm.gainExp(95);
	    qm.forceCompleteQuest();
	}
	qm.sendNextPrevS("Here, a fully-assembled chair, just for you! I''ve always wanted to give you a chair as a gift, because I know a hero can occasionally use some good rest. Tee hee.", 1);
    } else if (status == 2) {
	qm.sendNextPrevS("A hero is not invincible. A hero is human. I''m sure you will face challenges and even falter at times. But you are a hero because you have what it takes to overcome any obstacles you may encounter.", 1);
    } else if (status == 3) {
	qm.summonMsg(19);
	qm.dispose();
    }
}