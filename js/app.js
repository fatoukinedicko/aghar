/**
 * AGHAR - Artisanat Touareg d'Exception
 * Logique Applicative & Interactions E-Commerce
 * Village Artisanal de Soumbédioune, Dakar
 */

// Application State
const state = {
    category: 'all',
    search: '',
    sort: 'featured',
    currency: 'FCFA',
    cart: [],
    selectedProduct: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadSavedPreferences();
    initProductsCatalog();
    renderProducts();
    renderTestimonials();
    renderCareTips();
    renderFaqs();
    setupEventListeners();
    updateCartUI();
    initHeroShowcase();
    lucide.createIcons();
});

// Load preferences and cart from LocalStorage
function loadSavedPreferences() {
    try {
        const savedCurrency = localStorage.getItem('aghar_currency');
        if (savedCurrency && SHOP_CONFIG.currencies[savedCurrency]) {
            state.currency = savedCurrency;
            const currencySelect = document.getElementById('currencySelector');
            if (currencySelect) currencySelect.value = savedCurrency;
        }

        const savedCart = localStorage.getItem('aghar_cart');
        if (savedCart) {
            state.cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.warn('Erreur de chargement des préférences locales:', e);
    }
}

function saveCart() {
    try {
        localStorage.setItem('aghar_cart', JSON.stringify(state.cart));
    } catch (e) {
        console.warn('Impossible de sauvegarder le panier:', e);
    }
}

// Price Formatter Helper
function formatPrice(priceFCFA) {
    const curr = SHOP_CONFIG.currencies[state.currency] || SHOP_CONFIG.currencies.FCFA;
    return curr.format(priceFCFA);
}

// Render Products Grid
function renderProducts() {
    const container = document.getElementById('productsGrid');
    const emptyState = document.getElementById('productsEmptyState');
    const countBadge = document.getElementById('productCountBadge');
    if (!container) return;

    let filtered = PRODUCTS.filter(p => {
        const matchCategory = (state.category === 'all' || p.category === state.category);
        const q = state.search.trim().toLowerCase();
        const matchSearch = !q || 
            p.name.toLowerCase().includes(q) || 
            p.shortDesc.toLowerCase().includes(q) || 
            p.materials.toLowerCase().includes(q) ||
            p.tags.some(tag => tag.toLowerCase().includes(q));
        return matchCategory && matchSearch;
    });

    // Sorting
    if (state.sort === 'price-asc') {
        filtered.sort((a, b) => a.priceFCFA - b.priceFCFA);
    } else if (state.sort === 'price-desc') {
        filtered.sort((a, b) => b.priceFCFA - a.priceFCFA);
    } else if (state.sort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        // Featured first
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    if (countBadge) {
        countBadge.textContent = `${filtered.length} pièce${filtered.length > 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    container.innerHTML = filtered.map(product => {
        const mediaMarkup = product.image ?
            `<img src="${product.image}" alt="${product.name}" class="gallery-img w-full h-full object-cover object-center" loading="lazy">` :
            getProductSvg(product.imageType);
        const inCart = state.cart.find(i => i.id === product.id);

        return `
            <article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/90 transition-all duration-300 flex flex-col group" data-category="${product.category}">
                
                <!-- Product Image Box (4:5 Portrait) -->
                <div class="relative aspect-[4/5] bg-[#0F141C] overflow-hidden cursor-pointer" onclick="openProductModal('${product.id}')">
                    ${mediaMarkup}
                    
                    <!-- Badge Uniforme Ébène & Or -->
                    <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0F141C]/90 text-[#C5A059] border border-[#C5A059]/40 shadow-sm backdrop-blur-sm">
                            ${product.categoryName}
                        </span>
                        ${product.isFeatured ? `
                            <span class="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#C5A059] text-[#0F141C] shadow-sm">
                                Sélection
                            </span>
                        ` : ''}
                    </div>

                    <!-- Quick View Overlay on Hover -->
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <button onclick="event.stopPropagation(); openProductModal('${product.id}')" class="px-4 py-2 rounded-full bg-white text-[#0F141C] text-xs font-bold shadow-lg hover:bg-[#C5A059] transition-all flex items-center gap-1.5">
                            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                            <span>Détails</span>
                        </button>
                    </div>
                </div>

                <!-- Product Content Épuré -->
                <div class="p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                        <div class="flex items-center justify-between text-[11px] text-stone-400 mb-1">
                            <span>${product.dimensions}</span>
                        </div>
                        
                        <h3 class="text-base font-bold text-stone-900 font-heading line-clamp-1 leading-snug group-hover:text-[#9A7836] transition-colors cursor-pointer" onclick="openProductModal('${product.id}')">
                            ${product.name}
                        </h3>
                        
                        <div class="mt-1.5">
                            <p id="cardDesc-${product.id}" class="text-stone-500 text-xs line-clamp-1 leading-relaxed font-light">
                                ${product.shortDesc}
                            </p>
                            <button type="button" onclick="toggleCardDesc('${product.id}', this)" class="text-[11px] font-bold text-[#9A7836] hover:text-stone-900 mt-1 inline-flex items-center gap-1 cursor-pointer">
                                <span>Voir plus</span>
                                <i data-lucide="chevron-down" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mt-4 pt-3.5 border-t border-stone-100 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="text-base sm:text-lg font-black text-[#0F141C] font-heading">
                                ${formatPrice(product.priceFCFA)}
                            </div>
                            ${inCart ? `
                                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                                    ✓ Panier (${inCart.quantity})
                                </span>
                            ` : ''}
                        </div>

                        <!-- 2 Boutons Équilibrés : Panier Classique + WhatsApp Direct -->
                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="addToCart('${product.id}')" class="btn-luxury-primary py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-sm">
                                <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#C5A059] shrink-0"></i>
                                <span class="truncate">${inCart ? `Ajouté (${inCart.quantity})` : 'Au Panier'}</span>
                            </button>
                            <button onclick="orderDirectWhatsApp('${product.id}')" class="btn-whatsapp-luxe py-2.5 px-2 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-sm">
                                <i data-lucide="message-circle" class="w-3.5 h-3.5 shrink-0"></i>
                                <span class="truncate">WhatsApp</span>
                            </button>
                        </div>

                        ${inCart ? `
                            <div class="flex items-center justify-center">
                                <button onclick="removeFromCart('${product.id}')" class="text-[11px] text-red-600 hover:underline flex items-center gap-1 font-medium">
                                    <i data-lucide="trash-2" class="w-3 h-3"></i>
                                    <span>Retirer</span>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </article>
        `;
    }).join('');

    lucide.createIcons();
}

// Toggle "Voir plus / Voir moins" sur les cartes produits et sections
function toggleCardDesc(productId, btnElement, isTwoLine = false) {
    const descEl = document.getElementById(`cardDesc-${productId}`) || document.getElementById(`testi-text-${String(productId).replace('testi-', '')}`);
    if (!descEl) return;
    const clampClass = isTwoLine ? 'line-clamp-2' : 'line-clamp-1';
    const isClamped = descEl.classList.contains(clampClass);
    if (isClamped) {
        descEl.classList.remove(clampClass);
        btnElement.innerHTML = `<span>Voir moins</span> <i data-lucide="chevron-up" class="w-3 h-3"></i>`;
    } else {
        descEl.classList.add(clampClass);
        btnElement.innerHTML = `<span>Voir plus</span> <i data-lucide="chevron-down" class="w-3 h-3"></i>`;
    }
    lucide.createIcons();
}

function toggleSectionMore(contentId, btnElement, moreLabel = 'Voir plus', lessLabel = 'Voir moins') {
    const el = document.getElementById(contentId);
    if (!el) return;
    const isHidden = el.classList.contains('hidden');
    if (isHidden) {
        el.classList.remove('hidden');
        btnElement.innerHTML = `<span>${lessLabel}</span> <i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>`;
    } else {
        el.classList.add('hidden');
        btnElement.innerHTML = `<span>${moreLabel}</span> <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>`;
    }
    lucide.createIcons();
}

// Setup Event Listeners
function setupEventListeners() {
    // Category pills (Catalog filters)
    document.querySelectorAll('.category-pill, .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-pill, .category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.category = btn.dataset.category;
            renderProducts();
        });
    });

    // Search inputs (Catalog, Header, Mobile)
    const searchInputs = [
        document.getElementById('productSearchInput'),
        document.getElementById('headerSearchInput'),
        document.getElementById('mobileSearchInput')
    ].filter(Boolean);

    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            state.search = e.target.value;
            searchInputs.forEach(other => {
                if (other !== input) other.value = e.target.value;
            });
            renderProducts();
        });
    });

    // Sort select
    const sortSelect = document.getElementById('productSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sort = e.target.value;
            renderProducts();
        });
    }

    // Currency selectors (Desktop & Mobile)
    const currencySelectors = [
        document.getElementById('currencySelector'),
        document.getElementById('mobileCurrencySelector')
    ].filter(Boolean);

    currencySelectors.forEach(select => {
        select.addEventListener('change', (e) => {
            state.currency = e.target.value;
            localStorage.setItem('aghar_currency', state.currency);
            currencySelectors.forEach(other => {
                if (other !== select) other.value = e.target.value;
            });
            renderProducts();
            updateCartUI();
            updateHeroShowcase(heroCurrentIndex, false);
            if (state.selectedProduct) {
                updateModalPrice(state.selectedProduct);
            }
            showToast(`Devise changée en ${state.currency}`, 'info');
        });
    });

    // Mobile drawer toggle
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCartDrawer);

    // Mobile nav menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Custom Quote Form submission
    const customQuoteForm = document.getElementById('customQuoteForm');
    if (customQuoteForm) {
        customQuoteForm.addEventListener('submit', handleCustomQuoteSubmit);
    }
}

