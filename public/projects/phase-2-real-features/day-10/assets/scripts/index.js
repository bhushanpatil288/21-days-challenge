// Product Data
const products = [
    // Electronics
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 89.99,
        rating: 4.5,
        reviews: 324,
        description: "Premium sound quality with noise cancellation",
        icon: "ri-headphone-line"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 199.99,
        rating: 4.3,
        reviews: 156,
        description: "Track your fitness and stay connected",
        icon: "ri-time-line"
    },
    {
        id: 3,
        name: "USB-C Cable",
        category: "electronics",
        price: 19.99,
        rating: 4.7,
        reviews: 892,
        description: "Durable and fast charging cable",
        icon: "ri-link-m"
    },
    {
        id: 4,
        name: "Portable Charger",
        category: "electronics",
        price: 44.99,
        rating: 4.4,
        reviews: 567,
        description: "20000mAh battery with fast charging",
        icon: "ri-battery-charge-line"
    },
    {
        id: 5,
        name: "Gaming Mouse",
        category: "electronics",
        price: 59.99,
        rating: 4.6,
        reviews: 234,
        description: "High precision with RGB lighting",
        icon: "ri-computer-line"
    },
    {
        id: 6,
        name: "4K Webcam",
        category: "electronics",
        price: 129.99,
        rating: 4.2,
        reviews: 145,
        description: "Crystal clear video for streaming",
        icon: "ri-vidicon-line"
    },

    // Clothing
    {
        id: 7,
        name: "Cotton T-Shirt",
        category: "clothing",
        price: 24.99,
        rating: 4.4,
        reviews: 445,
        description: "Comfortable everyday wear",
        icon: "ri-shirt-2-line"
    },
    {
        id: 8,
        name: "Denim Jeans",
        category: "clothing",
        price: 79.99,
        rating: 4.5,
        reviews: 678,
        description: "Classic blue jeans with premium fit",
        icon: "ri-pant-line"
    },
    {
        id: 9,
        name: "Hoodie Jacket",
        category: "clothing",
        price: 64.99,
        rating: 4.6,
        reviews: 523,
        description: "Warm and stylish for any season",
        icon: "ri-hoodie-line"
    },
    {
        id: 10,
        name: "Sports Leggings",
        category: "clothing",
        price: 49.99,
        rating: 4.3,
        reviews: 289,
        description: "Perfect for yoga and workouts",
        icon: "ri-pant-line"
    },
    {
        id: 11,
        name: "Summer Dress",
        category: "clothing",
        price: 54.99,
        rating: 4.4,
        reviews: 312,
        description: "Light and breathable for summer",
        icon: "ri-dress-line"
    },
    {
        id: 12,
        name: "Wool Sweater",
        category: "clothing",
        price: 74.99,
        rating: 4.5,
        reviews: 201,
        description: "Cozy and warm for cold days",
        icon: "ri-jacket-line"
    },

    // Books
    {
        id: 13,
        name: "JavaScript Advanced",
        category: "books",
        price: 39.99,
        rating: 4.7,
        reviews: 543,
        description: "Master advanced JavaScript concepts",
        icon: "ri-book-line"
    },
    {
        id: 14,
        name: "Web Design Fundamentals",
        category: "books",
        price: 34.99,
        rating: 4.4,
        reviews: 378,
        description: "Learn modern web design principles",
        icon: "ri-book-2-line"
    },
    {
        id: 15,
        name: "React Complete Guide",
        category: "books",
        price: 44.99,
        rating: 4.8,
        reviews: 892,
        description: "Complete course in book form",
        icon: "ri-book-open-line"
    },
    {
        id: 16,
        name: "CSS Mastery",
        category: "books",
        price: 29.99,
        rating: 4.5,
        reviews: 234,
        description: "Become a CSS expert",
        icon: "ri-book-3-line"
    },
    {
        id: 17,
        name: "Node.js Handbook",
        category: "books",
        price: 42.99,
        rating: 4.6,
        reviews: 456,
        description: "Complete guide to backend development",
        icon: "ri-book-2-line"
    },
    {
        id: 18,
        name: "Database Design",
        category: "books",
        price: 49.99,
        rating: 4.5,
        reviews: 189,
        description: "SQL and NoSQL database design",
        icon: "ri-book-line"
    },

    // Accessories
    {
        id: 19,
        name: "Stainless Steel Watch",
        category: "accessories",
        price: 149.99,
        rating: 4.6,
        reviews: 567,
        description: "Elegant and timeless design",
        icon: "ri-time-line"
    },
    {
        id: 20,
        name: "Leather Backpack",
        category: "accessories",
        price: 99.99,
        rating: 4.5,
        reviews: 412,
        description: "Premium leather with spacious compartments",
        icon: "ri-bk-line"
    },
    {
        id: 21,
        name: "Sunglasses",
        category: "accessories",
        price: 79.99,
        rating: 4.4,
        reviews: 234,
        description: "UV protection and stylish frames",
        icon: "ri-glasses-2-line"
    },
    {
        id: 22,
        name: "Canvas Wallet",
        category: "accessories",
        price: 34.99,
        rating: 4.3,
        reviews: 178,
        description: "Durable and compact wallet",
        icon: "ri-wallet-2-line"
    },
    {
        id: 23,
        name: "Crossbody Bag",
        category: "accessories",
        price: 64.99,
        rating: 4.5,
        reviews: 345,
        description: "Perfect for everyday use",
        icon: "ri-handbag-line"
    },
    {
        id: 24,
        name: "Baseball Cap",
        category: "accessories",
        price: 29.99,
        rating: 4.2,
        reviews: 267,
        description: "Adjustable and comfortable fit",
        icon: "ri-hat-2-line"
    }
];

