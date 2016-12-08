function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate
    em.schedule("takeoff", 300000); //The time to begin the ride
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.warpAllPlayer(200000152, 200090400);
    em.warpAllPlayer(260000110, 200090410);
    em.broadcastShip(200000151, 520);
    em.broadcastShip(260000100, 520);
    em.setProperty("docked","false");
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090400, 260000100);
    em.warpAllPlayer(200090410, 200000100);
    em.broadcastShip(200000151, 1548);
    em.broadcastShip(260000100, 1548);
    scheduleNew();
}

function cancelSchedule() {
}