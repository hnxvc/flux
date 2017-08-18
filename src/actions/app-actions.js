import AppDispatcher from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';

class AppActions {
    addItem(item){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    }

    removeItem(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    }

    increaseItem(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        });
    }

    decreaseItem(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        })
    }
}

export default new AppActions();