// Room data mapping
const roomData = {
    'STANDARD HUDDLE ROOM': {
        image: 'Standard Huddle.jpeg',
        items: [
            { qty: 1, mfg: 'SAMSUNG', model: 'BE55FX-H', description: 'LCD, 55" 4K/UHD 31LBS 300NIT 16/7 W/SPEAKERS COO MEXICO TAA', unitPrice: '$520.27', extendedPrice: '$520.27' },
            { qty: 1, mfg: 'CHIEF', model: 'MSM1U', description: 'FUSION MICRO-ADJUSTABLE FIXED WALL MOUNT, MEDIUM', unitPrice: '$170.49', extendedPrice: '$170.49' },
            { qty: 1, mfg: 'TRIPPLITE', model: 'TLP606B', description: 'Tripp Lite Surge Protector Power Strip 120V 6 Outlet 6\' Cord 790 Joule Black', unitPrice: '$18.39', extendedPrice: '$18.39' },
            { qty: 1, mfg: 'LOGITECH', model: '960-001691', description: 'CAMERA, MEETUP 2 ALL IN ONE USB CONFERENCE WITH BUILT IN AI', unitPrice: '$644.80', extendedPrice: '$644.80' },
            { qty: 1, mfg: 'LOGITECH', model: '952-000188', description: 'USB-C EXTEND CONNECTION FOR BYOD MEETINGS', unitPrice: '$672.90', extendedPrice: '$672.90' },
            { qty: 1, mfg: 'MISC', model: 'MISC', description: 'MISC INSTALL MATERIALS- WIRE, CABLE, ETC', unitPrice: '$630.00', extendedPrice: '$630.00' }
        ],
        equipmentTotal: '$2,656.85',
        servicesTotal: '$4,045.00'
    },
    'STANDARD SMALL CONFERENCE ROOM': {
        image: 'Standard Small.jpeg',
        items: [
            { qty: 1, mfg: 'SAMSUNG', model: 'BE55FX-H', description: 'LCD, 55" 4K/UHD 31LBS 300NIT 16/7 W/SPEAKERS COO MEXICO TAA', unitPrice: '$520.27', extendedPrice: '$520.27' },
            { qty: 1, mfg: 'CHIEF', model: 'MSM1U', description: 'FUSION MICRO-ADJUSTABLE FIXED WALL MOUNT, MEDIUM', unitPrice: '$170.49', extendedPrice: '$170.49' },
            { qty: 1, mfg: 'CHIEF', model: 'CHICSMP9X12', description: 'COMPONENT STORAGE PANEL, INTERFACE', unitPrice: '$47.56', extendedPrice: '$47.56' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOGTAPMSTBASELNV4', description: 'KIT, BASE MICROSOFT TEAMS RM W/TAP+ LENOVO CORE GEN 2 NO AV', unitPrice: '$2,257.68', extendedPrice: '$2,257.68' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOG960001691', description: 'CAMERA, MEETUP 2 ALL IN ONE USB CONFERENCE WITH BUILT IN AI', unitPrice: '$644.80', extendedPrice: '$644.80' },
            { qty: 1, mfg: 'MISC', model: 'MISC', description: 'MISC INSTALL MATERIALS- WIRE, CABLE, ETC', unitPrice: '$630.00', extendedPrice: '$630.00' }
        ],
        equipmentTotal: '$4,270.80',
        servicesTotal: '$4,045.00'
    },
    'STANDARD MEDIUM CONFERENCE ROOM': {
        image: 'Standard Medium.jpeg',
        items: [
            { qty: 1, mfg: 'SAMSUNG', model: 'BE75FX-H', description: 'LCD, 75" 4K/UHD 300NIT 69LB W/SPEAKERS 16/7 COO MEXICO TAA', unitPrice: '$926.80', extendedPrice: '$926.80' },
            { qty: 1, mfg: 'CHIEF', model: 'MTM1U', description: 'MOUNT, MEDIUM FUSION MICRO-ADJ TILT WALL MOUNT', unitPrice: '$170.49', extendedPrice: '$170.49' },
            { qty: 1, mfg: 'CHIEF', model: 'CHICSMP9X12', description: 'COMPONENT STORAGE PANEL, INTERFACE', unitPrice: '$47.56', extendedPrice: '$47.56' },
            { qty: 1, mfg: 'TRIPPLITE', model: 'TLP606B', description: 'Tripp Lite Surge Protector Power Strip 120V 6 Outlet 6\' Cord 790 Joule Black', unitPrice: '$18.39', extendedPrice: '$18.39' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOGTAPMSTBASELNV4', description: 'KIT, BASE MICROSOFT TEAMS RM W/TAP+ LENOVO CORE GEN 2 NO AV', unitPrice: '$2,257.68', extendedPrice: '$2,257.68' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOG960001308', description: 'WEBCAM, RALLY BAR ALL-IN-ONE VIDEO BAR MEDIUM ROOM(GRAPHITE)', unitPrice: '$3,011.73', extendedPrice: '$3,011.73' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOG989000430', description: 'MICROPHONE POD, ADD ON MIC, OMNI DIRECTIONAL', unitPrice: '$286.89', extendedPrice: '$286.89' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOG952000181', description: 'ADAPTER, RALLY MIC POD CAT COUPLER, BLACK', unitPrice: '$86.06', extendedPrice: '$86.06' },
            { qty: 1, mfg: 'MISC', model: 'MISC', description: 'MISC INSTALL MATERIALS- WIRE, CABLE, ETC', unitPrice: '$670.00', extendedPrice: '$670.00' }
        ],
        equipmentTotal: '$6,330.75',
        servicesTotal: '$4,445.00'
    },
    'STANDARD LARGE CONFERENCE ROOM': {
        image: 'Standard Large.jpeg',
        items: [
            { qty: 1, mfg: 'SAMSUNG', model: 'BE85FX-H', description: 'LCD, 85" 4K/UHD 300NIT 95LB W/SPEAKERS 16/7 TAA', unitPrice: '$1,395.82', extendedPrice: '$1,395.82' },
            { qty: 1, mfg: 'CHIEF', model: 'CHILTM1U', description: 'MOUNT, MICRO ADJUST TILT WALL MOUNT, LARGE', unitPrice: '$170.49', extendedPrice: '$170.49' },
            { qty: 1, mfg: 'CHIEF', model: 'CHICSMP9X12', description: 'COMPONENT STORAGE PANEL, INTERFACE', unitPrice: '$47.56', extendedPrice: '$47.56' },
            { qty: 1, mfg: 'TRIPPLITE', model: 'TLP606B', description: 'Tripp Lite Surge Protector Power Strip 120V 6 Outlet 6\' Cord 790 Joule Black', unitPrice: '$18.39', extendedPrice: '$18.39' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOGTAPMSTBASELNV4', description: 'KIT, BASE MICROSOFT TEAMS RM W/TAP+ LENOVO CORE GEN 2 NO AV', unitPrice: '$2,257.68', extendedPrice: '$2,257.68' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOG960001308', description: 'WEBCAM, RALLY BAR ALL-IN-ONE VIDEO BAR MEDIUM ROOM(GRAPHITE)', unitPrice: '$3,011.73', extendedPrice: '$3,011.73' },
            { qty: 3, mfg: 'LOGITECH', model: 'LOG952000038', description: 'MICROPHONE POD, ADD ON MIC, OMNI DIRECTIONAL WHITE', unitPrice: '$336.85', extendedPrice: '$1,010.55' },
            { qty: 3, mfg: 'LOGITECH', model: 'LOG952000020', description: 'MOUNT, CEILING MICROPHONE - WHITE', unitPrice: '$71.57', extendedPrice: '$214.71' },
            { qty: 3, mfg: 'LOGITECH', model: 'LOG952000181', description: 'ADAPTER, RALLY MIC POD CAT COUPLER, BLACK', unitPrice: '$86.06', extendedPrice: '$258.18' },
            { qty: 1, mfg: 'MISC', model: 'MISC', description: 'MISC INSTALL MATERIALS- WIRE, CABLE, ETC', unitPrice: '$1,047.39', extendedPrice: '$1,047.39' }
        ],
        equipmentTotal: '$7,800.24',
        servicesTotal: '$4,445.00'
    },
    'EXECUTIVE LARGE CONFERENCE ROOM': {
        image: 'Executive Large.jpeg',
        items: [
            { qty: 1, mfg: 'SAMSUNG', model: 'BE85FX-H', description: 'LCD, 85" 4K/UHD 300NIT 95LB W/SPEAKERS 16/7 TAA', unitPrice: '$1,395.82', extendedPrice: '$1,395.82' },
            { qty: 1, mfg: 'CHIEF', model: 'CHILTM1U', description: 'MOUNT, MICRO ADJUST TILT WALL MOUNT, LARGE', unitPrice: '$170.49', extendedPrice: '$170.49' },
            { qty: 1, mfg: 'CHIEF', model: 'CHICSMP9X12', description: 'COMPONENT STORAGE PANEL, INTERFACE', unitPrice: '$47.56', extendedPrice: '$47.56' },
            { qty: 1, mfg: 'TRIPPLITE', model: 'TLP606B', description: 'Tripp Lite Surge Protector Power Strip 120V 6 Outlet 6\' Cord 790 Joule Black', unitPrice: '$18.39', extendedPrice: '$18.39' },
            { qty: 1, mfg: 'LOGITECH', model: 'LOGTAPMSTBASELNV4', description: 'KIT, BASE MICROSOFT TEAMS RM W/TAP+ LENOVO CORE GEN 2 NO AV', unitPrice: '$2,257.68', extendedPrice: '$2,257.68' },
            { qty: 1, mfg: 'AVER INFORMATION', model: 'AVECOM520PR3', description: 'CAMERA, CAM520 PRO3 USB PTZ', unitPrice: '$1,389.15', extendedPrice: '$1,389.15' },
            { qty: 1, mfg: 'BIAMP SYSTEMS', model: 'US-BIAM-MRB-L-X400-T-CIC6-US-USD', description: 'Biamp MRB-L-X400-T Large meeting room bundle with TesiraFORTE X 400 and black table microphones', unitPrice: '$6,338.41', extendedPrice: '$6,338.41' },
            { qty: 1, mfg: 'MISC', model: 'MISC', description: 'MISC INSTALL MATERIALS- WIRE, CABLE, ETC', unitPrice: '$1,047.39', extendedPrice: '$1,047.39' }
        ],
        equipmentTotal: '$11,032.63',
        servicesTotal: '$5,045.00'
    }
};

