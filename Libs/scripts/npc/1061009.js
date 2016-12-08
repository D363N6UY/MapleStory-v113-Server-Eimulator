/* Door of Dimension
	Enter 3rd job event
*/

function start() {
    if (cm.getQuestStatus(100101) == 1 && !cm.haveItem(4031059)) {
	var em = cm.getEventManager("3rdjob");
	if (em == null) {
	    cm.sendOk("三轉任務好像有些問題");
	} else {
	    em.newInstance(cm.getName()).registerPlayer(cm.getChar());
	}
    } else {
	cm.sendOk("lul.");
    }
    cm.dispose();
}

function action(mode, type, selection) {

}