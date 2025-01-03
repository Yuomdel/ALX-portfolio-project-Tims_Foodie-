
        let Items = [];
        function addToCart(name, price) {
            const index = Items.findIndex(item => item.name === name);
            if (index !== -1) {
                Items[index].quantity += 1;
            } else {
                const item = {
                    name: name,
                    price: price,
                    quantity: 1
                };
                Items.push(item);
            }
            updateCartDisplay();
        }
        function deleteFromCart(index) {
            Items.splice(index, 1);
            updateCartDisplay();
        }
        function updateQuantity(index, quantity) {
            Items[index].quantity = quantity;
            updateCartDisplay();
        }
        function checkout() {
            let totalPrice = 0;
            Items.forEach(item => {
                totalPrice += item.price * item.quantity;
            });
            alert(`Total price: #${totalPrice.toFixed(2)}`);
        }
        function updateCartDisplay() {
            const cartElement = document.getElementById('cart-items');
            cartElement.innerHTML = '';
            Items.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'cart-item';
                li.innerHTML = `
                    <span>${item.name} - #${item.price.toFixed(2)} x 
                    <div class="quantity">
                        <button onclick="updateQuantity(${index},
                         ${item.quantity - 1})">-</button>
                        <input type="number" 
                        value="${item.quantity}" 
                        min="1" max="20" 
                        onchange="updateQuantity(${index},
                         this.value)">
                        <button 
                        onclick="updateQuantity(${index},
                         ${item.quantity + 1})">+</button>
                    </div>
                    </span>
                    <button onclick="deleteFromCart(${index})">Delete</button>
                `;
                cartElement.appendChild(li);
            });

			if (document.getElementById("cart-items")) {
				const cartItemsDiv = document.getElementById("cart-items");
				let totalPrice = 0;

				cart.forEach(item => {
					const itemDiv = document.createElement("div");
					itemDiv.textContent =`${item.name} - #${item.price}`;
					cartItemsDiv.appendChild(itemDiv);
					totalPrice += item;

				});

				document.getElementById("total-price").textContent = totalPrice.toFixed(2);
			}
        }