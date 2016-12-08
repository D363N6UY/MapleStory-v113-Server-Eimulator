/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("Wanna ride to Lith Harbor, you stanky ho?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("FUUUUUU!, COME WITH ME!");
    } else {
	cm.warp(104000000,0);
    }
    cm.dispose();
}