// Cart Drawer Toggling
function toggleCartDrawer(forceOpen = null) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer || !overlay) return;

    const shouldOpen = (forceOpen !== null) ? forceOpen : !drawer.classList.contains('open');
    if (shouldOpen) {
        drawer.classList.add('open');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
    } else {
        drawer.classList.remove('open');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        overlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
    }
}

// Cart Logic
function addToCart(productId, qty = 1, openDrawer = true) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += qty;
    } else {
        state.cart.push({ id: productId, quantity: qty });
    }

    saveCart();
    updateCartUI();
    renderProducts();
    if (state.selectedProduct) {
        updateModalCartActions(state.selectedProduct);
    }
    showToast(`« ${product.name.slice(0, 28)} » ajouté au panier !`, 'success');
    if (openDrawer) {
        toggleCartDrawer(true);
    }
}

function updateCartQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    const product = PRODUCTS.find(p => p.id === productId);
    item.quantity += delta;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
        const prodName = product ? product.name : 'Article';
        showToast(`« ${prodName.slice(0, 28)} » retiré du panier`, 'info');
    }

    saveCart();
    updateCartUI();
    renderProducts();
    if (state.selectedProduct) {
        updateModalCartActions(state.selectedProduct);
    }
}

function removeFromCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const prodName = product ? product.name : 'Article';
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    renderProducts();
    if (state.selectedProduct) {
        updateModalCartActions(state.selectedProduct);
    }
    showToast(`« ${prodName.slice(0, 28)} » a été retiré du panier`, 'info');
}

function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    saveCart();
    updateCartUI();
    renderProducts();
    if (state.selectedProduct) {
        updateModalCartActions(state.selectedProduct);
    }
    showToast('Votre panier a été entièrement vidé', 'info');
}

