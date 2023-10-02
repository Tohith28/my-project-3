//Fetch the JSON data
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Access the categories array
        const categories = data.categories;

        // Get the catalog container div
        const catalogContainer = document.getElementById('catalog');

        // Loop through categories and products
        categories.forEach(category => {
            // Create a category heading
            const categoryHeading = document.createElement('h2');
            categoryHeading.textContent = category.name;
            catalogContainer.appendChild(categoryHeading);

            // Create a container for products in this category
            const productContainer = document.createElement('div');
            productContainer.className = 'product-container';
            catalogContainer.appendChild(productContainer);

            // Loop through products in the category
            category.products.forEach(product => {
                // Create a product card
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                // Create an image element
                const productImage = document.createElement('img');
                productImage.src = product.image_url;
                productImage.alt = product.name;
                productCard.appendChild(productImage);

                // Create a product name element
                const productName = document.createElement('h3');
                productName.textContent = product.name;
                productCard.appendChild(productName);

                // Create a product description element
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productCard.appendChild(productDescription);

                // Create a product price element
                const productPrice = document.createElement('p');
                productPrice.textContent = '$' + product.price.toFixed(2);
                productCard.appendChild(productPrice);

                // Append the product card to the category container
                productContainer.appendChild(productCard);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });