/* Roudolph Happyville Warp NPC
   By Moogra
*/

function start() {
    cm.sendYesNo("Do you want to go to the Extra Frosty Snow Zone ?");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.warp(209080000, 0);
    cm.dispose();
}