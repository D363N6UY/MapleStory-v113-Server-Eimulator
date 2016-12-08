var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("Oh, you still want to look around the new Happy Ville? Yup! That's probably the best idea to take a break in a town like this from the normal life~");
	cm.safeDispose();
    }
  
    // cm.safeDispose();
    if (status == 0) {
	cm.sendYesNo("Oh, you have finished your business here? Would you like to get back to #bFree Market#k? I can send you have to Free Market any time you want. Would you like to go back now?");
    } else if (status == 1) {
	cm.warp(910000000);
	cm.dispose();
    }
}