//Storage Controller
//Item Controller
//UIController
//Main App Controller (Where everything will meet)


//Storage Controller
const StorageCtrl = (function(){

  //public methods
  return{
    storeItem:function(item){
      let items = [];
      //Check if any items in LS
      if(localStorage.getItem('items') === null){
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }else{
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromLS: function(){
      let items = [];
      if(localStorage.getItem('items') === null){
        items = [];
      }else{
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem){
      let items = StorageCtrl.getItemsFromLS();

      items.forEach(function(item, index){
        if(updatedItem.id === item.id){
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id){
      let items = StorageCtrl.getItemsFromLS();

      items.forEach(function(item, index){
        if(id === item.id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function(){
      localStorage.removeItem('items');
    }
  }
})();

//Item Controller
const ItemCtrl = (function(){
  //Item Constructor
  const Item = function(id,name,calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data Structure / State
  const data ={
    items: StorageCtrl.getItemsFromLS(),
    currentItem: null,
    totalCalories:0
  }


    //Public Methods
  return {
    getItems: function(){
      return data.items;
    },
    logData:function(){
      return data;
    },
    addItem: function(name, calories){
      //Generate Id
      let ID;
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      }else{
        ID = 0;
      }

      //Calories to Number
      calories = parseInt(calories);
      
      //Create new item
      newItem = new Item(ID, name, calories);
      //Add to items array
      data.items.push(newItem);
      return newItem;
    },
    getItemById: function(id){
      let found = null;
      //loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      //Calories to num
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      //Get IDs
      const ids = data.items.map(function(item){
        return item.id;
      });
      //Get index
      const index = ids.indexOf(id);
      //remove item from array
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    getTotalCalories: function(){
      let total = 0;

      data.items.forEach(function(item){
        total+=item.calories;
      });

      data.totalCalories = total;
      return data.totalCalories;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    }
  }
})();
























//UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList:"#item-list",
    listItems: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    clearBtn: ".clear-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
  }

  //Public Methods
  return{
    populateItemList:function(items){
      let html = '';
      items.forEach(function(item){
        html +=`
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `
      })
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function(){
      return UISelectors;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem: function(item){
      //Show list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      //Create li element
      const li = document.createElement("li");
      li.className = 'collection-item';
      li.id = `item-${item.id}`;

      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      
      //Insert Item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // convert node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');
        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
          `
        }
      })

    },
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //nodelist to array
      listItems = Array.from(listItems);

      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){ 
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    }
  }
})();


















//App (App Controller Main)
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
    //Load Event Listeners
    const loadEventListeners = function(){
      //Get UI Selectors
      const UISelectors = UICtrl.getSelectors();
      //Add item event
     document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

     //Disable submit on enter and edit state
     document.addEventListener('keypress', function(e){
       if(e.keyCode === 13 || e.which === 13){
         e.preventDefault();
         return false;
       }
     });

     //Edit icon click event
     document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

     //Update item event
     document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

     //Delete item event
     document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

      //Back button event
      document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

      //Clear button event
      document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

    }

    //Add item Submit
    const itemAddSubmit = function(e){
      //Get Form Input from UICtrl
      const input = UICtrl.getItemInput();
      
      //Input validation
      if(input.name !== '' && input.calories !== ''){
        //Add Item to data structure
        const newItem = ItemCtrl.addItem(input.name, input.calories);

        //Add Item to UI List
        UICtrl.addListItem(newItem);
      }

      //Get totalCalories and add to ui
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      //Store in Local Storage
      StorageCtrl.storeItem(newItem);

      //Clear input fields
      UICtrl.clearInput();
      e.preventDefault();
    }

    //Click edit item
    const itemEditClick = function(e){
      if(e.target.classList.contains('edit-item')){
        //Get list item id
        const listId = e.target.parentNode.parentNode.id;

        
        //break into an array
        const listIdArr = listId.split("-");
        const id = parseInt(listIdArr[1]);

        //Get item
        const itemToEdit = ItemCtrl.getItemById(id);
        
        //Set current Item
        ItemCtrl.setCurrentItem(itemToEdit);

        //Add item to form
        UICtrl.addItemToForm();
      }

      e.preventDefault();
    }

     //Update item submit
     const itemUpdateSubmit = function(e){
       //Get item input
      const input = UICtrl.getItemInput();

      //Update item from DS
      const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

      //Update UI
      UICtrl.updateListItem(updatedItem);

      //update total calories
      const updatedTotalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(updatedTotalCalories);

      //Update local Storage
      StorageCtrl.updateItemStorage(updatedItem);

       //clear input
       UICtrl.clearEditState();
      e.preventDefault();
    }

    //Delete item submit
    const itemDeleteSubmit = function(e){
      //Get current item  
      const itemToDelete = ItemCtrl.getCurrentItem();

      //Delete from data structure
      ItemCtrl.deleteItem(itemToDelete.ID);

      //Delete from UI
      UICtrl.deleteListItem(itemToDelete.id);

      //Update total calories
      const updatedTotalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(updatedTotalCalories);

      //Delete from local storage
      StorageCtrl.deleteItemFromStorage(itemToDelete.id);

      //Clear edit state
      UICtrl.clearEditState();

      e.preventDefault()
    }

    //Clear items event
    const clearAllItemsClick = function(){
      //Delete all items from data structure
      ItemCtrl.clearAllItems();

      //Delete all items from UI
      UICtrl.removeItems();

      //Update total calories
      const updatedTotalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(updatedTotalCalories);

      //Clear local storage
      StorageCtrl.clearItemsFromStorage();

      //hide UL
      UICtrl.hideList();
    }


  //Public Methods
  return{
    init: function(){
      //Clear Edit State/ Set initial state
      UICtrl.clearEditState();
      console.log('App Iniatilizing');
      //Items from ItemCtrl Data Structure
      const items = ItemCtrl.getItems();

      //Check if there are items
      if(items.length === 0){
        UICtrl.hideList();
      }else{
      //Populate
      UICtrl.populateItemList(items); 
      }
      
      //Get totalCalories and add to ui
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      //Load Event Listener
      loadEventListeners();
    }
  }
})(ItemCtrl, StorageCtrl, UICtrl);


//Initialiaze app
App.init();