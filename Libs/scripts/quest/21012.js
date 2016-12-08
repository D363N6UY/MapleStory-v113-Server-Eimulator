var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("Hm... You don''t think that would help? Think about it. It could help, you know...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("Welcome hero! What's that? You want to know how I knew who you were? That's easy. I eavesdropped on some people talking loudly next to me. I''m sure the rumor has spread through the entire island already. Everyone knows that you've returned!");
    } else if (status == 1) {
	qm.sendNextPrev("Anyway, what's with the long face? Is something wrong? Hm? You''re not sure whether you''re really a hero or not? You lost your memory?! No way... It must be because you were trapped inside the ice for hundreds and hundreds of years.");
    } else if (status == 2) {
	qm.askAcceptDecline("Hm, how about you trying out that sword? Wouldn't that bring back some memories? How about #bfighting some monsters#k?");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNext("It just so happens that there are a lot of #r#o9300383#s#k near here. How about defeating just #r3#k of them? It could help you remember a thing or two.");
    } else if (status == 4) {
	qm.sendNextPrevS("Ah, you''ve also forgotten how to use your skills? #bPlace skills in the quick slots for easy access.#k You can also place consumable items in the slots, so use the slots to your advantage.", 1);
    } else if (status == 5) {
	qm.summonMsg(17);
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
	qm.sendYesNo("Hm... Your expression tells me that the exercise didn''t jog any memories. But don''t you worry. They''ll come back, eventually. Here, drink this potion and power up! \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
    } else if (status == 1) {
	qm.gainItem(2000022, 10);
	qm.gainItem(2000023, 10);
	qm.gainExp(57);
	qm.forceCompleteQuest();
	qm.sendOkS("#b(Even if you''re really the hero everyone says you are... What good are you without any skills?)#k", 2);
	qm.dispose();
    }
}