function calculateCartTotals() {
    let totalFCFA = 0;
    let totalItems = 0;

    state.cart.forEach(item => {
        const prod = PRODUCTS.find(p => p.id === item.id);
        if (prod) {
            totalFCFA += prod.priceFCFA * item.quantity;
            totalItems += item.quantity;
        }
    });

    return { totalFCFA, totalItems };
}

function updateCartUI() {
    const { totalFCFA, totalItems } = calculateCartTotals();

    // Update Badges
    const badgeElements = document.querySelectorAll('.cart-badge');
    badgeElements.forEach(badge => {
        badge.textContent = totalItems;
        badge.classList.toggle('scale-110', totalItems > 0);
    });

    // Update Clear Cart Button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        if (totalItems > 0) {
            clearCartBtn.classList.remove('hidden');
            clearCartBtn.classList.add('flex');
        } else {
            clearCartBtn.classList.add('hidden');
            clearCartBtn.classList.remove('flex');
        }
    }

    // Update Drawer Contents
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartEmptyNotice = document.getElementById('cartEmptyNotice');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const cartCheckoutBtn = document.getElementById('cartCheckoutWhatsAppBtn');

    if (cartSubtotal) cartSubtotal.textContent = formatPrice(totalFCFA);
    if (cartTotal) cartTotal.textContent = formatPrice(totalFCFA);

    if (totalItems === 0) {
        if (cartItemsContainer) cartItemsContainer.innerHTML = '';
        if (cartEmptyNotice) cartEmptyNotice.classList.remove('hidden');
        if (cartCheckoutBtn) cartCheckoutBtn.classList.add('opacity-50', 'pointer-events-none');
        return;
    }

    if (cartEmptyNotice) cartEmptyNotice.classList.add('hidden');
    if (cartCheckoutBtn) cartCheckoutBtn.classList.remove('opacity-50', 'pointer-events-none');

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = state.cart.map(item => {
            const product = PRODUCTS.find(p => p.id === item.id);
            if (!product) return '';
            const itemTotalFCFA = product.priceFCFA * item.quantity;
            const itemThumb = product.image ?
                `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">` :
                getProductSvg(product.imageType);
            return `
                <div class="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 shadow-sm hover:border-[#C5A059]/40 transition-all flex gap-3 items-center group">
                    <div class="w-16 h-16 rounded-xl overflow-hidden bg-stone-900 shrink-0 border border-stone-200 shadow-inner">
                        ${itemThumb}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-xs font-bold text-stone-900 truncate font-heading leading-tight">${product.name}</h4>
                        <div class="text-[11px] text-stone-500 mt-0.5 font-medium">${formatPrice(product.priceFCFA)} / unité</div>
                        <div class="flex items-center justify-between mt-2.5">
                            <div class="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shadow-xs">
                                <button onclick="updateCartQuantity('${product.id}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-stone-100 text-stone-700 font-bold text-xs transition-colors" title="${item.quantity === 1 ? 'Retirer du panier' : 'Diminuer la quantité'}">
                                    ${item.quantity === 1 ? '<i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-500"></i>' : '-'}
                                </button>
                                <span class="px-2.5 text-xs font-bold text-stone-900">${item.quantity}</span>
                                <button onclick="updateCartQuantity('${product.id}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-stone-100 text-stone-700 font-bold text-xs transition-colors" title="Augmenter la quantité">+</button>
                            </div>
                            <div class="text-xs font-black text-[#15243B]">
                                ${formatPrice(itemTotalFCFA)}
                            </div>
                        </div>
                    </div>
                    <button onclick="removeFromCart('${product.id}')" class="p-2 text-red-500 hover:text-red-700 bg-red-50/70 hover:bg-red-100/80 border border-red-200 rounded-xl transition-all flex flex-col items-center justify-center gap-0.5 shrink-0 active:scale-95 shadow-xs" title="Retirer cet article du panier (ajouté par erreur)">
                        <i data-lucide="trash-2" class="w-4 h-4 text-red-500"></i>
                        <span class="text-[9px] font-extrabold uppercase tracking-wider text-red-600">Retirer</span>
                    </button>
                </div>
            `;
        }).join('');
        lucide.createIcons();
    }
}

