//Storage Controller
//Item Controller
//UIController
//Main App Controller (Where everything will meet)


//Storage Controller

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
    items:[],
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
    getTotalCalories: function(){
      let total = 0;

      data.items.forEach(function(item){
        total+=item.calories;
      });

      data.totalCalories = total;
      return data.totalCalories;
    }
  }
})();


//UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList:"#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories"
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
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    }
  }
})();


//App (App Controller Main)
const App = (function(ItemCtrl, UICtrl){
    //Load Event Listeners
    const loadEventListeners = function(){
      //Get UI Selectors
      const UISelectors = UICtrl.getSelectors();
      //Add item event
     document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
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

      //Clear input fields
      UICtrl.clearInput();
      e.preventDefault();
    }

  //Public Methods
  return{
    init: function(){
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
})(ItemCtrl, UICtrl);


//Initialiaze app
App.init();