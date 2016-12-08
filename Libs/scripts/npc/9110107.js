/*
	NPC Name: 		Palakeen
	Map(s): 		Zipangu - Mushroom Shrine
	Description: 		Kaede Castle teleporter
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("Wait, are you not going to ride this?");
	    cm.dispose();
	    return;
	}
	status--;
    }
    switch (cm.getMapId()) {
	case 800040000: {
	    if (status == 0) {
		cm.sendNext("We are the bearers of palankeen~! Let the bearers take you anywhere, even to Sakura's Ninja Castle~!");
	    } else if (status == 1) {
		cm.sendYesNo("Oh what? What is it? Do you want to go visit Mushroom Shrine?");
	    } else if (status == 2) {
		cm.sendNext("Okay, I got it! Just let us do the work, and you'll get there in the blink of an eye! Oh, and this won't cost you any money. Today's a good day for me, so I'll just let you get on it for free! Now, doesn't that make you feel good or what? Anyway, off we go!");
	    } else if (status == 3) {
		cm.warp(800000000);
		cm.dispose();
	    }
	    break;
	}
	default: {
	    if (status == 0) {
		cm.sendNext("We are the bearers of palankeen~! Let the bearers take you anywhere, even to Sakura's Ninja Castle~!");
	    } else if (status == 1) {
		cm.sendYesNo("Oh what? What is it? Do you want to go visit Ninja Castle");
	    } else if (status == 2) {
		cm.sendNext("Okay, I got it! Just let us do the work, and you'll get there in the blink of an eye! Oh, and this won't cost you any money. Today's a good day for me, so I'll just let you get on it for free! Now, doesn't that make you feel good or what? Anyway, off we go!");
	    } else if (status == 3) {
		cm.warp(800040000);
		cm.dispose();
	    }
	    break;
	}
    }
}