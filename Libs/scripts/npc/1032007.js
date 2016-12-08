/* Author: Xterminator
	NPC Name: 		Joel
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("You must have some business to take care of here, right?");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("hi你好我是船票販售員\r\n通往天空之城的單程船票每張是#b5000楓幣");
    } else if (status == 1) {
	if (cm.getMeso() < 5000) {
	    cm.sendNext("請確認你的擁有#b5000楓幣");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-5000);
	    cm.gainItem(4031045, 1);
            cm.sendOk("船票給你吧")
	    cm.dispose();
	}
    }
}