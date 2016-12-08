/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("What do you want to do?#b\n\r #L0#Go to Fishing Map#l\r\n#L1#Buy fishing nets#l#k");
    } else if (status == 1) {
		if (selection == 0) {
			cm.warp(cm.getMapId() == 970020000 ? 970020005 : 970020000, 0);
			cm.dispose();
		} else {
			cm.sendYesNo("It requires 300000 meso for 120 nets. Do you want to purchase?");
		}
    } else if (status == 2) {
	    if (cm.canHold(2270008,120) && cm.getMeso() >= 300000) {
		if (!cm.haveItem(2270008)) {
		    cm.gainMeso(-300000);
		    cm.gainItem(2270008, 120);
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