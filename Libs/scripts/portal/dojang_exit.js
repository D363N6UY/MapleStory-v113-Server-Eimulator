function enter(pi) { 
    try { 
        pi.warp(pi.getSavedLocation("MULUNG_TC")); 
    } catch(err) { 
        pi.warp(100000000); 
    } 
    return true; 
}  