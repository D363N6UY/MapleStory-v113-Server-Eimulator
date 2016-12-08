var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
        
    if (status == 0) {
	if (cm.haveItem(4031025)) {
	    cm.sendNext("I laid my hand on the statue but nothing had happened.\r\nProbably because of Pink Viola that I have, because it looks like it only interferes with the power of the statue.");
	    cm.safeDispose();
	} else if (cm.haveItem(4031028)) {
	    cm.sendNext("I laid my hand on the statue but nothing had happened.\r\nProbably because of White Viola that I have, because it looks like it only interferes with the power of the statue.");
	    cm.safeDispose();
	} else if (cm.haveItem(4031026)) {
	    cm.sendNext("I laid my hand on the statue but nothing had happened.\r\nProbably because of Blue Viola that I have, because it looks like it only interferes with the power of the statue.");
	    cm.safeDispose();
	} else {
	    cm.sendYesNo("Once I lay my hand on the statue, a strange light covers me and it feels like I am being sucked into somewhere else. Is it okay to be moved to somewhere else randomly just like that?");
	}

    } else if (status == 1) {
	if (cm.getQuestStatus(2052) == 1) {
	    cm.warp(105040310, 0);
	} else if (cm.getQuestStatus(2053) == 1) {
	    cm.warp(105040312, 0);
	} else if (cm.getQuestStatus(2054) == 1) {
	    cm.warp(105040314, 0);
	}
	cm.dispose();
    }
}	


