/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Exit - All Line 3 Construction Site
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("This device is connected to the outside. Are you going to give up and leave this place? You'll have to start from\r\nscratch the next time you come in...");
    } else if (status == 1) {
	cm.warp(103000100, 0);
	cm.dispose();
    }
}