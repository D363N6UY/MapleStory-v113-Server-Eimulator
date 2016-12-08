/* 
 *  Rooney - Happy Ville NPC
 */

var status = -1;
var firstsel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("I can see that you are busy now~ But if you have some time later on, please don't forget to visit me. You will experience the whole new Happy Ville!");
	cm.safeDispose();
	return;
    }

    if (status == 0) {
	cm.sendSimple("Happy Holidays~ So, you are curious about the happy things that are happening in Happy Ville? Alright then! I will send you to Happy Ville, the Happiest town in Maple World! \n\r #b#L0#Visit the HappyVille#l \n\r #b#L1#Gifts...#l \n\r #b#L2#Santa Encyclopedia#l \n\r #b#L3#I am a Santa Claus!#l");
    } else if (status == 1) {
	firstsel = selection;

	if (selection == 0) {
	    cm.warp(209000000, 0);
	    cm.dispose();
	} else if (selection == 1) {
	    cm.sendNext("It's the Christmas gift~ But, you need to do something for me... Share your warm hearts with other people around you.... Dont you believe in Santa Claus? There are some items can only be recieved in here.");
	} else if (selection == 2) {
	    cm.sendNext("How much do you know about Christmas? Well, the Santa Encyclopedia tells it all! Do you have all six of them? If so, I'm willing to trade 30 Rascal Snowpiece for it.")
	} else {
	    cm.sendSimple("Wow really? If that's so.. \n\r #b#L0#Santa Costume please!#l \n\r #b#L1#Remove Santa Costume please!#l");
	}
    } else if (status == 2) {
	if (firstsel == 2) {
	    if (cm.haveItem(4161037, 1) &&
		cm.haveItem(4161038, 1) &&
		cm.haveItem(4161039, 1) &&
		cm.haveItem(4161040, 1) &&
		cm.haveItem(4161041, 1) &&
		cm.haveItem(4161042, 1)) {

		if (cm.canHold(4032176)) {
		    cm.gainItem(4161037, -1);
		    cm.gainItem(4161038, -1);
		    cm.gainItem(4161039, -1);
		    cm.gainItem(4161040, -1);
		    cm.gainItem(4161041, -1);
		    cm.gainItem(4161042, -1);
		    cm.gainItem(4032176, 30);
		    cm.sendOk("Happy holidays!");
		} else {
		    cm.sendOk("It seems that you do not have any inventory slot for the gift :(");
		}
	    } else {
		cm.sendOk("It seems that you do not have the required items from the naughty monster out to destroy this Christmas! Get it as soon as possible before the night falls as Santa is coming to town!");
	    }
	    cm.safeDispose();
	} else if (firstsel == 3) {
	    if (selection == 0) {
		cm.gainItem(1002225, 1); // Santa Hat
		cm.gainItem(1082101, 1); // Santa Glove
		cm.gainItem(1702210, 1); // Santa Buddy
		cm.gainItem(1012007, 1); // Santa Beard
		cm.gainItem(1051131, 1); // Santa Girl Dress
		cm.gainItem(1050019, 1); // Santa Costume
	    } else if (selection == 1) {
		cm.removeAll(1002225); // Santa Hat
		cm.removeAll(1082101); // Santa Glove
		cm.removeAll(1702210); // Santa Buddy
		cm.removeAll(1012007); // Santa Beard
		cm.removeAll(1051131); // Santa Girl Dress
		cm.removeAll(1050019); // Santa Costume
		// Others
		cm.removeAll(1002720); // Horned Santa Hat
		cm.removeAll(1071003); // Red Santa Boots
		cm.removeAll(1702008); // Santa Sack
		cm.removeAll(1050119); // Santa boy
	    }
	    cm.dispose();
	} else {
	    cm.sendSimple("What kind of gift do you prefer? \n\r #L0##i3010045:# #bFor 2000 Rascal Snowpiece from naughty mobs!#k#l \n\r #L1##i2022042:# #bFor 20 Rascal Snowpiece from naughty mobs!#k#l \n\r #L2##i1122018:# #bFor 3000 Rascal Snowpiece from naughty mobs!#k#l \n\r #L3##i2212000:# #bFor 10 Rascal Snowpiece from naughty mobs!#k#l \n\r #L4##i5490000:# #bFor 200 Rascal Snowpiece from naughty mobs!#k#l \n\r #L5##i5490001:# #bFor 100 Rascal Snowpiece from naughty mobs!#k#l");
	}
    } else if (status == 3) {

	var snow = 0;
	var item = 0;

	switch (selection) {
	    case 0:
		snow = 2000;
		item = 3010045;
		break;
	    case 1:
		snow = 20;
		item = 2022042;
		break;
	    case 2:
		snow = 3000;
		item = 1122018;
		break;
	    case 3:
		snow = 10;
		item = 2212000;
		break;
	    case 4:
		snow = 200;
		item = 5490000;
		break;
	    case 5:
		snow = 100;
		item = 5490001;
		break;
	}
	if (cm.haveItem(4032176, snow)) {
	    if (cm.canHold(item)) {
		cm.gainItem(item, 1);
		cm.gainItem(4032176, -snow);
		cm.sendOk("Happy holidays!");
	    } else {
		cm.sendOk("It seems that you do not have any inventory slot for the gift :(");
	    }
	} else {
	    cm.sendOk("It seems that you do not have the required items from the naughty monster out to destroy this Christmas! Get it as soon as possible before the night falls as Santa is coming to town!");
	}
	cm.safeDispose();
    }
}