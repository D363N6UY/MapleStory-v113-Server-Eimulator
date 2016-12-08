var status = -1;
var firstSelection = -1;
var secondSelection = -1;
var ingredients_0 = Array(4011004, 4021007);
var ingredients_1 = Array(4011006, 4021007);
var ingredients_2 = Array(4011007, 4021007);
var ingredients_3 = Array(4021009, 4021007);
var mats = Array();
var mesos = Array(10000000, 20000000, 30000000);

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getMarriageId() > 0) {
	    cm.sendNext("你已經結婚了，不需要再製作戒指!");
	    cm.dispose();
	} else {
	    cm.sendSimple("你好，我可以幫助你甚麼?\r\n#b#L0#製作月光戒指#l\r\n#L1#製作星光戒指#l\r\n#L2#製作金心戒指#l\r\n#L3#製作銀鑽戒指#l#k");
	}
    } else if (status == 1) {
	firstSelection = selection;
	cm.sendSimple("我知道了，你要甚麼尺寸?\r\n#b#L0#1 克拉#l\r\n#L1#2 克拉#l\r\n#L2#3 克拉#l#k");
    } else if (status == 2) {
	secondSelection = selection;
	var prompt = "In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";
	switch(firstSelection) {
	    case 0:
		mats = ingredients_0;
		break;
	    case 1:
		mats = ingredients_1;
		break;
	    case 2:
		mats = ingredients_2;
		break;
	    case 3:
		mats = ingredients_3;
		break;
	    default:
		cm.dispose();
		return;
	}
	for(var i = 0; i < mats.length; i++) {
	    prompt += "\r\n#i"+mats[i]+"##t" + mats[i] + "# x 1";
	}
	prompt += "\r\n#i4031138# " + mesos[secondSelection]; + " meso";
	cm.sendYesNo(prompt);
    } else if (status == 3) {
	var complete = true;
	if (cm.getMeso() < mesos[secondSelection]) {
	    cm.sendOk("No meso, no item.");
		complete = false;
	} else {
	    for (var i = 0; i < mats.length; i++) {
		if (!cm.haveItem(mats[i], 1)) {
		    complete = false;
		    break;
		}
	    }
	    if (!complete) {
		cm.sendOk("No ingredients, no item.");
	    } else {
		cm.sendOk("There we go! Fresh ring made with your materials and mesos! Go propose to someone!");
		cm.gainMeso(-mesos[secondSelection]);
		for (var i = 0; i < mats.length; i++) {
		    cm.gainItem(mats[i], -1);
		}
		cm.gainItem(2240004 + (firstSelection * 3) + secondSelection, 1);
	    }
	}
	cm.dispose();
    }
}