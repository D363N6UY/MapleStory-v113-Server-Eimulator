/*
 *  Scarf Snowman - Happy Ville NPC
 */


function start() {
    cm.sendYesNo("Have you decorated your tree nicely? It's an interesting experience, to say the least, when decorating it with other users, you know? Oh yeah.... are you suuuuuure you want to leave this place?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000000);
    } else {
	cm.sendNext("You need more time decorating trees, huh? If you ever feel like leaving this place, feel free to come talk to me~");
    }
    cm.dispose();
}