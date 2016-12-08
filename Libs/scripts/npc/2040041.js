/*
	Aqua Balloon - LudiPQ 6th stage NPC
*/

function start() {
    cm.sendNext("Hello, and welcome to the 6th stage of the Ludibrium Party Quest. Look here, and you'll see a number of boxes. All you have to do, is find the right combination, and press up on it to teleport up. But, if you get it wrong, you will be teleported back down to the bottom. Good luck!");
}

function action(mode, type, selection) {
    cm.dispose();
}