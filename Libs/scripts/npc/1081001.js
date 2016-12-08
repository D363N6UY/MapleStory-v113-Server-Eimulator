/**
	Pison - Florina Beach(110000000)
**/
var status = -1;
var returnmap = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("You must have some business to take care of here. It's not a bad idea to take some rest at #m"+returnmap+"# Look at me; I love it here so much that I wound up living here. Hahaha anyway, talk to me when you feel like going back.");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	returnmap = cm.getSavedLocation("FLORINA");
	cm.sendNext("So you want to leave #b#m110000000##k? If you want, I can take you back to #b#m"+returnmap+"##k.");
    } else if (status == 1) {
	cm.sendYesNo("Are you sure you want to return to #b#m"+returnmap+"##k? Alright, we'll have to get going fast. Do you want to head back to #m"+returnmap+"# now?")
    } else if (status == 2) {
	if (returnmap < 0) {
		returnmap = 104000000;
	}
	cm.warp(returnmap);
	cm.clearSavedLocation("FLORINA");
	cm.dispose();
    }
}
