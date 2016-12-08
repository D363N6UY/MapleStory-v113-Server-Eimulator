/* ===========================================================
			Resonance
	NPC Name: 		Dragon
	Map(s): 		Dream World: Dream Forest(900010200)
	Description: 	Warps to Utah's House
=============================================================
Version 1.0 - Script Done.(31/5/2010)
=============================================================
*/

var status = 0;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if(status == 0)
			cm.sendNext("You, who are destined to be a Dragon Master...You have finally arrived.");
		if(status == 1)
			cm.sendNextPrev("Go and fulfill your duties as the Dragon Master...");
		if(status == 2){
			cm.warp(900090101);
			cm.dispose();
		}
	}
}