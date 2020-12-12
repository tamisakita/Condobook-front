class LocalStorageUtils {
    set(dataFromAPI) {
      localStorage.setItem("token", JSON.stringify(dataFromAPI));
    }
  
    get() {
      return JSON.parse(localStorage.getItem('token'));
    }
  
    delete() {
      localStorage.removeItem('token');
    }
  }
  
  export default new LocalStorageUtils();