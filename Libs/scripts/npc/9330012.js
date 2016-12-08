/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Faito(Showa Exchange Quest) - Showa Town(801000300)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
	    - Base from Sean360 script, thanks
---------------------------------------------------------------------------------------------------
**/

var status = -1;
var eQuestChoices = new Array (4080000,4080001,4080002,4080003,4080004,4080005,4080006,4080007,4080008,4080009,4080010,4080100); 

var eQuestPrizes = new Array();

var requiredItemArr = new Array(
					[4030000,4030001,4030009],
					[4030000,4030010,4030009],
					[4030000,4030011,4030009],
					[4030010,4030001,4030009],
					[4030011,4030010,4030009],
					[4030011,4030001,4030009],
					[4030013,4030014,4030009],
					[4030013,4030016,4030009],
					[4030014,4030016,4030009],
					[4030015,4030013,4030009],
					[4030015,4030014,4030009],
					[4030012]
					);
var requiredItemNumArr = new Array(
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[1,1,1],
					[15]
					);
var requiredMoneyArr = new Array(5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000);

var requiredItem  = 0;

var requiredItemNum = 0;

var lastSelection = -1;

var remoney = 0;

var reward;


function action(mode, type, selection) {
	if (status == 2 && mode != 1 ) {
		cm.sendOk("真可惜");
		cm.safeDispose();
		return;
	}
	status++;

    if (status == 0) {
		var eQuestChoice = makeChoices(eQuestChoices);
		cm.sendSimple(eQuestChoice);
    } else if (status == 1){
		requiredItem = requiredItemArr[selection];
		requiredItemNum = requiredItemNumArr[selection];
		reward = eQuestChoices[selection];
		remoney = requiredMoneyArr[selection];
		var eRequired = makeRequire(requiredItem,requiredItemNum,reward,remoney);
		cm.sendSimple(eRequired);
		lastSelection = selection;
	}else if(status == 2){	
		cm.sendYesNo("你確定你要製作#b#v"+ reward + "##t" + reward +"##k嗎?\r\n" );
    }else if(status == 3){
		for(var i = 0 ; i < requiredItem.length ; i++){
			if( !cm.haveItem(requiredItem[i],requiredItemNum[i]) ){
				cm.sendOk("東西好像不夠耶\r\n" );
				cm.dispose();
				return ;
			}
		}
		if(cm.getMeso() < remoney){
			cm.sendOk("錢不夠\r\n" );
			cm.dispose();
			return ;
		}
		if(!cm.canHold(reward)){
			cm.sendOk("你的物品欄已經滿了\r\n" );
			cm.dispose();
			return ;
		}
		cm.gainMeso(-remoney);
		for(var i=0 ; i < requiredItem.length ; i++ ){
			cm.gainItem(requiredItem[i] , -requiredItemNum[i]);
		}
		cm.gainItem(reward,1);
		cm.sendOk("已經幫你製作完成!\r\n" );
		cm.dispose();
	}
}

function makeChoices(a){
    var result  = "我可以幫你製作小遊戲道具唷!\r\n你想製作?\r\n";
    for (var x = 0; x< a.length; x++){
		result += " #L" + x + "##v" + a[x] + "##t" + a[x] + "##l\r\n";
    }
    return result;
}

function makeRequire(a,b,re,m){
    var result  = "製作#b#v"+re+"##t"+re+"##k需要\r\n\r\n";
    for (var x = 0; x< a.length; x++){
		result += "#v" + a[x] + "##t" + a[x] + "# " + b[x]+ "個#l\r\n";
    }
	result +="#fUI/UIWindow.img/QuestIcon/7/0##b"+m+"#k\r\n";
    return result;
}
