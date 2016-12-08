/* Denma the Owner
	Henesys VIP Eye Change.
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
	cm.sendNext("馬猴燒酒 你想不想換張帥氣的臉龐呢? 只需要一張 #b#t5152032##k, 你就可以擁有召喚騎士團的臉龐了");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20044, 23009, 20037, 20036, 23036, 20043, 23028, 23034, 20080, 23061, 23020];
	} else {
	    facetype = [21042, 24129, 24016, 24024, 24006, 24005, 24033, 24034, 21035, 21034, 21072];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	cm.askAvatar("你看你喜歡哪張臉龐 只需要#b#t5152032##k, 就可以幫你換成召喚騎士團的臉龐了", facetype);
    } else if (status == 2){
	if (cm.setAvatar(5152032, facetype[selection]) == 1) {
	    cm.sendOk("Enjoy your new and improved face!");
	} else {
	    cm.sendOk("看來你沒有道具呢 馬猴燒酒");
	}
	cm.dispose();
    }
}
