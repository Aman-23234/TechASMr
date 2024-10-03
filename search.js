function searchItems() {
    // Get the search input value
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // Get all the product items
    let productItems = document.querySelectorAll('.product-item');
    
    // Loop through each product item and display only the matching ones
    productItems.forEach(function(item) {
        let itemText = item.textContent.toLowerCase();
        
        if (itemText.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
