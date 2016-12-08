importPackage(Packages.tools);

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 1);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis())
        nextTime += 300 * 1000;
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array("如果有任何卡住、無法動彈，請使用@EA","道館、BOSSPQ皆能獲得點數");
    em.getChannelServer().broadcastPacket(MaplePacketCreator.yellowChat("[楓之谷幫助]" + Message[Math.floor(Math.random() * Message.length)]));
}