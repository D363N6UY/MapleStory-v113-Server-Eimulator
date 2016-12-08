/*
	? - Victoria Road: Pet-Walking Road (100000202)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendNext("#b(I didn't think much of it, so I didn't touch it.)");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("#b(I can see something covered in grass. Should I pull it out?)");
    } else if (status == 1) {
	cm.sendNext("#b(Yuck... it's pet poop!)");
	cm.gainItem(4031922, 1);
	cm.dispose();
    }
}