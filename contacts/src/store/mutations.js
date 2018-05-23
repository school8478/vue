import constant from "../constant";

export default {
    /*
    [constant.ADD_CONTACT_FORM] : (state) => {
        state.contact = { no : "", name : "", tel : "", address : "", photo : "" };
        state.mode = "add";
        state.currentView = "contactForm";
    },
    [constant.CANCEL_FORM] : (state) => {
        state.currentView = null;
    },
    [constant.EDIT_CONTACT_FORM] : (state, payload) => {
        state.contact = payload.contact;
        state.mode = "update";
        state.currentView = "contactForm";
    },
    [constant.EDIT_PHOTO_FORM] : (state, payload) => {
        state.contact = payload.contact;
        stacte.currentView = "updatePhoto";
    },
    */
    [constant.FETCH_CONTACTS] : (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [constant.FETCH_CONTACT_ONE] : (state, payload) => {
        state.contact = payload.contact;
    },
    [constant.INITIALIZE_CONTACT_ONE] : (state) => {
        state.contact = {
            no : "",
            name : "",
            tel : "",
            address : "",
            photo : ""
        }
    }
}