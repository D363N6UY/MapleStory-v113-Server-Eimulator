/* Nerbit
	NLC Random Eye Change.
*/
var status = -1;
var beauty = 0;
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
	cm.sendNext("Hi, I pretty much shouldn't be doing this, but with a #b#t5152033##k, I will do it anyways for you. But don't forget, it will be random!");
    } else if (status == 1) {
	cm.sendYesNo("If you use the regular coupon, your face may transform into a random new look...do you still want to do it using #b#t5152033##k?");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012];
	} else {
	    facetype = [21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	
	if (cm.setRandomAvatar(5152033, facetype) == 1) {
	    cm.sendOk("Enjoy your new and improved face!");
	} else {
	    cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	}
	cm.dispose();
    }
}