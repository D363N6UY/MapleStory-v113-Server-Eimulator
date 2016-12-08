var status = -1;
var items = Array(5360017, 1102041, 1082149, 5220000);
var itemsp = Array(20, 20, 20, 5);
var itemsu = Array(0, 2, 2, 0); // extra slots, not set.
var itemsq = Array(1, 1, 1, 150);
var itemse = Array(7, -1, -1, -1);
var chairs = Array(3010025, 3010045, 3010054, 3012002, 3010014, 3010068, 3010009, 3010022, 3010023, 3012003, 3010041);
var chairsp = 15;
var fame = 100;
var famep = 5;
var acashp = 3;
var sel = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
    if (status == 0) {
	cm.sendSimple("Hello #r#h ##k! My name is #rAgent W#k. I am the master of #bpoints#k. What would you like?\r\n#b#L0#What are points?#l\r\n#b#L1#Trade points for items#l \r\n#b#L2#Trade points for chairs#l \r\n#b#L3#Trade points for fame#l\r\n#L4#Trade points for A-Cash#l\r\n#L5#How many points do I have?#l#k");
    } else if (status == 1) {
	sel = selection;
	if (selection == 0) {
		cm.sendNext("Points can be achieved through donations, voting, achievements, helping people, or from gamemaster administators. They can be used to trade for really good things, such as equipments, chairs, fame, and A-Cash right here by me! If you save up your points, perhaps there is a greater reward...");
		status = -1;
	} else if (selection == 1) {
		var selStr = "Alright, I can trade these items for points...#b\r\n\r\n";
		for (var i = 0; i < items.length; i++) {
			selStr += "#L" + i + "##v" + items[i] + "##t" + items[i] + "#" + (itemsu[i] > 0 ? "(with " + itemsu[i] + " extra slots)" : "") + " x " + itemsq[i] + " for #e" + itemsp[i] + "#n points#n" + (itemse[i] > 0 ? (" ...lasts #r#e" + itemse[i] + "#n#bdays") : "") + "#l\r\n";
		}
		cm.sendSimple(selStr + "#k");
	} else if (selection == 2) {
		var selStr = "Alright, I can trade these chairs for points...#b\r\n\r\n";
		for (var i = 0; i < chairs.length; i++) {
			selStr += "#L" + i + "##v" + chairs[i] + "##t" + chairs[i] + "# for #e" + chairsp + "#n points#n#l\r\n";
		}
		cm.sendSimple(selStr + "#k");
	} else if (selection == 3) {
		cm.sendYesNo("Fame, is that what you need? Well, I can trade #b#e" + fame + " fame for " + famep + " points.#n#k. Would you like to accept the offer?"); 
	} else if (selection == 4) {
		cm.sendYesNo("A-cash, is that what you need? Well, I can trade #r#e100000 A-Cash for " + acashp + " points.#n#k. Would you like to accept the offer?");
	} else if (selection == 5) {
		cm.sendOk("You have currently #e" + cm.getPlayer().getPoints() + "#n points.");
		cm.dispose();
	}
	} else if (status == 2) {
		if (sel == 1) {
			var it = items[selection];
			var ip = itemsp[selection];
			var iu = itemsu[selection];
			var iq = itemsq[selection];
			var ie = itemse[selection];
			if (cm.getPlayer().getPoints() < ip) {
				cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + ip + ".");
			} else if (!cm.canHold(it, iq)) {
				cm.sendOk("Please free up inventory.");
			} else {
				if (iu > 0) {
					cm.gainItem(it, iq, false, ie, iu);
				} else {
					cm.gainItemPeriod(it, iq, ie);
				}
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - ip);
				cm.sendOk("There! Thank you for those points. I have given you your item. Come again~");
			}
		} else if (sel == 2) {
			var it = chairs[selection];
			if (cm.getPlayer().getPoints() < chairsp) {
				cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + chairsp + ".");
			} else if (!cm.canHold(it)) {
				cm.sendOk("Please free up inventory.");
			} else {
				cm.gainItem(it, 1);
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - chairsp);
				cm.sendOk("There! Thank you for those points. I have given you your chair. Come again~");
			}
		} else if (sel == 3) {
			if (cm.getPlayer().getPoints() < famep) {
				cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + famep + ".");
			} else if (cm.getPlayer().getFame() > (30000 - fame)) {
				cm.sendOk("You have too much fame.");
			} else {
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - famep);
				cm.getPlayer().addFame(fame);
				cm.getPlayer().updateSingleStat(client.MapleStat.FAME, cm.getPlayer().getFame());
				cm.sendOk("There! Thank you for those points, I have given you Fame. Come again~");
			}
		} else if (sel == 4) {
			if (cm.getPlayer().getPoints() < acashp) {
				cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + acashp + ".");
			} else if (cm.getPlayer().getCSPoints(1) > (java.lang.Integer.MAX_VALUE - 100000)) {
				cm.sendOk("You have too much A-Cash.");
			} else {
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - acashp);
				cm.getPlayer().modifyCSPoints(1, 100000, true);
				cm.sendOk("There! Thank you for those points, I have given you A-Cash. Come again~");
			}
		}
		cm.dispose();
    }
}