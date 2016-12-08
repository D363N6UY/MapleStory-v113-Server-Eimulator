/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("Here you are, right in front of the hideout! What? You want to return to #m801000000#?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("If you want to return to #m801000000#, then talk to me");
    } else {
	cm.warp(801000000,0);
    }
    cm.dispose();
}