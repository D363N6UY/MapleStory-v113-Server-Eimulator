var mapid = new Array(200000110,200000120,200000130,200000140,200000150);
var platform = new Array("魔法森林","玩具城","神木村","武陵桃園","納希沙漠");
var flight = new Array("船","船","船","Hak","Geenie");
var menu;
var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if(mode == 0) {
	cm.sendOk("請確認你要去哪裡，然後點我前往平台。");
	cm.dispose();
	return;
    }
    if(mode == 1)
	status++;
    else
	status--;
    if(status == 0) {
	menu = "Hi 請選擇你想前往的平台";
	for(var i=0; i < platform.length; i++) {
	    menu += "\r\n#L"+i+"##b前往"+platform[i]+"#k#l";
	}
	cm.sendSimple(menu);
    } else if(status == 1) {
	select = selection;
	cm.sendYesNo("即使你近錯了平台，也可以回到這裡找我重新選擇平台， 你確定要移動到#b通往"+platform[select]+"的平台#k?");
    } else if(status == 2) {
	cm.warp(mapid[select], 0);
	cm.dispose();
    }
}