// State
let filteredProducts = [...products];
let currentFilters = {
    search: '',
    category: 'all',
    maxPrice: 1000,
    sort: 'default'
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.category-btn');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const productsContainer = document.getElementById('productsContainer');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
const clearFiltersBtn = document.getElementById('clearFilters');
const sortOptions = document.getElementById('sortOptions');

// Event Listeners
searchInput.addEventListener('input', (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilters.category = btn.dataset.category;
        applyFilters();
    });
});

priceRange.addEventListener('input', (e) => {
    currentFilters.maxPrice = parseInt(e.target.value);
    priceValue.textContent = currentFilters.maxPrice;
    applyFilters();
});

sortOptions.addEventListener('change', (e) => {
    currentFilters.sort = e.target.value;
    applyFilters();
});

clearFiltersBtn.addEventListener('click', () => {
    // Reset all filters
    searchInput.value = '';
    priceRange.value = 1000;
    priceValue.textContent = 1000;
    sortOptions.value = 'default';
    
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    categoryBtns[0].classList.add('active');
    
    currentFilters = {
        search: '',
        category: 'all',
        maxPrice: 1000,
        sort: 'default'
    };
    
    applyFilters();
});

// Filtering Function
function applyFilters() {
    filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = product.name.toLowerCase().includes(currentFilters.search) ||
                            product.description.toLowerCase().includes(currentFilters.search);
        
        // Category filter
        const matchesCategory = currentFilters.category === 'all' || 
                               product.category === currentFilters.category;
        
        // Price filter
        const matchesPrice = product.price <= currentFilters.maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    sortProducts();

    // Render products
    renderProducts();

    // Update result count
    resultCount.textContent = filteredProducts.length;

    // Show/hide no results message
    if (filteredProducts.length === 0) {
        noResults.classList.remove('d-none');
    } else {
        noResults.classList.add('d-none');
    }
}

// Sorting Function
function sortProducts() {
    const sort = currentFilters.sort;

    switch (sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'default':
        default:
            // Keep original order
            filteredProducts.sort((a, b) => a.id - b.id);
    }
}

// Render Products
function renderProducts() {
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const stars = '★'.repeat(Math.floor(product.rating)) + 
                  (product.rating % 1 !== 0 ? '☆' : '');

    card.innerHTML = `
        <div class="product-image category-${product.category}">
            <i class="${product.icon}"></i>
            <span class="product-badge">New</span>
        </div>
        <div class="product-content">
            <small class="product-category">${product.category}</small>
            <h6 class="product-name">${product.name}</h6>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="review-count">${product.reviews} reviews</span>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    <small>USD</small>
                </div>
                <button class="btn-wishlist" title="Add to wishlist">
                    <i class="ri-heart-line"></i>
                </button>
                <button class="btn-add-cart" title="Add to cart">
                    <i class="ri-shopping-cart-line"></i> Add
                </button>
            </div>
        </div>
    `;

    // Add event listeners to buttons
    const wishlistBtn = card.querySelector('.btn-wishlist');
    const addCartBtn = card.querySelector('.btn-add-cart');

    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.classList.toggle('active');
        wishlistBtn.style.background = wishlistBtn.classList.contains('active') ? '#ffebee' : '#f0f0f0';
        wishlistBtn.style.color = wishlistBtn.classList.contains('active') ? '#dc3545' : '#212529';
    });

    addCartBtn.addEventListener('click', () => {
        addCartBtn.textContent = '✓ Added';
        addCartBtn.style.background = '#28a745';
        setTimeout(() => {
            addCartBtn.innerHTML = '<i class="ri-shopping-cart-line"></i> Add';
            addCartBtn.style.background = '#007bff';
        }, 2000);
    });

    return card;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    resultCount.textContent = products.length;
});
