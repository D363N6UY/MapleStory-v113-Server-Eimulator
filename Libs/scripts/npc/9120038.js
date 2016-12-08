/*
	NPC Name: 		Dida
	Map(s): 		2095 Park
	Description: 		Battle starter
 */
var status = -1;

function start() {
    if (cm.getMapId() == 802000310) {
		if (cm.getPlayer().getClient().getChannel() != 6) {
			cm.sendOk("This boss may only be attempted on channel 6.");
			cm.dispose();
			return;
		}
	var em = cm.getEventManager("2095_tokyo");

	if (em == null) {
	    cm.sendOk("The event isn't started, please contact a GM.");
	    cm.dispose();
	    return;
	}
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("2095_tokyo");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("Are you interested in becoming the leader of the expedition Squad?");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("2095_tokyo");
	    if (type == -1) {
		cm.sendOk("The squad has ended, please re-register.");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("2095_tokyo");
		if (memberType == 2) {
		    cm.sendOk("You been banned from the squad.");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		} else if (memberType == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("Your task is to acquire 10 energy transmitter.. \r\n#b#L0#Check out members#l \r\n#b#L1#Remove member#l \r\n#b#L2#Edit restricted list#l \r\n#r#L3#Enter map#l \r\n#b#L4#I need Simplified Electric Pulse Transmitter#l");
	    }
	    } else {
			var eim = cm.getDisconnected("2095_tokyo");
			if (eim == null) {
				cm.sendOk("The squad's battle against the boss has already begun.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("2095_tokyo");
			if (eim == null) {
				cm.sendOk("The battle against the boss has already begun.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
				status = 2;
			}
	}

    } else {
	status = 25;
	cm.sendNext("Do you want to get out now?");
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("2095_tokyo", 5, " has been named the Leader of the squad. If you would you like to join please register for the Expedition Squad within the time period.")) {
				cm.sendOk("You have been named the Leader of the Squad. For the next 5 minutes, you can add the members of the Expedition Squad.");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("2095_tokyo", "2095_tokyo")) {
			cm.sendOk("Error... please try again.");
		}
		cm.safeDispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("2095_tokyo", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("2095_tokyo", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		} else {
		    cm.sendOk("You are already part of the squad.");
		}
	    } else {// withdraw
		var baa = cm.addMember("2095_tokyo", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		} else {
		    cm.sendOk("You are not part of the squad.");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("2095_tokyo", 0)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("2095_tokyo", 1)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("2095_tokyo", 2)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    status = 13;
		    cm.sendNext("#b#t4032202##k, don't forget to place it in front of Marr.")
		} else if (selection == 4) { // Transmitter
		    status = 17;
		    cm.sendNext("Take this, It's an important piece of item from dad, but this should enough to drive that robot far away. Can you please leave it in front of Marr?");
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("2095_tokyo", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("2095_tokyo", selection);
	    }
	    cm.dispose();
	    break;
	case 13:
	    status = 14;
	    cm.sendNextPrev("The opponent you are facing is using #b#t4032192##k as the driving force. You'll need to elliminate the enermies and gather up of them, then immediately send them to Marr, so she can run away.");
	    break;
	case 14:
	    status = 15;
	    cm.sendNextPrev("That should be no more than enough for 20 minutes. I suggest you run away within 20 minutes!");
	    break;
	case 15:
	    status = 16;
	    cm.sendNextPrev("The #b#t4032192##k you've gathered up should be handed to Marr by the Leader of the Squad!");
	    break;
	case 16:
	    if (cm.getSquad("2095_tokyo") != null) {
		var dd = cm.getEventManager("2095_tokyo");
		dd.startInstance(cm.getSquad("2095_tokyo"), cm.getMap());
	    } else {
		cm.sendOk("Due to an unknown error, the request for squad has been denied.");
	    }
	    cm.dispose();
	    break;
	case 17:
	    cm.gainItem(4032202, 1);
	    cm.sendNextPrev("Be careful. Please the item in front of marr in 6 minutes, or the mission is a failure.");
	    cm.dispose();
	    break;
	case 25:
	    cm.warp(802000210, 0);
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}