var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getLevel() >= 51) {
	    cm.sendOk("I can only be used under level 51.");
	    cm.dispose();
	} else if (cm.haveItem(5220000)) {
	    cm.sendYesNo("You have some #bGachapon Tickets#k there.\r\nWould you like to try your luck?");
	} else {
	    cm.sendOk("You don't have a single ticket with you. Please buy the ticket at the department store before coming back to me. Thank you.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var itemList = new Array(2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012);
	var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("You have obtained #b#t" + item + "##k.");
	} else {
	    cm.sendOk("Please check your item inventory and see if you have the ticket, or if the inventory is full.");
	}
	cm.safeDispose();
    }
}