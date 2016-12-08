var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 2);
    cal.set(java.util.Calendar.MINUTE, 22); //5 mins = time to register
    cal.set(java.util.Calendar.SECOND, 22);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
	nextTime += 1000 * 60 * 142; // 2:22
    }
    setupTask = em.scheduleAtTimestamp("setup", nextTime);
    em.setWorldEvent();
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function setup() {
    em.scheduleRandomEvent();
    em.schedule("scheduleNew", 300000); // ¤­¤ÀÄÁ
}

function seal() {
    em.sealEvent(); 
}