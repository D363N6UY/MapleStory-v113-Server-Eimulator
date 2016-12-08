/* 
 *  NPC   : Kiriko
 *  Maps  : Training Hall 2
 *  FUNC  : Second job Advancement
 */

function start() {
    cm.askAcceptDecline("Have you found all proof of test? Do you want to get out of here?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("You might need some more time.");
    } else {
	cm.warp(130020000, 0);
    }
    cm.dispose();
}