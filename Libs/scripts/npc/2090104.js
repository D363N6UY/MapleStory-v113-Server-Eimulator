/* Noma
	Mu Lung Random/VIP Eye Change.
*/
var status = -1;
var beauty = 0;
var facetype;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("Hey, I'm Noma, and I am assiting Pata in changing faces into beautiful things here in Mu Lung. With #b#t5152027##k or #b#t5152028##k, I can change the way you look. Now, what would you like to use? \r\n#L0#Plastic Surgery: #i5152027##t5152027##l\r\n#L1#Plastic Surgery: #i5152028##t5152028##l");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");
	facetype = [];
	beauty = 1;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014, 20009, 20010];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014, 21009, 21011];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("If you use the regular coupon, your face may transform into a random new look...do you still want to do it using #b#t5152027##k?");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("I can totally transform your face into something new... how about giving us a try? For #b#t5152028##k, you can get the face of your liking...take your time in choosing the face of your preference.", facetype);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152027, facetype) == 1) {
		cm.sendOk("Enjoy your new and improved face!");
	    } else {
		cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	    }
	} else {
	    if (cm.setAvatar(5152028, facetype[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved face!");
	    } else {
		cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	    }
	}
	cm.safeDispose();
    }
}