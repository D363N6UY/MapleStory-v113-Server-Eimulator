/* Franz the Owner
	Orbis VIP Eye Change.
*/
var status = -1;
var facetype;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("Well well well, welcome to the Orbis Plastic Surgery! Would you like to transform your face into something new? With a #b#t5152005##k, you can let us take care of the rest and have the face you've always wanted~!");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	cm.askAvatar("I can totally transform your face into something new... how about giving us a try? For #b#t5152005##k, you can get the face of your liking...take your time in choosing the face of your preference.", facetype);

    } else if (status == 2) {
	if (cm.setAvatar(5152005, facetype[selection]) == 1) {
	    cm.sendOk("Enjoy your new and improved face!");
	} else {
	    cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	}
	cm.dispose();
    }
}