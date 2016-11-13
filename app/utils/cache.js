import Cookies from 'js-cookie';

module.exports = {

    get: function(key) {
        let value = this.hasSessionStorage() ? sessionStorage.getItem(key) : Cookies.get(key);
        let obj = this.isJSON(value);
        value = obj !== false ? obj : value;

        // keep a consistant return value of null for empty
        return typeof(value) === 'undefined' ? null : value;
    },

    set: function(key, value) {
        value = typeof(value) == 'object' ? JSON.stringify(value) : value;
        return this.hasSessionStorage() ? sessionStorage.setItem(key, value) : Cookies.set(key, value);
    },

    hasSessionStorage: function() {
        return typeof(sessionStorage) !== 'undefined';
    },

    isJSON: function(str) {
        let isJSON = true;
        let obj = {};

        // Attempt to parse as JSON
        try {
            obj = JSON.parse(str);
        } catch (e) {
            isJSON = false;
        }

        return isJSON ? obj : isJSON;
    },

    remove(key) {
        return this.hasSessionStorage() ? sessionStorage.removeItem(key) : Cookies.remove(key);
    }

};
