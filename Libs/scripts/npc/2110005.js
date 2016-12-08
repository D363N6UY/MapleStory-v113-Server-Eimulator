function start() {
	if (cm.getMapId() == 260020000) {
		cm.warp(260020700);
                cm.dispose();
	} else { // 260020700
		cm.warp(260020000);
                cm.dispose();
	}
    }