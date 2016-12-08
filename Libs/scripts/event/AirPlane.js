function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate, 4 min
    em.schedule("takeoff", 300000); // The time to begin the ride, 5 min
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.setProperty("docked","false");
    em.warpAllPlayer(540010100, 540010101);
    em.warpAllPlayer(540010001, 540010002);
    em.schedule("arrived", 60000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(540010002, 103000000);
    em.warpAllPlayer(540010101, 540010000);
    scheduleNew();
}

function cancelSchedule() {
}