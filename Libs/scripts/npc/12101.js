/* Author: Xterminator
	NPC Name: 		Rain
	Map(s): 		Maple Road : Amherst (1010000)
	Description: 		Talks about Amherst
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
	
    if (status == 0) {
	cm.sendNext("這是一個名為#b楓葉村#k的城鎮，位於楓之島的東北部。你知道，楓之島適合初學者，對吧？我很高興這個地方周圍只有弱小的怪物。");
    } else if (status == 1) {
	cm.sendNextPrev("如果你想變得更強，請去#b楓之港#k，那裡有一個港口。乘坐很大的船，前往名為#b維多利亞港#k的地方。與這個小島相比，它的大小是天差地別的。");
    } else if (status == 2) {
	cm.sendPrev("在維多利亞港，你可以選擇你的職業。我聽說有一個裸露的，荒涼的城鎮，劍士住在那個地方。高地...會是怎麼樣的地方？");
    } else if (status == 3) {
	cm.dispose();
    }
}