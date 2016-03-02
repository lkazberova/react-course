import {EventEmitter} from 'events';
import Model from './Model';
const CHANGE_EVENT = 'CHANGE_EVENT';

class SimpleStore extends EventEmitter {
    constructor(stores,initialState) {
        super();
        this.__stores = stores;
        this.__items = [];
        if (initialState) initialState.forEach(this.add);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAll() {
        return this.__items.slice(); // чтобы вернуть копию, подчеркиваем что на чтение работает
    }

    add = (item) => {
        if (!item.id)
            item.id = this.getNextAvailableId();
        this.__items.push(new Model(item,this.__stores));
        // возвращаем добавленный элемент
        return this.__items.slice(-1)[0];
    };

    getById = (id) =>  {
        return this.__items.filter((item) => item.id == id)[0];
    };

    delete(id) {
        this.__items = this.__items.filter((item) => item.id != id);
    }

    getNextAvailableId = () => {
        return Math.max.apply(null, this.__items.map((item) => item.id)) + 1;
    }
}
export default SimpleStore;