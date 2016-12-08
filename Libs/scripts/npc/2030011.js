/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/

function start() {
    if (cm.haveItem(4031061)) {
	cm.sendNext( "Great job clearing level 1! Alright ... I'll send you off to where #b#p2030008##k is. Before that!! Please be aware that the various, special items you have acquired here will not be carried out of here. I'll be taking away those items from your item inventory, so remember that. See ya!" );
    } else {
	cm.sendNext("Must have quit midway through. Alright, I'll send you off right now. Before that!! Please be aware that the various, special items you have acquired here will not be carried out of here. I'll be taking away those items from your item inventory, so remember that. See ya!");
    }
}

function action(mode, type, selection){
    if (mode == 1) {
	cm.removeAll(4001015);
	cm.removeAll(4001016);
	cm.removeAll(4001018);
	cm.warp(211042300, 0);
    }
    cm.dispose();
}