// WhatsApp Order Automation
function checkoutViaWhatsApp() {
    if (state.cart.length === 0) {
        showToast('Votre panier est vide', 'warning');
        return;
    }

    const { totalFCFA } = calculateCartTotals();
    const formattedTotal = formatPrice(totalFCFA);

    let message = `Bonjour Boubacar (Atelier AGHAR - Soumbédioune),\n\n`;
    message += `Je souhaite passer commande des articles suivants vus sur votre boutique :\n`;
    message += `──────────────────────\n`;

    state.cart.forEach((item, index) => {
        const prod = PRODUCTS.find(p => p.id === item.id);
        if (prod) {
            const itemPrice = formatPrice(prod.priceFCFA * item.quantity);
            message += `${index + 1}. *${prod.name}*\n`;
            message += `   • Quantité : ${item.quantity}\n`;
            message += `   • Prix : ${itemPrice} (${formatPrice(prod.priceFCFA)}/u)\n\n`;
        }
    });

    message += `──────────────────────\n`;
    message += `*MONTANT TOTAL ESTIMÉ : ${formattedTotal}*\n\n`;
    message += `Pouvez-vous me confirmer la disponibilité à l'atelier de Soumbédioune ou le délai de livraison ?\n`;
    message += `Merci beaucoup !`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SHOP_CONFIG.artisan.phoneRaw}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function orderDirectWhatsApp(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const formattedPrice = formatPrice(prod.priceFCFA);
    let message = `Bonjour Boubacar,\n\n`;
    message += `Je suis intéressé(e) par votre création artisanale :\n`;
    message += `*${prod.name}*\n`;
    message += `• Catégorie : ${prod.categoryName}\n`;
    message += `• Prix atelier : ${formattedPrice}\n`;
    message += `• Dimensions : ${prod.dimensions}\n\n`;
    message += `Est-elle disponible immédiatement à votre atelier de Soumbédioune (Dakar) ou livrable ?\n`;
    message += `Merci de votre retour !`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SHOP_CONFIG.artisan.phoneRaw}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Product Modal (Detail & Story)
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    state.selectedProduct = product;
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    document.getElementById('modalProductTitle').textContent = product.name;
    document.getElementById('modalProductBadge').textContent = product.badge;
    document.getElementById('modalProductCategory').textContent = product.categoryName;
    document.getElementById('modalProductPrice').textContent = formatPrice(product.priceFCFA);
    document.getElementById('modalProductDesc').textContent = product.description;
    document.getElementById('modalProductDimensions').textContent = product.dimensions;
    document.getElementById('modalProductMaterials').textContent = product.materials;
    document.getElementById('modalProductCraftTime').textContent = product.craftTime;
    document.getElementById('modalProductWeight').textContent = product.weight;
    document.getElementById('modalProductStock').textContent = product.stockStatus;

    // Image
    const imgContainer = document.getElementById('modalProductImage');
    if (imgContainer) {
        imgContainer.innerHTML = product.image ?
            `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-center">` :
            getProductSvg(product.imageType);
    }

    // Modal action buttons
    updateModalCartActions(product);

    const waBtn = document.getElementById('modalWhatsAppBtn');
    if (waBtn) {
        waBtn.onclick = () => orderDirectWhatsApp(product.id);
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function updateModalCartActions(product) {
    if (!product) return;
    const addBtn = document.getElementById('modalAddCartBtn');
    const removeBtn = document.getElementById('modalRemoveCartBtn');
    const inCart = state.cart.find(i => i.id === product.id);

    if (addBtn) {
        if (inCart) {
            addBtn.innerHTML = `
                <i data-lucide="shopping-bag" class="w-4 h-4 text-amber-300"></i>
                <span>Dans le panier (${inCart.quantity}) • Ajouter encore</span>
            `;
        } else {
            addBtn.innerHTML = `
                <i data-lucide="shopping-bag" class="w-4 h-4 text-amber-300"></i>
                <span>Ajouter au Panier</span>
            `;
        }
        addBtn.onclick = () => {
            addToCart(product.id, 1, true);
            closeProductModal();
        };
    }

    if (removeBtn) {
        if (inCart) {
            removeBtn.classList.remove('hidden');
            removeBtn.classList.add('flex');
            removeBtn.onclick = () => {
                removeFromCart(product.id);
                updateModalCartActions(product);
            };
        } else {
            removeBtn.classList.add('hidden');
            removeBtn.classList.remove('flex');
        }
    }
    lucide.createIcons();
}

function updateModalPrice(product) {
    const priceElem = document.getElementById('modalProductPrice');
    if (priceElem) priceElem.textContent = formatPrice(product.priceFCFA);
}

function closeProductModal() {
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    state.selectedProduct = null;
}

// Custom Quote Handling
function handleCustomQuoteSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('quoteName').value;
    const phone = document.getElementById('quotePhone').value;
    const itemType = document.getElementById('quoteItemType').value;
    const dimensions = document.getElementById('quoteDimensions').value;
    const details = document.getElementById('quoteDetails').value;

    let message = `*DEMANDE DE DEVIS SUR-MESURE - ATELIER AGHAR*\n\n`;
    message += `• Nom du client : ${name}\n`;
    message += `• Téléphone : ${phone}\n`;
    message += `• Type d'ouvrage : ${itemType}\n`;
    message += `• Dimensions souhaitées : ${dimensions || 'Standard ou à convenir'}\n`;
    message += `• Description / Finitions spéciales :\n${details}\n\n`;
    message += `Demande transmise depuis le site web AGHAR Soumbédioune.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SHOP_CONFIG.artisan.phoneRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');

    showToast('Votre demande a été préparée sur WhatsApp !', 'success');
    e.target.reset();
}

// Testimonials & Visitor Comments Renderer
function getVisitorComments() {
    try {
        const raw = localStorage.getItem('aghar_visitor_comments');
        return raw ? JSON.parse(raw) : [];
    } catch (err) {
        return [];
    }
}

function saveVisitorComments(list) {
    try {
        localStorage.setItem('aghar_visitor_comments', JSON.stringify(list));
    } catch (err) {
        console.error(err);
    }
}

function toggleVisitorCommentForm() {
    const wrap = document.getElementById('visitorCommentFormWrap');
    if (!wrap) return;
    wrap.classList.toggle('hidden');
    if (!wrap.classList.contains('hidden')) {
        const input = document.getElementById('commentAuthor');
        if (input) input.focus();
    }
}

function handleVisitorCommentSubmit(e) {
    e.preventDefault();
    const authorInput = document.getElementById('commentAuthor');
    const cityInput = document.getElementById('commentCity');
    const ratingInput = document.getElementById('commentRating');
    const textInput = document.getElementById('commentText');

    const author = (authorInput?.value || '').trim();
    const city = (cityInput?.value || '').trim() || 'Visiteur AGHAR';
    const rating = Math.min(5, Math.max(1, parseInt(ratingInput?.value || '5', 10)));
    const text = (textInput?.value || '').trim();

    if (!author || !text) {
        showToast('Veuillez renseigner votre nom et votre commentaire.', 'info');
        return;
    }

    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const now = new Date();
    const dateLabel = `${months[now.getMonth()]} ${now.getFullYear()}`;

    const newComment = {
        id: 'vc-' + Date.now(),
        author,
        city,
        rating,
        text,
        date: dateLabel,
        isVisitor: true
    };

    const existing = getVisitorComments();
    existing.unshift(newComment);
    saveVisitorComments(existing);

    e.target.reset();
    const wrap = document.getElementById('visitorCommentFormWrap');
    if (wrap) wrap.classList.add('hidden');

    renderTestimonials();
    showToast('Merci ! Votre commentaire a été publié sur la page.', 'success');
}

function deleteVisitorComment(commentId) {
    const existing = getVisitorComments().filter(c => c.id !== commentId);
    saveVisitorComments(existing);
    renderTestimonials();
    showToast('Commentaire supprimé.', 'info');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;

    const visitorComments = getVisitorComments();
    const allReviews = [...visitorComments, ...TESTIMONIALS];

    container.innerHTML = allReviews.map((t, idx) => `
        <div class="bg-white p-5 rounded-2xl border ${t.isVisitor ? 'border-[#C5A059]' : 'border-stone-200'} shadow-sm flex flex-col justify-between relative">
            <div>
                <div class="flex items-center justify-between gap-2 mb-2.5">
                    <div class="flex items-center gap-1 text-[#C5A059]">
                        ${Array(t.rating).fill('<i data-lucide="star" class="w-3.5 h-3.5 fill-[#C5A059]"></i>').join('')}
                    </div>
                    ${t.isVisitor ? `
                        <div class="flex items-center gap-1.5">
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#0F141C] text-[#C5A059]">Avis Visiteur</span>
                            <button type="button" onclick="deleteVisitorComment('${t.id}')" class="text-stone-400 hover:text-red-600 p-0.5" title="Supprimer ce commentaire">
                                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    ` : ''}
                </div>
                <p id="testi-text-${idx}" class="text-stone-700 text-xs sm:text-sm italic leading-relaxed line-clamp-2">
                    « ${t.text} »
                </p>
                <button type="button" onclick="toggleCardDesc('testi-${idx}', this, true)" class="text-[11px] font-bold text-[#9A7836] hover:text-[#0F141C] transition-colors mt-1 inline-flex items-center gap-1">
                    <span>Voir plus ▾</span>
                </button>
            </div>
            <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                    <div class="text-xs font-bold text-stone-900">${t.author}</div>
                    <div class="text-[11px] text-stone-500">${t.city}</div>
                </div>
                <span class="text-[10px] text-stone-400 font-medium">${t.date}</span>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Care Tips Renderer
function renderCareTips() {
    const container = document.getElementById('careTipsContainer');
    if (!container) return;

    container.innerHTML = CARE_TIPS.map((tip, idx) => `
        <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-[#0F141C] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
                        <i data-lucide="${tip.icon}" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-sm font-bold text-stone-900 font-heading leading-snug">${tip.title}</h3>
                </div>
                <p class="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
                    <span class="text-[#C5A059] font-bold">•</span>
                    <span>${tip.tips[0]}</span>
                </p>
                <div id="care-more-${idx}" class="hidden mt-2 space-y-1.5 pt-2 border-t border-stone-100">
                    ${tip.tips.slice(1).map(t => `
                        <p class="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
                            <span class="text-[#C5A059] font-bold">•</span>
                            <span>${t}</span>
                        </p>
                    `).join('')}
                </div>
            </div>
            <button type="button" onclick="toggleSectionMore('care-more-${idx}', this, 'Voir plus ▾', 'Voir moins ▴')" class="text-[11px] font-bold text-[#9A7836] hover:text-[#0F141C] transition-colors mt-3 inline-flex items-center gap-1 self-start">
                <span>Voir plus ▾</span>
            </button>
        </div>
    `).join('');
}

// FAQ Accordion
function renderFaqs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    container.innerHTML = FAQS.map((faq, idx) => `
        <div class="border border-stone-200 rounded-2xl overflow-hidden bg-white">
            <button onclick="toggleFaq(${idx})" class="w-full p-5 text-left font-bold text-stone-900 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                <span class="text-sm font-heading">${faq.q}</span>
                <i id="faqIcon-${idx}" data-lucide="chevron-down" class="w-4 h-4 text-[#C5A059] transition-transform duration-200"></i>
            </button>
            <div id="faqAnswer-${idx}" class="hidden px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                ${faq.a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-900">$1</strong>')}
            </div>
        </div>
    `).join('');
}

