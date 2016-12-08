/**
	Chief Tatamo - Leafre(240000000)
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226,4000229,4000236,4000237,4000261,4000231,4000238,4000239,4000241,4000242,4000234,4000232,4000233,4000235,4000243);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status > 2) {
	    if(section == 0) {
		cm.sendOk("Please think carefully. Once you have made your decision, let me know.");
	    } else {
		cm.sendOk("Think about it, and then let me know of your decision.");
	    }
	    cm.safeDispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("...Can I help you?\r\n#L0##bBuy the Magic Seed#k#l\r\n#L1##bDo something for Leafre#k#l\r\n#L2##bI want the Dragon Moss Extract#k#l");
    } else if(status == 1) {
	section = selection;
	if(section == 0) {
	    cm.sendSimple("You don't seem to be from out town. How can I help you?#L0##bI would like some #t4031346#.#k#l");
	} else if (section == 1) {
	    cm.sendNext("It is the chief's duty to make the town more hospitable for people to live in, and carrying out the duty will require lots of items. If you have collected items around Leafre, are you interested in donating them?");
	} else {
		if (cm.isQuestActive(3759)) {
			if (cm.haveItem(4032531)) {
				cm.sendNext("Dragon Moss Extract...? I already gave you that!");
			} else {
				cm.sendNext("Dragon Moss Extract...Ah, I see. I will give it to you in this situation.");
				cm.gainItem(4032531,1);
			}
		} else {
			cm.sendNext("What are you talking about? Dragon Moss Extract...?");
		}
		cm.dispose();
	}
    } else if(status == 2) {
	if(section == 0) {
	    cm.sendGetNumber("#b#t4031346##k is a precious iteml I cannot give it to you just like that. How about doing me a little favor? Then I'll give it to you. I'll sell the #b#t4031346##k to you for #b30,000 mesos#k each. Are you willing to make the purchase? How many would you like, then?",0,0,99);
	} else {
	    for (var i=0; i < itemID.length; i++) {
		menu += "\r\n#L"+i+"##b#t"+itemID[i]+"##k#l";
	    }
	    cm.sendNext("Which item would you like to donate?"+menu);
	    cm.safeDispose();
	}
    } else if(status == 3) {
	if(section == 0) {
	    if(selection == 0) {
		cm.sendOk("I can't sell you 0.");
		cm.safeDispose();
	    } else {
		temp = selection;
		cost = temp * 30000;
		cm.sendYesNo("Buying #b"+temp+" #t4031346#(s)#k will cost you #b"+cost+" mesos#k. Are you sure you want to make the purchase?");
	    }
	} else {
	    temp = selection;
	    if(!cm.haveItem(itemID[temp])) {
		cm.sendNext("I don't think you have the item.");
		cm.safeDispose();
	    } else {
		cm.sendGetNumber("How many #b#t"+itemID[temp]+"#k's would you like to donate?\r\n#b< Owned : #c"+itemID[temp]+"# >#k",0,0,"#c"+itemID[temp]+"#");
	    }
	}
    } else if(status == 4) {
	if(section == 0) {
	    if(cm.getMeso() < cost || !cm.canHold(4031346)) {
		cm.sendOk("Please check and see if you have enough mesos to make the purchase. Also, I suggest you check the etc. inventory and see if you have enough space available to make the purchase.");
	    } else {
		cm.sendOk("See you again~");
		cm.gainItem(4031346, temp);
		cm.gainMeso(-cost);
	    }
	    cm.safeDispose();
	} else {
	    count = selection;
	    cm.sendYesNo("Are you sure you want to donate #b"+count+" #t"+itemID[temp]+"##k?");
	}
    } else if(status == 5) {
	if (count == 0 || !cm.haveItem(itemID[temp],count)) {
	    cm.sendNext("Please check and see if you have enough of the item.");
	} else {
	    cm.gainItem(itemID[temp],-count);
	    cm.sendNext("Thank you very much.");
	}
	cm.safeDispose();
    }
}
