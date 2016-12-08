/* Pata
	Mu Lung Random/VIP Eye Color Change.
*/
var status = -1;
var beauty = 0;
var facetype;

function action(mode, type, selection) {
    if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("Hey, I'm Pata, and I am a cosmetic lens expert here in Mu Lung. I believe your eyes are the most important feature in your body, and with #b#t5152042##k or #b#t5152041##k, I can prescribe the right kind of cosmetic lenses for you. Now, what would you like to use? \r\n#L0#Cosmetic Lenses: #i5152042##t5152042##l\r\n#L1#Cosmetic Lenses: #i5152041##t5152041##l");
    } else if (status == 1) {
	facetype = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	facetype[0] = teye + 100;
	facetype[1] = teye + 200;
	facetype[2] = teye + 300;
	facetype[3] = teye + 400;
	facetype[4] = teye + 500;
	facetype[5] = teye + 600;
	facetype[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("If you use the regular coupon, you'll be awarded a random pair of cosmetic lenses. Are you going to use a #b#t5152042##k and really make the change to your eyes?");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our new computer program, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", facetype);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152042, facetype) == 1) {
		cm.sendOk("Enjoy your new and improved face!");
	    } else {
		cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	    }
	} else {
	    if (cm.setAvatar(5152041, facetype[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved face!");
	    } else {
		cm.sendOk("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
	    }
	}
	cm.safeDispose();
    }
}