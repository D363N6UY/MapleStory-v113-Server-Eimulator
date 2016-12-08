/*
	Shuri the Tour Guide - Orbis (200000000)
*/

var pay = 2000;
var ticket = 4031134;
var msg;
var check;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("如果你想改變主意再跟我說話。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("Have you heard of the beach with a spectacular view of the ocean called #b#m110000000##k, located a little far from #m"+cm.getMapId()+"#? I can take you there right now for either #b"+pay+" mesos#k, or if you have #b#t"+ticket+"##k with you, in which case you'll be in for free.\r\n\r\n#L0##bI'll pay "+pay+" mesos.#k#l\r\n#L1##bI have #t"+ticket+"##k#l\r\n#L2##bWhat is #t"+ticket+"#?#k#l");
    } else if (status == 1) {
	if (selection == 0 || selection == 1) {
	    check = selection;
	    if (selection == 0) {
		msg = "You want to pay #b"+pay+" mesos#k and leave for #m110000000#?";
	    } else if (selection == 1) {
		msg = "So you have #b#t"+ticket+"##k? You can always head over to #m110000000# with that.";
	    }
	    cm.sendYesNo(msg+" Okay!! Please beware that you may be running into some monsters around there though, so make sure not to get caught off-guard. Okat, would you like to head over to #m110000000# right now?");
	} else if (selection == 2) {
	    cm.sendNext("You must be curious about #b#t"+ticket+"##k. Yeah, I can see that. #t"+ticket+"# is an item where as long as you have in possession, you may make your way to #m110000000# for free. It's such a rare item that even we had to buy those, but unfortunately I lost mine a few weeks ago during a long weekend.");
	    status = 3;
	}
    } else if (status == 2) {
	if (check == 0) {
	    if (cm.getMeso() < pay) {
		cm.sendOk("I think you're lacking mesos. There are many ways to gather up some money, you know, like ... selling your armor ... defeating the monsters ... doing quests ... you know what I'm talking about.");
		cm.safeDispose();
	    } else {
		cm.gainMeso(-pay);
		access = true;
	    }
	} else if (check == 1) {
	    if (!cm.haveItem(ticket)) {
		cm.sendOk("Hmmm, so where exactly is #b#t"+ticket+"##k?? Are you sure you have them? Please double-check.");
		cm.safeDispose();
	    } else {
		access = true;
	    }
	}
	if (access == true) {
	    cm.saveLocation("FLORINA");
	    cm.warp(110000000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	cm.sendNext("You must be curious about #b#t"+ticket+"##k. Yeah, I can see that. #t"+ticket+"# is an item where as long as you have in possession, you may make your way to #m110000000# for free. It's such a rare item that even we had to buy those, but unfortunately I lost mine a few weeks ago during a long weekend.");
    } else if (status == 4) {
	cm.sendPrev("I came back without it, and it just feels awful not having it. Hopefully someone picked it up and put it somewhere safe. Anyway this is my story and who knows, you may be able to pick it up and put it to good use. If you have any questions, feel free to ask");
    } else if (status == 5) {
	cm.dispose();
    }
}