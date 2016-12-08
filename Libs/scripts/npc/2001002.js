/*
 *  Metal Bucket Snowman - Happy Ville NPC
 */

function start() {
    cm.sendSimple("Hello~ I'm #p2001002#. You can enter the room which has the  humongous tree through me! For more information, talk to #b#p2001000##k. Which room will you enter? \n\r #b#L0#The room with the 1st tree#l \n\r #L1#The room with the 2nd tree#l \n\r #L2#The room with the 3rd tree#l \n\r #L3#The room with the 4th tree#l \n\r #L4#The room with the 5th tree#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000006 + selection, 0);
    }
    cm.dispose();
}
