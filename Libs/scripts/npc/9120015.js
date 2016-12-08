/*
	Konpei - Showa Town(801000000)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendSimple ("What do you want from me?\r #L0##bGather up some information on the hideout.#l\r\n#L1#Take me to the hideout#l\r\n#L2#Nothing#l#k");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("I can take you to the hideout, but the place is infested with thugs looking for trouble. You'll need to be both incredibly strong and brave to enter the premise. At the hideaway, you'll find the Boss that controls all the other bosses around this area. It's easy to get to the hideout, but the room on the top floor of the place can only be entered ONCE a day. The Boss's Room is not a place to mess around. I suggest you don't stay there for too long; you'll need to swiftly take care of the business once inside. The boss himself is a difficult foe, but you'll run into some incredibly powerful enemies on you way to meeting the boss! It ain't going to be easy.");
	    } if (selection == 1) {
		cm.sendNext("Oh, the brave one. I've been awaiting your arrival. If these\r\nthugs are left unchecked, there's no telling what going to\r\nhappen in this neighborhood. Before that happens, I hope\r\nyou take care of all them and beat the boss, who resides\r\non the 5th floor. You'll need to be on alert at all times, since\r\nthe boss is too tough for even wisemen to handle.\r\nLooking at your eyes, however, I can see that eye of the\r\ntiger, the eyes that tell me you can do this. Let's go!");
	    } if (selection == 2) {
		cm.sendOk("I'm a busy person! Leave me alone if that's all you need!");
	    } if(selection != 1) {
		cm.dispose();
	    }
	} else if (status == 2) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	}
    }
}