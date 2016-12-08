/* Kedrick
	Fishking King NPC
*/

/* global cm */

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("What do you want to do?\n\r #b#L0#Enter the Fishing Lagoon#l \n\r #L1#Buy fishing baits#l \n\r #L2#Buy fishing chair#l \n\r #L3#Use the delicious Bait Can#l \n\r #L4#Guide on fishing#l \n\r #L5##i1142146:#Trade 500 Golden Fish Egg (Medal of Fishing King [Period : 30 days])#l");
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.haveItem(5340000) || cm.haveItem(5340001)) {
		if (cm.haveItem(3011000)) {
		    cm.saveLocation("FISHING");
		    cm.warp(741000200);
		    cm.dispose();
		} else {
		    cm.sendNext("You must have the fishing chair in order to fish!");
		    cm.safeDispose();
		}
	    } else {
		cm.sendNext("You must have the fishing rod in order to fish!");
		cm.safeDispose();
	    }
	} else if (sel == 1) {
	    cm.sendYesNo("It requires 3000 meso for 120 baits. Do you want to purchase?");
	} else if (sel == 2) {
	    if (cm.haveItem(3011000)) {
		cm.sendNext("You already have a fishing chair. Each character can only have 1 fishing chair.");
	    } else {
		if (cm.canHold(3011000) && cm.getMeso() >= 50000) {
		    cm.gainMeso(-50000);
		    cm.gainItem(3011000, 1);
		    cm.sendNext("Happy Fishing~");
		} else {
		    cm.sendOk("Please check if you have the required meso or sufficient inventory slot.");
		}
	    }
	    cm.safeDispose();
	} else if (sel == 3) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(2300001, 120);
		    cm.gainItem(5350000,-1);
		    cm.sendNext("Happy Fishing~");
		} else {
		    cm.sendNext("You already have fishing bait.");
		}
	    } else {
		cm.sendOk("Please check if you have sufficient inventory slot and the Delicious Bait Can from cash shop with you.");
	    }
	    cm.safeDispose();
	} else if (sel == 4) {
	    cm.sendOk("You need to be above level 10, with a fishing rod, fishing baits and a fishing chair in order to enter the Fishing Lagoon. You will reel in a catch every 1 minute. Talk to lagoon's NPC Madrick to check out your catch record!");
	    cm.safeDispose();
	} else if (sel == 5) {
	    if (cm.haveItem(4000518, 500)) {
		if (cm.canHold(1142146)) {
		    cm.gainItem(4000518, -500);
		    cm.gainItemPeriod(1142146, 1, 30);
		    cm.sendOk("Woah, I guess you must have spend quite a lot of effort in the Fishing Lagoon fishing for these eggs. Here, take it. The #bFishing King Medal#k!")
		} else {
		    cm.sendOk("Please check if you have sufficient inventory slot for it.");
		}
	    } else {
		cm.sendOk("Please get me 500 #i4000518:# Golden Fish Egg in exchange for a Fishing King medal!")
	    }
	    cm.safeDispose();
	}
    } else if (status == 2) {
	if (sel == 1) {
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 3000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-3000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("Happy Fishing~");
		} else {
		    cm.sendNext("You already have fishing bait.");
		}
	    } else {
		cm.sendOk("Please check if you have the required meso or sufficient inventory slot.");
	    }
	    cm.safeDispose();
	}
    }
}