function toggleFaq(idx) {
    const ans = document.getElementById(`faqAnswer-${idx}`);
    const icon = document.getElementById(`faqIcon-${idx}`);
    if (!ans || !icon) return;

    const isHidden = ans.classList.contains('hidden');
    ans.classList.toggle('hidden', !isHidden);
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-semibold backdrop-blur-md ${
        type === 'success' ? 'bg-emerald-900/90 text-white border border-emerald-500/40' :
        type === 'warning' ? 'bg-amber-900/90 text-white border border-amber-500/40' :
        'bg-stone-900/90 text-stone-100 border border-stone-700/40'
    }`;

    const iconName = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-circle' : 'info';
    toast.innerHTML = `
        <i data-lucide="${iconName}" class="w-4 h-4 text-[#C5A059]"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Hero Showcase & Triptych Switcher
const HERO_SHOWCASES = [
    {
        categoryKey: "coffres",
        productId: "coffre-semainier-ebene",
        categoryName: "Coffres & Ébénisterie d'Apparat",
        title: "Grand Coffre Semainier à Tiroirs",
        subtitle: "Cuir ébène gravé au fer, laiton massif et 3 tiroirs coulissants pour trésors précieux.",
        dimensions: "L 75 cm × P 40 cm × H 55 cm",
        priceFCFA: 185000,
        image: "articles/15.jpeg",
        badge: "Pièce de Maître N° 15",
        timeSpent: "38 jours d'atelier"
    },
    {
        categoryKey: "boites",
        productId: "boites-rondes-sahariennes",
        categoryName: "Boîtes en Cuir Ciselé & Repoussé",
        title: "Boîtes Rondes Sahariennes en Cuir",
        subtitle: "Cuir tanné végétal teinté au safran et écorces, motifs protecteurs repoussés au poinçon.",
        dimensions: "Ø 18 à 24 cm × H 14 cm",
        priceFCFA: 22000,
        image: "articles/17.jpeg",
        badge: "Maroquinerie d'Art N° 17",
        timeSpent: "7 jours de repoussage"
    },
    {
        categoryKey: "paniers",
        productId: "panier-apparat-cauris",
        categoryName: "Vannerie Saharienne & Cauris",
        title: "Grand Panier d'Apparat aux Cauris",
        subtitle: "Fibres de doum sauvage très denses, col et anses en cuir chocolat sertis de cauris marins.",
        dimensions: "Ø 35 cm × H 45 cm",
        priceFCFA: 48000,
        image: "articles/10.jpeg",
        badge: "Vannerie Noble N° 10",
        timeSpent: "14 jours de tressage"
    }
];

let heroCurrentIndex = 0;
let heroAutoPlayTimer = null;

function initHeroShowcase() {
    updateHeroShowcase(0, false);
    startHeroAutoPlay();
}

function updateHeroShowcase(index, userInteracted = true) {
    if (userInteracted && heroAutoPlayTimer) {
        clearInterval(heroAutoPlayTimer);
        heroAutoPlayTimer = null;
    }

    heroCurrentIndex = index;
    const item = HERO_SHOWCASES[index];
    if (!item) return;

    // Update Tab Active State
    document.querySelectorAll('.hero-tab-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });

    // Update Thumbnails Active State
    document.querySelectorAll('.hero-thumb-btn').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });

    // Animate and update the main showcase card
    const imgElem = document.getElementById('heroShowcaseImg');
    const badgeElem = document.getElementById('heroShowcaseBadge');
    const catElem = document.getElementById('heroShowcaseCategory');
    const titleElem = document.getElementById('heroShowcaseTitle');
    const descElem = document.getElementById('heroShowcaseDesc');
    const metaElem = document.getElementById('heroShowcaseMeta');
    const priceElem = document.getElementById('heroShowcasePrice');
    const modalBtn = document.getElementById('heroShowcaseModalBtn');
    const waBtn = document.getElementById('heroShowcaseWaBtn');

    if (imgElem) {
        imgElem.style.opacity = '0.35';
        imgElem.style.transform = 'scale(0.98)';
        setTimeout(() => {
            imgElem.src = item.image;
            imgElem.alt = item.title;
            imgElem.style.opacity = '1';
            imgElem.style.transform = 'scale(1)';
        }, 150);
    }

    if (badgeElem) badgeElem.textContent = item.badge;
    if (catElem) catElem.textContent = item.categoryName;
    if (titleElem) titleElem.textContent = item.title;
    if (descElem) descElem.textContent = item.subtitle;
    if (metaElem) {
        metaElem.innerHTML = `
            <span class="inline-flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5 text-[#C5A059]"></i> <span>${item.timeSpent}</span></span>
            <span class="mx-2 opacity-40">•</span>
            <span class="inline-flex items-center gap-1"><i data-lucide="maximize" class="w-3.5 h-3.5 text-[#C5A059]"></i> <span>${item.dimensions}</span></span>
        `;
    }
    if (priceElem) priceElem.textContent = formatPrice(item.priceFCFA);

    if (modalBtn) {
        modalBtn.onclick = () => openProductModal(item.productId);
    }
    if (waBtn) {
        waBtn.onclick = () => orderDirectWhatsApp(item.productId);
    }

    lucide.createIcons();
}

