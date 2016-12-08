/* 
 *  NPC  : Guide Summoner
 *  Maps : Erev Map of the Start // 20021
 */

var status = -1;

function start() {
    cm.sendSimple("Wait! The information listed below can all be obtained simply by playing through Level 10, so it's not something you'll need to learn way in advance. Only the ones that would like to learn these in advance should continue from here on out. \n\r Okay, which of these would you like to learn more of?  \n\r #b#L0#Tell me more about you.#l \n\r #b#L1#Minimap#l \n\r #b#L2#Quest window#l \n\r #b#L3#Inventory#l \n\r #b#L4#Regular attacks#l \n\r #b#L5#Picking up items#l \n\r #b#L6#Equipping an item#l \n\r #b#L7#Skill window#l \n\r #b#L8#How to use Quick Slot#l \n\r #b#L9#Breaking the box#l \n\r #b#L10#Sitting on a chair#l \n\r #b#L11#Raising stats#l \n\r #b#L12#What are Knights of Cygnus?#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
    }
    if (status == 0) {
	if (selection == 0) {
	    cm.sendNext("I am currently serving the Divine Bird, who's responsible for protecting Queen Cygnus and Erev. The Divine Bird ordered me to take care of the Queen's requests, and that was to guide the souls that have arrived in the world of Maple in search of becoming a Knight of Cygnus. That is why I am here, and I will be with you until you become a knight of your own, or if you reach Level 11. If you have any questions, let me know!");
	} else if (selection == 12) {
	    cm.sendOk("The world of Maple had been keeping peace intact for a long time, but I fear that the presence of Black Wizard is slowly creeping back in. In order to stop sinster Black Wizard, the queen decided to form the Knights of cygnus. Once you reach Level 10, you can formally request to become a Knight of Cygnus yourself.");
	    cm.dispose();
	} else {
	    cm.summonMsg(selection);
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNext("But you really don't need to try to figure out everything in such a short amount of time. All the information I have here are basic knowledge of the game that you'll learn simply by playing the game. In fact, I feel that you should only ask if you're either at Level 10 but still clueless on what to do, or if you just want to clarify and double-check what you already know. You really don't need to know everything all at once, so relax.");
    }
}