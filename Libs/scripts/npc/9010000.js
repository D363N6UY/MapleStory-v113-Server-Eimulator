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
var eQuestChoices = new Array (1302064,1312032,1322054,1332055,1332056,1372034,1382039,1402039,1412027,1422029,1432040,1442051,
								1452045,1462040,1472055,
								1092045,1092046,1092047,
						//頭盔開始
						1002508,1002509,1002510,1002511

						); 

var eQuestPrizes = new Array();

var requiredItemArr = new Array(
					[1302020,4001126],
					[1412011,4001126],
					[1422014,4001126],
					[1332025,4001126],
					[1332025,4001126],
					[1382009,4001126],
					[1382012,4001126],
					[1302020,4001126],
					[1412011,4001126],
					[1412014,4001126],
					[1432012,4001126],
					[1442024,4001126],
					[1452022,4001126],
					[1462019,4001126],
					[1472030,4001126],
					//盾牌開始
					[1092030,4001126],
					[1092030,4001126],
					[1092030,4001126],
					//頭盔開始
					[4001126],
					[4001126,1002508],
					[4001126,1002509],
					[4001126,1002510]
					);
var requiredItemNumArr = new Array(
					[1,2000],
					[1,1500],
					[1,1500],
					[1,2000],
					[1,2000],
					[1,2000],
					[1,1500],
					[1,2000],
					[1,1500],
					[1,1500],
					[1,2000],
					[1,1500],
					[1,2000],
					[1,2000],
					[1,2000],
					//盾牌開始
					[1,2000],
					[1,2000],
					[1,2000],
					//楓葉頭盔
					[100],
					[200,1],
					[300,1],
					[400,1]
					);
var requiredMoneyArr = new Array(50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000
						//盾牌開始
						,500000,500000,500000
						//頭盔開始
						,500,5000,50000,500000

								);
var Allscroll = new Array(2040315,2040912,2043013,2043108,2043208,2043308,2043708,
					2043808,2044008,2044108,2044208,2044308,2044408,2044508,2044608,2044708
					);
								
var requiredItem  = 0;

var requiredItemNum = 0;

var lastSelection = -1;

var remoney = 0;

var reward;

var itemSet;


function action(mode, type, selection) {
	if (status == 2 && mode != 1 ) {
		cm.sendOk("好好慶祝吧!有問題歡迎隨時找我～");
		cm.safeDispose();
		return;
	}
	status++;

    if (status == 0) {
		var eQuestChoice = makeChoices(eQuestChoices);
		cm.sendSimple(eQuestChoice);
    } else if (status == 1){
		if(selection == 23){
			cm.sendYesNo("你確定要兌換#b週年慶卷軸#k嗎?\r\n需要#b#v4001126##t4001126#300個#k\r\n" );
			status++;
		}else{
			requiredItem = requiredItemArr[selection];
			requiredItemNum = requiredItemNumArr[selection];
			reward = eQuestChoices[selection];
			remoney = requiredMoneyArr[selection];
			var eRequired = makeRequire(requiredItem,requiredItemNum,reward,remoney);
			cm.sendSimple(eRequired);
		}
		lastSelection = selection;
	}else if(status == 2){	
		cm.sendYesNo("你確定你要製作#b#v"+ reward + "##t" + reward +"##k嗎?\r\n" );
    }else if(status == 3){
		if(lastSelection == 23){
			itemSet = (Math.floor(Math.random() * Allscroll.length));
			reward = Allscroll[itemSet];
			if(!cm.haveItem(4001126,300)){
					cm.sendOk("你的楓葉不夠\r\n" );
					cm.dispose();
					return ;
			}
			if(!cm.canHold(reward)){
				cm.sendOk("你的物品欄已經滿了！\r\n" );
				cm.dispose();
				return ;
			}
			cm.gainItem(4001126,-300);
			cm.gainItem(reward,1);
			cm.sendOk("希望您開心！\r\n" );
			cm.dispose();
			
		}else{
			for(var i = 0 ; i < requiredItem.length ; i++){
				if(!cm.haveItem(requiredItem[i],requiredItemNum[i])){
					cm.sendOk("還沒收集完成嗎？\r\n" );
					cm.dispose();
					return ;
				}
			}
			if(cm.getMeso() < remoney){
				cm.sendOk("你的錢不夠！\r\n" );
				cm.dispose();
				return ;
			}
			if(!cm.canHold(reward)){
				cm.sendOk("你的物品欄已經滿了！\r\n" );
				cm.dispose();
				return ;
			}
			cm.gainMeso(-remoney);
			for(var i=0 ; i < requiredItem.length ; i++ ){
				cm.gainItem(requiredItem[i] , -requiredItemNum[i]);
			}
			cm.gainItem(reward,1,true);
			cm.sendOk("完成囉！繼續欣賞美麗的楓葉吧！\r\n" );
			cm.dispose();
		}
	}
}

function makeChoices(a){
    var result  = "這個世界充滿了美麗的#b#v4001126##t4001126##k\r\n若是你收集了足夠的#b#v4001126##t4001126##k，還可以和我交換禮物呢!\r\n";
    for (var x = 0; x< a.length; x++){
		result += " #L" + x + "##v" + a[x] + "##t" + a[x] + "##l\r\n";
    }
	result += "#L23##b我想兌換週年慶卷軸...#k#l\r\n";
    return result;
}

function makeRequire(a,b,re,m){
    var result  = "注意！做出來的物品#b素質都是隨機#k的唷~\r\n製作#b#v"+re+"##t"+re+"##k需要以下物品：\r\n\r\n";
    for (var x = 0; x< a.length; x++){
		result += "#v" + a[x] + "##t" + a[x] + "# " + b[x]+ "個#l\r\n";
    }
	result +="#fUI/UIWindow.img/QuestIcon/7/0##b"+m+"#k\r\n";
    return result;
}
