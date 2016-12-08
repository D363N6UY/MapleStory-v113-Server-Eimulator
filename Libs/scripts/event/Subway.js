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
    em.warpAllPlayer(600010004, 600010005);
    em.warpAllPlayer(600010002, 600010003);
    em.schedule("arrived", 60000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(600010005, 600010001);
    em.warpAllPlayer(600010003, 103000100);
    scheduleNew();
}

function cancelSchedule() {
}