function startHeroAutoPlay() {
    if (heroAutoPlayTimer) clearInterval(heroAutoPlayTimer);
    heroAutoPlayTimer = setInterval(() => {
        const nextIndex = (heroCurrentIndex + 1) % HERO_SHOWCASES.length;
        updateHeroShowcase(nextIndex, false);
    }, 7000);
}

// Category Shortcut Pill in Hero Banner & Menus
function selectCategoryAndScroll(categoryKey) {
    state.category = categoryKey;
    document.querySelectorAll('.category-pill, .category-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === categoryKey);
    });
    renderProducts();

    const target = document.getElementById('creations');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================================================
// GESTIONNAIRE DE CATALOGUE PROPRIÉTAIRE (ESPACE ARTISAN)
// ==========================================================================

let adminSessionAuthenticated = false;
let newProductImageBase64 = null;

// Initialisation du catalogue dynamique persistant
function initProductsCatalog() {
    try {
        const storedDeleted = localStorage.getItem('aghar_deleted_products');
        const storedCustom = localStorage.getItem('aghar_custom_products');

        const deletedIds = storedDeleted ? JSON.parse(storedDeleted) : [];
        const customProducts = storedCustom ? JSON.parse(storedCustom) : [];

        // 1. Filtrer les créations d'origine retirées
        let active = BASE_PRODUCTS.filter(p => !deletedIds.includes(p.id));

        // 2. Intégrer les créations ajoutées par le propriétaire (les plus récentes en tête)
        const activeCustom = customProducts.filter(p => !deletedIds.includes(p.id));

        PRODUCTS = [...activeCustom, ...active];
    } catch (e) {
        console.warn('Erreur lors du chargement du catalogue dynamique:', e);
        PRODUCTS = [...BASE_PRODUCTS];
    }
}

// Ajout d'une nouvelle création
function addNewProduct(productData) {
    try {
        const storedCustom = localStorage.getItem('aghar_custom_products');
        let customProducts = storedCustom ? JSON.parse(storedCustom) : [];
        customProducts.unshift(productData);
        localStorage.setItem('aghar_custom_products', JSON.stringify(customProducts));

        // Mettre à jour la liste active en mémoire
        PRODUCTS.unshift(productData);

        // Rafraîchir l'affichage
        renderProducts();
        renderAdminProductsList();
        showToast(`« ${productData.name} » a été ajouté à la boutique !`, 'success');
        return true;
    } catch (e) {
        console.error('Erreur lors de l\'ajout du produit:', e);
        showToast('Erreur lors de l\'enregistrement de la création', 'warning');
        return false;
    }
}

