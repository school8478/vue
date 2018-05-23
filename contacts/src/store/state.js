import constant from "../constant";
import CONF from "../config.js";

export default {
    //currentView : null,
    //mode : "add",
    contact : {
        no : 0,
        name : "",
        tel : "",
        address : "",
        photo : ""
    },
    contactlist : {
        pageno : 1,
        pagesize : CONF.PAGESIZE,
        totalcount : 0,
        contacts : []
    }
}