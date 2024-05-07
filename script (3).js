function showPage(page) {
    const mainContent = document.getElementById('mainContent');
    switch (page) {
      case 'home':
        mainContent.innerHTML = '<h2>Welcome to our E-Commerce Website!</h2><p>This is the home page.</p>';
        break;
      case 'products':
        mainContent.innerHTML = '<h2>Our Products</h2><p>List of products will be displayed here.</p>';
        break;
      case 'cart':
        mainContent.innerHTML = '<h2>Your Shopping Cart</h2><p>Your shopping cart items will be displayed here.</p>';
        break;
      case 'account':
        mainContent.innerHTML = '<h2>Your Account</h2><p>Your account information will be displayed here.</p>';
        break;
      default:
        mainContent.innerHTML = '<h2>Page Not Found</h2>';
    }
  }
  
  
  