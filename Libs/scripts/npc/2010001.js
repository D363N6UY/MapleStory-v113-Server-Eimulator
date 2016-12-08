/* Mino the Owner
	Orbis VIP Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hair_Colo_new;


function action(mode, type, selection) {
    if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("Hello I'm Mino. If you have either a #b#t5150005##k or a #b#t5151005##k, then please let me take care of your hair. Choose what you want to do with it. \r\n#L0#Haircut: #i5150005##t5150005##l\r\n#L1#Dye your hair: #i5151005##t5151005##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30270, 30230, 30260, 30280, 30240, 30290, 30340];
	    } else {
		hair_Colo_new = [31040, 31000, 31250, 31220, 31260, 31240, 31110, 31270, 31030, 31230];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? With #b#t5150005##k, I'll take care of the rest for you. Choose the style of your liking!", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo  = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151005##k, I'll take care of the rest. Choose the color of your liking!", hair_Colo_new);
	}
    } else if (status == 2) {
	if (beauty == 1) {
	    if (cm.setAvatar(5150005, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved hairstyle!");
	    } else {
		cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
	    }
	} else {
	    if (cm.setAvatar(5151005, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved hair colour!");
	    } else {
		cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dyle your hair without it. I'm sorry...");
	    }
	}
	cm.safeDispose();
    }
}
