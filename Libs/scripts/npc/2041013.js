/* Gina
	Ludibrium Skin Change.
*/
var status = -1;
var skin = Array(0, 1, 2, 3, 4);

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	cm.sendNext("Oh, hello! Welcome to the Ludibrium Skin-Care! Are you interested in getting tanned and looking sexy? How about a beautiful, snow-white skin? If you have #b#t5153002##k, you can let us take care of the rest and have the kind of skin you've always dreamed of!");
    } else if (status == 1) {
	cm.askAvatar("With our specialized machine, you can see the way you'll look after the treatment PRIOR to the procedure. What kind of a look are you looking for? Go ahead and choose the style of your liking~!", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153002, skin[selection]) == 1) {
	    cm.sendOk("Enjoy your new and improved skin!");
	} else {
	    cm.sendOk("Um...you don't have the skin-care coupon you need to receive the treatment. Sorry, but I am afraid we can't do it for you...");
	}
	cm.safeDispose();
    }
}