const roomNames = Object.keys(roomData);
let currentRoomIndex = 0;

// Initialize
function init() {
    createThumbnails();
    displayRoom(0);
}

// Create thumbnail gallery
function createThumbnails() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';

    roomNames.forEach((roomName, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail-item';
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.innerHTML = `
            <img src="${roomData[roomName].image}" alt="${roomName}" class="thumbnail-image">
            <div class="thumbnail-label">${formatRoomName(roomName)}</div>
        `;
        
        thumbnail.addEventListener('click', () => {
            displayRoom(index);
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// Format room name for display (convert to title case)
function formatRoomName(name) {
    return name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Display room details
function displayRoom(index) {
    currentRoomIndex = index;
    const roomName = roomNames[index];
    const room = roomData[roomName];

    // Animate details wrapper
    const detailsWrapper = document.querySelector('.details-wrapper');
    detailsWrapper.classList.remove('animate-in');
    void detailsWrapper.offsetWidth; // Force reflow
    detailsWrapper.classList.add('animate-in');

    // Update image
    document.getElementById('room-image').src = room.image;
    document.getElementById('room-image').alt = roomName;

    // Update room name
    document.getElementById('room-name').textContent = formatRoomName(roomName);

    // Update table
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    room.items.forEach((item, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.qty}</td>
            <td>${item.mfg}</td>
            <td>${item.model}</td>
            <td>${item.description || '-'}</td>
            <td>${item.unitPrice}</td>
            <td>${item.extendedPrice}</td>
        `;
        tableBody.appendChild(row);
        
        // Animate row in
        requestAnimationFrame(() => {
            setTimeout(() => {
                row.classList.add('animate-in');
            }, 50 + (i * 30));
        });
    });

    // Update totals
    const totalsSection = document.getElementById('totals-section');
    
    const formatPrice = (price) => {
        if (price.startsWith('$')) {
            const amount = price.substring(1);
            return `<span class="dollar-sign">$</span>${amount}`;
        }
        return price;
    };
    
    totalsSection.innerHTML = `
        <div class="total-row">
            <span class="total-label">Equipment Total</span>
            <span class="total-value">${formatPrice(room.equipmentTotal)}</span>
        </div>
        <div class="total-row">
            <span class="total-label">Professional Services</span>
            <span class="total-value">${formatPrice(room.servicesTotal)}</span>
        </div>
    `;

    // Update mobile items list
    const mobileList = document.getElementById('mobile-items-list');
    mobileList.innerHTML = '';

    room.items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'mobile-item-card';
        card.innerHTML = `
            <div class="mobile-item-card-header">
                <span class="mobile-item-qty">${item.qty}x</span>
                <span class="mobile-item-mfg-model">${item.mfg} ${item.model}</span>
            </div>
            <div class="mobile-item-description">${item.description || '-'}</div>
            <div class="mobile-item-prices">
                <div class="mobile-item-price">
                    <span class="mobile-item-price-label">Unit Price</span>
                    <span class="mobile-item-price-value">${item.unitPrice}</span>
                </div>
                <div class="mobile-item-price">
                    <span class="mobile-item-price-label">Extended</span>
                    <span class="mobile-item-price-value">${item.extendedPrice}</span>
                </div>
            </div>
        `;
        mobileList.appendChild(card);
        
        // Animate card in
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 50 + (i * 30));
        });
    });

    // Update thumbnails active state
    document.querySelectorAll('.thumbnail-item').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}


// Login Modal
const correctPassword = 'hyundairocks!';

function initLoginModal() {
    const modal = document.getElementById('login-modal');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');
    const body = document.body;

    // Show modal on load
    body.classList.add('modal-open');

    // Handle Enter key
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });

    // Handle login button
    loginBtn.addEventListener('click', handleLogin);

    function handleLogin() {
        const password = passwordInput.value;
        
        if (password === correctPassword) {
            // Hide modal with bounce animation
            modal.classList.add('hiding');
            
            // Remove modal and show page after animation
            setTimeout(() => {
                modal.style.display = 'none';
                body.classList.remove('modal-open');
                init(); // Initialize the main app
            }, 600);
        } else {
            // Shake animation for wrong password
            passwordInput.style.animation = 'shake 0.5s';
            passwordInput.value = '';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
    }

    // Focus input on load
    setTimeout(() => {
        passwordInput.focus();
    }, 100);
}

// Initialize login modal first
document.addEventListener('DOMContentLoaded', () => {
    initLoginModal();
});

// Add shake animation for wrong password
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