// Retrait d'un produit du catalogue
function removeProductFromCatalog(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const prodName = product ? product.name : 'cette création';

    if (!confirm(`Êtes-vous certain de vouloir retirer « ${prodName} » du catalogue ?`)) {
        return;
    }

    try {
        // 1. Ajouter aux identifiants supprimés
        const storedDeleted = localStorage.getItem('aghar_deleted_products');
        let deletedIds = storedDeleted ? JSON.parse(storedDeleted) : [];
        if (!deletedIds.includes(productId)) {
            deletedIds.push(productId);
            localStorage.setItem('aghar_deleted_products', JSON.stringify(deletedIds));
        }

        // 2. Nettoyer aussi des créations personnalisées si applicable
        const storedCustom = localStorage.getItem('aghar_custom_products');
        if (storedCustom) {
            let customProducts = JSON.parse(storedCustom);
            customProducts = customProducts.filter(p => p.id !== productId);
            localStorage.setItem('aghar_custom_products', JSON.stringify(customProducts));
        }

        // 3. Mettre à jour PRODUCTS en mémoire
        PRODUCTS = PRODUCTS.filter(p => p.id !== productId);

        // 4. Retirer du panier si présent
        removeFromCart(productId);

        // 5. Rafraîchir l'interface
        renderProducts();
        renderAdminProductsList();
        showToast(`« ${prodName} » a été retiré du catalogue`, 'info');
    } catch (e) {
        console.error('Erreur lors du retrait du produit:', e);
        showToast('Erreur lors du retrait du produit', 'warning');
    }
}

// Réinitialisation du catalogue aux 17 pièces d'origine
function resetCatalogToDefault() {
    if (!confirm("Voulez-vous réinitialiser le catalogue avec les 17 créations d'origine de l'atelier ? (Cette action annulera les retraits et les ajouts stockés dans ce navigateur).")) {
        return;
    }

    localStorage.removeItem('aghar_custom_products');
    localStorage.removeItem('aghar_deleted_products');
    PRODUCTS = [...BASE_PRODUCTS];
    renderProducts();
    renderAdminProductsList();
    showToast("Catalogue réinitialisé avec les pièces d'origine !", 'success');
}

// Exportation du fichier data.js complet à jour
function exportDataJsFile() {
    try {
        const configStr = JSON.stringify(SHOP_CONFIG, null, 4);
        const productsStr = JSON.stringify(PRODUCTS, null, 4);
        const testimonialsStr = JSON.stringify(TESTIMONIALS, null, 4);
        const careTipsStr = JSON.stringify(CARE_TIPS, null, 4);
        const faqsStr = JSON.stringify(FAQS, null, 4);

        const fileContent = `/**
 * AGHAR - Artisanat Touareg d'Exception
 * Base de données des créations artisanales réelles de l'Atelier
 * Fichier exporté le ${new Date().toLocaleDateString('fr-FR')}
 * Atelier d'Art N° 18B, Village Artisanal de Soumbédioune, Dakar
 */

const SHOP_CONFIG = ${configStr};

const BASE_PRODUCTS = ${productsStr};

let PRODUCTS = [...BASE_PRODUCTS];

const TESTIMONIALS = ${testimonialsStr};

const CARE_TIPS = ${careTipsStr};

const FAQS = ${faqsStr};
`;

        const blob = new Blob([fileContent], { type: 'text/javascript;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast("Fichier 'data.js' téléchargé avec succès !", 'success');
    } catch (e) {
        console.error("Erreur lors de l'exportation:", e);
        showToast("Erreur lors de la génération du fichier", 'warning');
    }
}

// Contrôleur de la Modale Espace Artisan
function openAdminModal() {
    const modal = document.getElementById('adminModal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (adminSessionAuthenticated || sessionStorage.getItem('aghar_admin_auth') === 'true') {
        showAdminDashboard();
    } else {
        showAdminPinScreen();
    }

    lucide.createIcons();
}

function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function showAdminPinScreen() {
    const pinSection = document.getElementById('adminPinSection');
    const dashboardSection = document.getElementById('adminDashboardSection');
    if (pinSection) pinSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');

    const pinInput = document.getElementById('adminPinInput');
    if (pinInput) {
        pinInput.value = '';
        setTimeout(() => pinInput.focus(), 150);
    }
}

function showAdminDashboard() {
    adminSessionAuthenticated = true;
    sessionStorage.setItem('aghar_admin_auth', 'true');

    const pinSection = document.getElementById('adminPinSection');
    const dashboardSection = document.getElementById('adminDashboardSection');
    if (pinSection) pinSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');

    renderAdminProductsList();
    lucide.createIcons();
}

function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const pinInput = document.getElementById('adminPinInput');
    const enteredPin = pinInput ? pinInput.value.trim() : '';

    // Codes PIN autorisés : 'aghar2026' ou numéro artisan '779640035'
    if (enteredPin === 'aghar2026' || enteredPin === '779640035' || enteredPin === '221779640035') {
        showToast('Bienvenue Boubacar Dicko !', 'success');
        showAdminDashboard();
    } else {
        showToast('Code PIN incorrect (par défaut : aghar2026)', 'warning');
        if (pinInput) {
            pinInput.value = '';
            pinInput.focus();
        }
    }
}

function handleAdminLogout() {
    adminSessionAuthenticated = false;
    sessionStorage.removeItem('aghar_admin_auth');
    showAdminPinScreen();
    showToast('Session artisan fermée', 'info');
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    const tabAdd = document.getElementById('adminTabAdd');
    const tabManage = document.getElementById('adminTabManage');
    const tabBackup = document.getElementById('adminTabBackup');

    if (tabAdd) tabAdd.classList.toggle('hidden', tabName !== 'add');
    if (tabManage) tabManage.classList.toggle('hidden', tabName !== 'manage');
    if (tabBackup) tabBackup.classList.toggle('hidden', tabName !== 'backup');

    if (tabName === 'manage') {
        renderAdminProductsList();
    }
    lucide.createIcons();
}

// Prévisualisation de l'image sélectionnée
function handleProductImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('Veuillez sélectionner un fichier image valide', 'warning');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        newProductImageBase64 = event.target.result;
        const previewWrap = document.getElementById('adminImagePreviewWrap');
        const previewImg = document.getElementById('adminImagePreview');
        const uploadPlaceholder = document.getElementById('adminUploadPlaceholder');

        if (previewImg) previewImg.src = newProductImageBase64;
        if (previewWrap) previewWrap.classList.remove('hidden');
        if (uploadPlaceholder) uploadPlaceholder.classList.add('hidden');
    };
    reader.readAsDataURL(file);
}

