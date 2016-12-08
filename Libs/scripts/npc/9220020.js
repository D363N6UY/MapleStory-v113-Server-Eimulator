var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (!cm.isLeader()) {
	cm.sendNext("I wish for your leader to talk to me.");
	cm.dispose();
	return;
    }
    if (cm.haveItem(4032248,17)) {
	cm.warpParty(674030200);
	cm.gainItem(4032248,-17);
    } else {
	cm.sendOk("Hey! Find the 17 Maps to MV's Lair from the rocks here!");
    }
    cm.dispose();
}