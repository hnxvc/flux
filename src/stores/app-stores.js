import AppDispatcher from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import Event from 'events';

const CHANGE_EVENT = 'change';

class AppStore extends Event.EventEmitter {
    constructor(props) {
        super(props);
        this._catalog = [
            {
                id: 1,
                title: "Widget #1",
                cost: 1
            }, {
                id: 2,
                title: "Widget #2",
                cost: 2
            }, {
                id: 3,
                title: "Widget #3",
                cost: 3
            }
        ];
        this._cartItems = [];

        this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));
    }

    handleAction(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case AppConstants.ADD_ITEM:
                this._addItem(action.item);
                this.emitChange();
                break;

            case AppConstants.REMOVE_ITEM:
                this._removeItem(action.index);
                this.emitChange();
                break;

            case AppConstants.INCREASE_ITEM:
                this._increaseItem(action.index);
                this.emitChange();
                break;

            case AppConstants.DECREASE_ITEM:
                this._decreaseItem(action.index);
                this.emitChange();
                break;

            default:
                break;
        }
        return true;
    }

    _removeItem(index) {
        this._cartItems[index].inCart = false;
        this
            ._cartItems
            .slice(index, 1);
    }

    _increaseItem(index) {
        this._cartItems[index].qty++;
    }

    _decreaseItem(index) {
        if (this._cartItems[index].qty > 1) {
            this._cartItems[index].qty++;
        } else {
            this._removeItem(index);
        }
    }

    _addItem(item) {
        if (!item.inCart) {
            item['qty'] = 1;
            item['inCart'] = true;
            this
                ._cartItems
                .push(item);
        } else {
            this
                ._cartItems
                .forEach((cartItem, i) => {
                    if (cartItem.id === item.id) {
                        this._increaseItem(i);
                    }
                })
        }
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback)
    }

    getCart(){
        return this._cartItems;
    }

    getCatelog(){
        return this._catalog;
    }
}

export default new AppStore();
