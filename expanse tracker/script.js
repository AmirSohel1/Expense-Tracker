let item_list = [];


function add() {
  let total = 0;
    let item_name = document.getElementsByClassName('itm')[0].value;
    let item_price = parseFloat(document.getElementsByClassName('amt')[0].value);
    
    // Check if item name and price are provided
    if (!item_name || isNaN(item_price)) {
        alert("Please enter valid item name and price.");
        return;
    }

    let newItem = {
        name: item_name,
        price: item_price
    };
    item_list.push(newItem);
    
    console.log(item_list);
    localStorage.setItem('item_list', JSON.stringify(item_list));

    var items = document.getElementsByClassName('item-list')[0];
    items.innerHTML = "";

    item_list.forEach(function(item) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `<div class="item">
            <h2>${item.name}:</h2>
            <p>₹</p>
            <h4>${item.price}</h4>
        </div>`;
        items.appendChild(newDiv);

        total += item.price;
        let tot = document.getElementById('total');
        tot.innerHTML = total.toFixed(2); // Ensure total is displayed with 2 decimal places
    });

    if (item_list.length > 5) {
        var addScroll = document.getElementsByClassName('item-list')[0];
        addScroll.style.overflowY = 'scroll';
    }
}

function clearAll() {
    localStorage.removeItem('item_list'); // Clear local storage
    item_list = []; // Clear item list
    total = 0; // Reset total
    document.getElementsByClassName('item-list')[0].innerHTML = ""; // Clear item list display
    document.getElementById('total').innerHTML = total; // Reset total display
}
