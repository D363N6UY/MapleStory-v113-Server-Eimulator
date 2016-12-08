var cost = 20000;

function start() {
    status = -1;
    em = cm.getEventManager("AirPlane");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    if (mode == 0 && menu == 0) {
	cm.sendNext("I am here for a long time. Please talk to me again when you change your mind.");
	cm.dispose();
    }
    if (mode == 0 && menu == 1) {
	cm.sendOk("Please confirm the departure time you wish to leave. Thank you.");
	cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("Hello there~ I am Irene from Singapore Airport. I was transferred to #m103000000# to celebrate new opening of our service! How can i help you?\r\n#L0##bI would like to buy a plane ticket to Singapore#k#l\r\n#L1##bLet me go in to the departure point.#k#l");
    } else if (status == 1) {
	menu = selection;
	if (menu == 0) {
	    cm.sendYesNo("The ticket will cost you 20,000 mesos. Will you purchase the ticket?");
	} else if (menu == 1) {
	    cm.sendYesNo("Would you like to go in now? You will lose your ticket once you go in~ Thank you for choosing Wizet Airline.");
	}
    } else if (status == 2) {
	if (menu == 0) {
	    if (!cm.canHold(4031731) || cm.getMeso() < cost) {
		cm.sendOk("I don't think you have enough meso or empty slot in your ETC inventory. Please check and talk to me again.");
	    } else {
		cm.gainMeso(-cost);
		cm.gainItem(4031731, 1);
	    }
	    cm.dispose();
	} else if(menu == 1) {
	    if(em == null) {
		cm.sendNext("Event error, please restart your server for solution");
		cm.dispose();
	    } else if (!cm.haveItem(4031731)) {
		cm.sendNext("Please do purchase the ticket first. Thank you~");
		cm.dispose();
	    } else if (em.getProperty("entry").equals("true")) {
		cm.sendYesNo("It looks like there's plenty of room for this ride. Please have your ticket ready so I can let you in, The ride will be long, but you'll get to your destination just fine. What do you think? Do you want to get on this ride?");
	    } else if(em.getProperty("entry").equals("false") && em.getProperty("docked").equals("true")) {
		cm.sendNext("The plane is getting ready for takeoff. I'm sorry, but you'll have to get on the next ride. The ride schedule is available through the usher at the ticketing booth.");
		cm.dispose();
	    } else {
		cm.sendNext("We are sorry but the gate is closed 1 minute before the departure.");
		cm.dispose();
	    }
	}
    } else if (status == 3) {
	cm.gainItem(4031731, -1);
	cm.warp(540010100);
	cm.dispose();
    }
}