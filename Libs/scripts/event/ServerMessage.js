var Message = new Array(
    "蜈蚣王開了喔 解完農民的拜託去找公安A打50個黑羊毛就可以進去了 可以1~4人一起打喔",
    "如果遇到不能點技能/能力值/不能進傳點/不能點NPC,請在對話框打@ea就可以了",
    "/找人 玩家名字 可以用來找人喔",
    "有問題來RC1108523說喔",
    "一頻弓箭手訓練場I缺人哈拉",
    "寵物跟精靈商人可以去自由市場入口找蛋糕禮物盒領");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 300000);
}

function cancelSchedule() {
	setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[楓之谷幫助]" + Message[Math.floor(Math.random() * Message.length)]);
}