function clearAdminImageUpload() {
    newProductImageBase64 = null;
    const fileInput = document.getElementById('adminProductFileInput');
    if (fileInput) fileInput.value = '';

    const previewWrap = document.getElementById('adminImagePreviewWrap');
    const uploadPlaceholder = document.getElementById('adminUploadPlaceholder');
    if (previewWrap) previewWrap.classList.add('hidden');
    if (uploadPlaceholder) uploadPlaceholder.classList.remove('hidden');
}

// Soumission du formulaire d'ajout
function handleNewProductSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('newProdName').value.trim();
    const category = document.getElementById('newProdCategory').value;
    const priceFCFA = parseInt(document.getElementById('newProdPrice').value, 10);
    const dimensions = document.getElementById('newProdDimensions').value.trim();
    const materials = document.getElementById('newProdMaterials').value.trim();
    const shortDesc = document.getElementById('newProdShortDesc').value.trim();
    const description = document.getElementById('newProdDescription').value.trim();
    const craftTime = document.getElementById('newProdCraftTime').value.trim();
    const badge = document.getElementById('newProdBadge').value.trim();
    const manualImageUrl = document.getElementById('newProdManualImage').value.trim();

    if (!name || isNaN(priceFCFA) || priceFCFA <= 0) {
        showToast('Veuillez indiquer un nom et un prix valide', 'warning');
        return;
    }

    const finalImage = newProductImageBase64 || manualImageUrl || 'articles/1.jpeg';

    const categoryNames = {
        'coffres': 'Coffres & Malles',
        'boites': 'Boîtes & Écrins',
        'paniers': 'Paniers & Jarres',
        'surmesure': 'Sur-Mesure'
    };

    const newProduct = {
        id: `artisan-${Date.now()}`,
        name: name,
        category: category,
        categoryName: categoryNames[category] || 'Artisanat d\'Art',
        priceFCFA: priceFCFA,
        badge: badge || 'Création Atelier',
        isFeatured: true,
        image: finalImage,
        imageType: category === 'coffres' ? 'coffre-moyen' : category === 'boites' ? 'boite-ronde' : 'panier-grand',
        shortDesc: shortDesc || `${name} façonné à la main à l'Atelier de Soumbédioune.`,
        description: description || shortDesc || 'Création artisanale touareg façonnée selon les règles ancestrales des Inaden.',
        dimensions: dimensions || 'Dimensions sur mesure',
        weight: 'Variable selon pièce',
        materials: materials || 'Cuir de chèvre tanné végétal, bois noble, ferrures traditionnelles',
        craftTime: craftTime || 'Façonné à la main',
        stockStatus: 'Disponible à l\'Atelier',
        tags: [category, 'nouveau', 'atelier', 'soumbedioune', 'cuir', 'fait main']
    };

    const success = addNewProduct(newProduct);
    if (success) {
        e.target.reset();
        clearAdminImageUpload();
        switchAdminTab('manage');
    }
}

// Rendu du tableau de gestion des produits
function renderAdminProductsList() {
    const listContainer = document.getElementById('adminProductsList');
    const countBadge = document.getElementById('adminProductCountBadge');
    if (!listContainer) return;

    if (countBadge) {
        countBadge.textContent = `${PRODUCTS.length} pièce${PRODUCTS.length > 1 ? 's' : ''}`;
    }

    listContainer.innerHTML = PRODUCTS.map((prod) => {
        const isCustom = prod.id.startsWith('artisan-');
        const mediaMarkup = prod.image ?
            `<img src="${prod.image}" alt="${prod.name}" class="w-12 h-12 object-cover rounded-lg border border-stone-300">` :
            `<div class="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-xs">📦</div>`;

        return `
            <div class="p-3 sm:p-4 bg-white rounded-xl border border-stone-200 flex items-center justify-between gap-3 hover:border-[#C5A059]/50 transition-colors shadow-xs">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="shrink-0">${mediaMarkup}</div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="text-xs sm:text-sm font-bold text-stone-900 truncate font-heading">${prod.name}</h4>
                            ${isCustom ? '<span class="px-2 py-0.5 rounded text-[9px] font-black bg-emerald-100 text-emerald-800 uppercase">Nouvel Ajout</span>' : ''}
                        </div>
                        <div class="text-[11px] text-stone-500 mt-0.5 flex items-center gap-2">
                            <span class="text-[#9A7836] font-semibold">${prod.categoryName}</span>
                            <span>•</span>
                            <span class="font-bold text-stone-900">${formatPrice(prod.priceFCFA)}</span>
                        </div>
                    </div>
                </div>
                <div class="shrink-0 flex items-center gap-2">
                    <button onclick="openProductModal('${prod.id}')" class="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 text-xs flex items-center gap-1" title="Voir la fiche">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                        <span class="hidden md:inline text-[11px]">Voir</span>
                    </button>
                    <button onclick="removeProductFromCatalog('${prod.id}')" class="btn-destructive px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer" title="Retirer ce produit du catalogue">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        <span class="hidden sm:inline">Retirer</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Raccourci clavier discret pour le propriétaire (Ctrl + Shift + A)
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        openAdminModal();
    }
});


