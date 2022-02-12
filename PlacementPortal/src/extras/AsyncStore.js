import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStore {
    async storeData(key, value) {
        try{
            return await AsyncStorage.setItem(key, value);
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    async getData(key) {
        try{
            return await AsyncStorage.getItem(key);
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    async removeItem(key){
        try{
            return await AsyncStorage.removeItem(key);
        }catch(err){
            console.log(e);
            return false;
        }
    }
}

export default AsyncStore;
