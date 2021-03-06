import firebase from "../firebase.js";
import store from '../store';

// const db = firebase.ref(((store.getters.user.data !== null) ? store.getters.user.data.uid : '') + "/Menu");
const db = firebase.ref();


class MenuDataFunctions {

  getAllForStore(uid) {
    return db.child(uid).child('Order');
  }

  create(uid, tutorial) {
    return db.child(uid).child('Order').push(tutorial);
  }

  new(uid, value) {
    return db.child(uid).child('Order').push(value);
  }

  update(uid, key, value) {
    return db.child(uid).child('Order').child(key).update(value);
  }

  delete(uid, key) {
    return db.child(uid).child('Order').child(key).remove();
  }

  deleteAll(uid) {
    return db.child(uid).child('Order').remove();
  }

  currentDate() {
    //do i need date?
    const current = new Date();
    const date = `${current.getFullYear()}/${
      current.getMonth() + 1
    }/${current.getDate()}`;
    return date;
  }
}

export default new MenuDataFunctions();
