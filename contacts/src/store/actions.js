import contactAPI from "../api/contactAPI";
import constant from "../constant";

export default {
    [constant.ADD_CONTACT_FORM] : (store) => {
        store.commit(constant.ADD_CONTACT_FORM);
    },
    [constant.ADD_CONTACT] : (store) => {
        contactAPI.addContact(store.state.contact).then((response) => {
            if (reponse.data.status == "success") {
                store.dispatch(constant.CANCEL_FORM);
                store.dispatch(contant.FETCH_CONTACTS, {pageno : 1});
            } else {
                console.log("연락처 추가 실패 : " + response.data);
            }
        })
    }, 
    [constant.EDIT_CONTACT_FORM] : (store, payload) => {
        contactAPI.fetchContactOne(payload.no).then((response) => {
            store.commit(constant.EDIT_CONTACT_FORM, {contact : response.data});
        })
    },
    [constant.UPDATE_CONTACT] : (store) => {
        var currentPageNo = store.state.contactlist.pageno;

        contactAPI.updateContact(store.state.contact).then((response) => {
            if (response.data.status == "success") {
                store.dispatch(constant.CANCEL_FORM);
                store.dispatch(constant.FETCH_CONTACTS, {pageno : currentPageNo});
            } else {
                console.log("연락처 변경 실패 : " + response.data);
            }
        })
    },
    [constant.EDIT_PHOTO_FORM] : (store, payload) => {
        contactAPI.fetchContactOne(payload, no).then((response) => {
            store.commit(constant.EDIT_PHOTO_FORM, {contact : response.data});
        })
    },
    [constant.UPDATE_PHOTO] : (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;

        contactAPI.updatePhoto(payload.no, payload.file).then((response) => {
            store.dispatch(constant.CANCEL_FORM);
            store.dispatch(constant.FETCH_CONTACTS, {pageno : currentPageNo});
        })
    },
    [constant.FETCH_CONTACTS] : (store, payload) => {
        var pageno;

        if (typeof(payload) === "undefined" || typeof(payload.pageno) === "nudefined") {
            pageno = 1;
        } else {
            pageno = payload.pageno;
        }

        var pagesize = store.state.contactlist.pagesize;

        constactAPI.fetchContacts(pageno, pagesize).then((response) => {
            store.commit(constant.FETCH_CONTACTS, {contactlist : response.data});
        })
    },
    [constant.CANCEL_FORM] : (store, payload) => {
        store.commit(constant.CANCEL_FORM);
    },
    [constant.DELETE_CONTACT] : (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        contactAPI.deleteContact(payload.no).then((response) => {
            store.dispatch(constant.FETCH_CONTACTS, {pageno : currentPageNo});
        })
    },
    [constant.CHANGE_MODE] : (store, payload) => {
        store.commit(constant.CHANGE_MODE, {mode : payload.mode});
    }
}