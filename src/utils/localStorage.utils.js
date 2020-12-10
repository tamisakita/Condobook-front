class LocalStorageUtils {
    set(tokenFromAPI) {
      localStorage.setItem("token", JSON.stringify(tokenFromAPI));
    }
  
    get() {
      return JSON.parse(localStorage.getItem('token'));
    }
  
    delete() {
      localStorage.removeItem('token');
    }
  }
  
  export default new LocalStorageUtils();