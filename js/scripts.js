function newItem(){

//1. Adding a new item to the list of items:
   let inputValue = $('#input').val();
   let li = $('<li></li>');
   li.append(inputValue);

   if (inputValue === '') {
     alert('You must write something!');
   } else {
     $('#list').append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
     li.addClass('strike');
   };

   li.on('dblclick', crossOut);

 //3(i). Adding the delete button "X" and delete function
   let crossOutButton = $('<crossOutButton>X</crossOutButton>');
   li.append(crossOutButton);

   function deleteItem() {
     li.remove();
   };

   crossOutButton.on('click', deleteItem);

 // 4. Reordering the items:
    $('#list').sortable();
};
