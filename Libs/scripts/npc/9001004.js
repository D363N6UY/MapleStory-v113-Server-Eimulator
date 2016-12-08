var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			cm.sendSimple("Man... It is cold!!!~ How can I help you?\r\n#L0#Leave the event game.#l\r\n#L1#Buy the weapon (Wooden Club 1 meso)#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendYesNo("If you leave now, you can't participate in this event for the next 24 hours. Are you sure you want to leave?");
			} else if (selection == 1) {
				if (cm.getPlayer().getMeso() < 1 || !cm.canHold(1322005)) {
					cm.sendOk("You don't have enough mesos or you don't have any space in your inventory.");
				} else {
					cm.gainItem(1322005, 1);
					cm.gainMeso(-1); //lool
				}
				cm.dispose();
			}
		} else if (status == 2) {
			var map = cm.getSavedLocation("EVENT");
			if (map > -1) {
				cm.warp(map, 0);
			} else {
    				cm.warp(910000000, 0);
			}
			cm.dispose();
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}