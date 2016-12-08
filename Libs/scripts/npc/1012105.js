/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    status = -1;
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
	cm.sendNext("Well, hello! Welcome to the Henesys Skin-Care! Would you like to have a firm, tight, healthy looking skin like mine?  With a #b#t5153000##k, you can let us take care of the rest and have the kind of skin you've always wanted~!");
    } else if (status == 1) {
	cm.sendStyle("With our specialized machine, you can see yourself after the treatment in advance. What kind of skin-treatment would you like to do? Choose the style of your liking.", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153000, skin[selection]) == 1) {
	    cm.sendOk("Enjoy your new and improved skin!");
	} else {
	    cm.sendOk("Um...you don't have the skin-care coupon you need to receive the treatment. Sorry, but I am afraid we can't do it for you...");
	}
	cm.dispose();
    }
}
