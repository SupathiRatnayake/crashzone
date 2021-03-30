import firebase from "../firebase";

const db = firebase.ref("/advertisements");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(advertisement) {
    return db.push(advertisement);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();