/*
 * Yai bua - Fortune Teller
 */
var reward = -1;
var itemList = new Array(2022216, 2022217, 2022218, 2022219, 2022220, 2022221, 2022222, 2022223);

function start() {
    cm.sendSimple("Hey, How about telling fortune for yourself?  It might be superstitious but sometimes it is just too accurate.  \r\n#b#L0#Great!  Let me test my luck!#l\r\n#b#L1#Where can I get the Fortune ticket?#l");
}

function action(mode, type, selection) {
    if (selection == 1) {
	cm.sendOk("The #bFortune Ticket#k lies secretly in the #bCash Shop#k with lots of othr interesting items...");
    } else {
	if (!cm.haveItem(5310000, 1)) {
	    cm.sendOk("You will need 1 #bFortune Ticket#k for each time you want your fortune to be told. But it seems like you don't have the #bFortune Ticket#k.. You will be able to find the ticket in the #bCash Shop#k. Please come find me again after obtaining the ticket.");
	} else {
	    reward = itemList[Math.floor(Math.random() * itemList.length)];
	    if (cm.canHold(reward)) {
		cm.gainItem(5310000, -1);
		cm.gainItem(reward, 1);
		cm.sendNext("Let's see. You have picked up #v"+reward+"#. The fortune tells that your protection ability is shining brightly. During certain period, you will be able to accomplish good result if you are on to something. how do you like it? If you are not satisfied, you can always go for another round~");
	    } else {
		cm.sendOk("Please make space in your inventory and try it again.");
	    }
	}
    }
    cm.dispose();
}