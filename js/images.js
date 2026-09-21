/**
 * AGHAR - Générateur d'illustrations artisanales vectorielles haute définition
 * Motifs touaregs traditionnels, cuir repoussé, bois sculpté et vannerie saharienne
 */

const ProductImages = {
    "coffre-grand": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgGrand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#241B16"/>
                    <stop offset="50%" stop-color="#3A271B"/>
                    <stop offset="100%" stop-color="#19110D"/>
                </linearGradient>
                <linearGradient id="leatherRed" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#A53D2A"/>
                    <stop offset="50%" stop-color="#882C1B"/>
                    <stop offset="100%" stop-color="#641C10"/>
                </linearGradient>
                <linearGradient id="woodDark" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3D2114"/>
                    <stop offset="50%" stop-color="#54301E"/>
                    <stop offset="100%" stop-color="#2C160B"/>
                </linearGradient>
                <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F3E5AB"/>
                    <stop offset="40%" stop-color="#D4AF37"/>
                    <stop offset="80%" stop-color="#AA820A"/>
                    <stop offset="100%" stop-color="#6E5104"/>
                </linearGradient>
                <filter id="shadowGrand" x="-10%" y="-10%" width="120%" height="125%">
                    <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000" flood-opacity="0.65"/>
                </filter>
                <pattern id="tuaregPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 20 5 L 35 20 L 20 35 L 5 20 Z" fill="none" stroke="#52150A" stroke-width="1.5"/>
                    <circle cx="20" cy="20" r="2.5" fill="#D4AF37"/>
                    <line x1="20" y1="5" x2="20" y2="35" stroke="#451006" stroke-width="0.8"/>
                    <line x1="5" y1="20" x2="35" y2="20" stroke="#451006" stroke-width="0.8"/>
                </pattern>
            </defs>
            <rect width="600" height="420" fill="url(#bgGrand)"/>
            <!-- Desert Warmth Glow -->
            <circle cx="300" cy="210" r="220" fill="#E69542" opacity="0.12" filter="blur(40px)"/>
            <!-- Floor Shadow -->
            <ellipse cx="300" cy="370" rx="220" ry="24" fill="#0A0604" opacity="0.8"/>

            <!-- Main Chest Body -->
            <g filter="url(#shadowGrand)">
                <!-- Base / Plinth in carved wood -->
                <rect x="90" y="320" width="420" height="30" rx="4" fill="url(#woodDark)" stroke="#1F0E06" stroke-width="2"/>
                <circle cx="120" cy="335" r="4" fill="url(#brassGold)"/>
                <circle cx="480" cy="335" r="4" fill="url(#brassGold)"/>
                <circle cx="300" cy="335" r="4" fill="url(#brassGold)"/>

                <!-- Main Chest Box -->
                <rect x="100" y="160" width="400" height="165" fill="url(#leatherRed)" stroke="#4A180E" stroke-width="3"/>
                <!-- Leather Tuareg Motif Pattern Overlay -->
                <rect x="106" y="166" width="388" height="153" fill="url(#tuaregPattern)" opacity="0.75"/>

                <!-- Curved Lid / Couvercle bombé -->
                <path d="M 90 160 C 90 100, 510 100, 510 160 Z" fill="url(#leatherRed)" stroke="#4A180E" stroke-width="3"/>
                <path d="M 98 158 C 98 108, 502 108, 502 158 Z" fill="url(#tuaregPattern)" opacity="0.6"/>

                <!-- Brass Rivets & Reinforcements (Corners & Bands) -->
                <!-- Left Vertical Strap -->
                <rect x="160" y="125" width="28" height="200" fill="url(#brassGold)" stroke="#423005" stroke-width="1.5" rx="3"/>
                <circle cx="174" cy="138" r="3" fill="#3D2903"/><circle cx="174" cy="180" r="3" fill="#3D2903"/>
                <circle cx="174" cy="230" r="3" fill="#3D2903"/><circle cx="174" cy="285" r="3" fill="#3D2903"/>
                
                <!-- Right Vertical Strap -->
                <rect x="412" y="125" width="28" height="200" fill="url(#brassGold)" stroke="#423005" stroke-width="1.5" rx="3"/>
                <circle cx="426" cy="138" r="3" fill="#3D2903"/><circle cx="426" cy="180" r="3" fill="#3D2903"/>
                <circle cx="426" cy="230" r="3" fill="#3D2903"/><circle cx="426" cy="285" r="3" fill="#3D2903"/>

                <!-- Left Corner Bracket -->
                <path d="M 100 160 L 126 160 L 126 186 L 114 186 L 114 314 L 126 314 L 126 325 L 100 325 Z" fill="url(#brassGold)" stroke="#423005" stroke-width="1.5"/>
                <!-- Right Corner Bracket -->
                <path d="M 500 160 L 474 160 L 474 186 L 486 186 L 486 314 L 474 314 L 474 325 L 500 325 Z" fill="url(#brassGold)" stroke="#423005" stroke-width="1.5"/>

                <!-- Central Tuareg Lock & Plate (Moraillon et Croix d'Agadez stylisée) -->
                <rect x="270" y="145" width="60" height="70" rx="6" fill="url(#brassGold)" stroke="#4A3405" stroke-width="2"/>
                <polygon points="300,120 315,145 285,145" fill="url(#brassGold)" stroke="#4A3405" stroke-width="2"/>
                <path d="M 292 185 L 308 185 L 305 202 L 295 202 Z" fill="#291802"/>
                <circle cx="300" cy="178" r="4.5" fill="#291802"/>
                <!-- Padlock Hasp ring -->
                <path d="M 294 152 Q 300 142 306 152" fill="none" stroke="#2B1A04" stroke-width="3"/>

                <!-- Heavy Hand-forged Brass Handles on sides -->
                <path d="M 78 220 Q 64 240 78 260" fill="none" stroke="url(#brassGold)" stroke-width="6" stroke-linecap="round"/>
                <path d="M 522 220 Q 536 240 522 260" fill="none" stroke="url(#brassGold)" stroke-width="6" stroke-linecap="round"/>
                
                <!-- Tuareg Engraving Inscriptions -->
                <text x="300" y="270" fill="#D4AF37" font-size="11" font-family="'Plus Jakarta Sans', sans-serif" letter-spacing="3" text-anchor="middle" font-weight="700">ⵣ AGHAR • SOUMBÉDIOUNE ⵣ</text>
            </g>
        </svg>
    `,

    "coffre-moyen": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgMoyen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#28201A"/>
                    <stop offset="100%" stop-color="#140E0A"/>
                </linearGradient>
                <linearGradient id="leatherOcre" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#D9822B"/>
                    <stop offset="50%" stop-color="#B86117"/>
                    <stop offset="100%" stop-color="#803D08"/>
                </linearGradient>
                <linearGradient id="brass2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F9E297"/>
                    <stop offset="60%" stop-color="#CFA132"/>
                    <stop offset="100%" stop-color="#7B5B0C"/>
                </linearGradient>
                <filter id="shadowMoyen">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000" flood-opacity="0.6"/>
                </filter>
            </defs>
            <rect width="600" height="420" fill="url(#bgMoyen)"/>
            <ellipse cx="300" cy="365" rx="190" ry="20" fill="#090604" opacity="0.8"/>

            <g filter="url(#shadowMoyen)">
                <!-- Chest Body -->
                <rect x="130" y="170" width="340" height="155" rx="6" fill="url(#leatherOcre)" stroke="#532403" stroke-width="2"/>
                
                <!-- Lid -->
                <path d="M 125 170 C 125 125, 475 125, 475 170 Z" fill="url(#leatherOcre)" stroke="#532403" stroke-width="2"/>

                <!-- Geometric Diamond Stitching -->
                <g stroke="#FCE8B3" stroke-width="1.2" fill="none" opacity="0.75">
                    <polygon points="300,195 340,240 300,285 260,240"/>
                    <polygon points="210,195 245,240 210,285 175,240"/>
                    <polygon points="390,195 425,240 390,285 355,240"/>
                    <!-- Lid patterns -->
                    <polygon points="300,135 325,155 300,165 275,155"/>
                    <polygon points="230,140 250,157 230,165 210,157"/>
                    <polygon points="370,140 390,157 370,165 350,157"/>
                </g>

                <!-- Corner Reinforcements -->
                <rect x="130" y="170" width="18" height="155" fill="url(#brass2)" rx="2"/>
                <rect x="452" y="170" width="18" height="155" fill="url(#brass2)" rx="2"/>
                <rect x="125" y="164" width="350" height="12" fill="url(#brass2)" rx="2"/>

                <!-- Brass Studs / Clous dorés -->
                <circle cx="139" cy="185" r="3.5" fill="#4B3405"/>
                <circle cx="139" cy="225" r="3.5" fill="#4B3405"/>
                <circle cx="139" cy="265" r="3.5" fill="#4B3405"/>
                <circle cx="139" cy="305" r="3.5" fill="#4B3405"/>

                <circle cx="461" cy="185" r="3.5" fill="#4B3405"/>
                <circle cx="461" cy="225" r="3.5" fill="#4B3405"/>
                <circle cx="461" cy="265" r="3.5" fill="#4B3405"/>
                <circle cx="461" cy="305" r="3.5" fill="#4B3405"/>

                <!-- Central Lock -->
                <circle cx="300" cy="235" r="22" fill="url(#brass2)" stroke="#533703" stroke-width="2"/>
                <rect x="296" y="226" width="8" height="18" rx="2" fill="#241302"/>
                <path d="M 292 205 L 308 205 L 304 220 L 296 220 Z" fill="url(#brass2)"/>
            </g>
        </svg>
    `,

    "coffre-petit": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgPetit" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#231A24"/>
                    <stop offset="100%" stop-color="#110B12"/>
                </linearGradient>
                <linearGradient id="leatherBrown" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#6F3B1E"/>
                    <stop offset="100%" stop-color="#421E0B"/>
                </linearGradient>
                <linearGradient id="copper" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F29E75"/>
                    <stop offset="50%" stop-color="#C85A28"/>
                    <stop offset="100%" stop-color="#662104"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgPetit)"/>
            <ellipse cx="300" cy="355" rx="160" ry="18" fill="#080509" opacity="0.85"/>

            <!-- Compact Precious Chest -->
            <rect x="170" y="180" width="260" height="145" rx="8" fill="url(#leatherBrown)" stroke="#260F04" stroke-width="3"/>
            <!-- Arched lid -->
            <path d="M 165 180 C 165 130, 435 130, 435 180 Z" fill="url(#leatherBrown)" stroke="#260F04" stroke-width="3"/>

            <!-- Repoussé Copper Plaque -->
            <rect x="235" y="195" width="130" height="90" rx="6" fill="url(#copper)" stroke="#3E1102" stroke-width="2"/>
            <!-- Berber Symbol in Copper -->
            <path d="M 300 205 L 320 230 L 300 255 L 280 230 Z" fill="none" stroke="#FFE1D2" stroke-width="2.5"/>
            <circle cx="300" cy="230" r="5" fill="#FFE1D2"/>
            <line x1="260" y1="215" x2="340" y2="215" stroke="#FFE1D2" stroke-width="1.5"/>
            <line x1="260" y1="245" x2="340" y2="245" stroke="#FFE1D2" stroke-width="1.5"/>

            <!-- Copper Trim & Secret Hasp -->
            <rect x="165" y="174" width="270" height="10" fill="url(#copper)"/>
            <rect x="290" y="165" width="20" height="35" rx="3" fill="url(#copper)" stroke="#350E01" stroke-width="1.5"/>
            <circle cx="300" cy="188" r="3" fill="#200701"/>
        </svg>
    `,

    "boite-ronde": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgRonde" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#182333"/>
                    <stop offset="100%" stop-color="#0B1018"/>
                </linearGradient>
                <linearGradient id="leatherCyl" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#A54F1C"/>
                    <stop offset="35%" stop-color="#C76F32"/>
                    <stop offset="70%" stop-color="#9C4414"/>
                    <stop offset="100%" stop-color="#692C0A"/>
                </linearGradient>
                <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFF0BE"/>
                    <stop offset="100%" stop-color="#C89726"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgRonde)"/>
            <ellipse cx="300" cy="360" rx="150" ry="22" fill="#040609" opacity="0.8"/>

            <!-- Cylindrical Leather Box -->
            <!-- Cylinder Body -->
            <path d="M 180 200 L 180 310 C 180 345, 420 345, 420 310 L 420 200 Z" fill="url(#leatherCyl)" stroke="#4A1E07" stroke-width="2"/>
            <!-- Lower Rim Stitching -->
            <path d="M 185 305 C 185 335, 415 335, 415 305" fill="none" stroke="#FFD89C" stroke-width="1.8" stroke-dasharray="6,4"/>

            <!-- Box Lid / Couvercle cylindrique -->
            <path d="M 175 180 L 175 210 C 175 235, 425 235, 425 210 L 425 180 Z" fill="url(#leatherCyl)" stroke="#3E1704" stroke-width="2"/>
            <ellipse cx="300" cy="180" rx="125" ry="38" fill="#B65F25" stroke="#3E1704" stroke-width="2"/>
            <ellipse cx="300" cy="180" rx="105" ry="30" fill="#914413" stroke="#FFD89C" stroke-width="1.5"/>

            <!-- Engraved Southern Cross (Croix d'Agadez) on Lid -->
            <g transform="translate(300, 180) scale(0.65)" stroke="url(#goldAcc)" stroke-width="2.5" fill="none">
                <circle cx="0" cy="-22" r="9" fill="url(#goldAcc)"/>
                <line x1="0" y1="-12" x2="0" y2="28" stroke-width="4"/>
                <line x1="-24" y1="5" x2="24" y2="5" stroke-width="3.5"/>
                <!-- Diamond body -->
                <polygon points="0,-2 18,18 0,38 -18,18" fill="#5F2A09" stroke-width="2.5"/>
                <circle cx="0" cy="18" r="3.5" fill="url(#goldAcc)"/>
            </g>

            <!-- Braided Leather Pull Loop & Tassels -->
            <path d="M 292 155 Q 300 135 308 155" fill="none" stroke="#2B1204" stroke-width="5"/>
            <!-- Leather Fringe / Pompon -->
            <path d="M 300 225 L 290 280 M 300 225 L 300 285 M 300 225 L 310 280" stroke="#7A340C" stroke-width="3" stroke-linecap="round"/>
            <circle cx="300" cy="225" r="7" fill="url(#goldAcc)"/>
        </svg>
    `,

    "boite-rectangulaire": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgRect" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#141E2B"/>
                    <stop offset="100%" stop-color="#0A0E14"/>
                </linearGradient>
                <linearGradient id="indigoLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1F426D"/>
                    <stop offset="50%" stop-color="#152F4F"/>
                    <stop offset="100%" stop-color="#0E1D31"/>
                </linearGradient>
                <linearGradient id="tanLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#DCA462"/>
                    <stop offset="100%" stop-color="#A56E31"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgRect)"/>
            <ellipse cx="300" cy="355" rx="175" ry="18" fill="#040608" opacity="0.85"/>

            <!-- Rectangular Indigo & Ochre Box -->
            <rect x="140" y="195" width="320" height="125" rx="8" fill="url(#indigoLeather)" stroke="#091421" stroke-width="2.5"/>
            
            <!-- Dual-tone Lid -->
            <path d="M 130 195 L 180 150 L 420 150 L 470 195 Z" fill="url(#indigoLeather)" stroke="#091421" stroke-width="2"/>
            
            <!-- Ochre Leather Inlay Panels -->
            <rect x="210" y="156" width="180" height="32" rx="3" fill="url(#tanLeather)" stroke="#724716" stroke-width="1.5"/>
            <rect x="160" y="210" width="280" height="95" rx="4" fill="url(#tanLeather)" stroke="#724716" stroke-width="1.5"/>

            <!-- Geometric Stitched Tuareg Triangles -->
            <g fill="#152F4F" opacity="0.85">
                <polygon points="180,225 200,255 160,255"/>
                <polygon points="230,225 250,255 210,255"/>
                <polygon points="280,225 300,255 260,255"/>
                <polygon points="330,225 350,255 310,255"/>
                <polygon points="380,225 400,255 360,255"/>
                <polygon points="430,225 440,240 420,240"/>
            </g>

            <!-- White Bone / Horn Button Clasp -->
            <ellipse cx="300" cy="205" rx="12" ry="7" fill="#F4EADB" stroke="#38210A" stroke-width="1.5"/>
            <!-- Leather Strap closure -->
            <rect x="294" y="170" width="12" height="42" rx="3" fill="#804918"/>
            <circle cx="300" cy="205" r="3" fill="#523112"/>
        </svg>
    `,

    "etui-nomade": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgEtui" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2B211A"/>
                    <stop offset="100%" stop-color="#120E0B"/>
                </linearGradient>
                <linearGradient id="camelLeather" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#BA773C"/>
                    <stop offset="50%" stop-color="#935520"/>
                    <stop offset="100%" stop-color="#5E310C"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgEtui)"/>
            <ellipse cx="300" cy="355" rx="160" ry="16" fill="#060504" opacity="0.8"/>

            <!-- Tubular Nomad Scroll / Watch Case placed at slight dynamic angle -->
            <g transform="rotate(-14 300 230)">
                <!-- Strap loop -->
                <path d="M 120 180 C 120 70, 480 70, 480 180" fill="none" stroke="#5E310C" stroke-width="6" stroke-dasharray="8,4"/>
                
                <!-- Main Leather Tube -->
                <rect x="140" y="195" width="320" height="70" rx="35" fill="url(#camelLeather)" stroke="#3E1D05" stroke-width="2.5"/>
                
                <!-- Overlapping Cap / Embout -->
                <rect x="360" y="190" width="110" height="80" rx="40" fill="#753F15" stroke="#3E1D05" stroke-width="2"/>
                
                <!-- Tuareg Cross Stitching -->
                <line x1="160" y1="230" x2="350" y2="230" stroke="#FFDFB0" stroke-width="2" stroke-dasharray="10,6"/>
                <circle cx="210" cy="230" r="4" fill="#D4AF37"/>
                <circle cx="260" cy="230" r="4" fill="#D4AF37"/>
                <circle cx="310" cy="230" r="4" fill="#D4AF37"/>

                <!-- Braided fringes on end -->
                <path d="M 460 215 Q 500 220 520 205 M 460 230 Q 505 235 525 230 M 460 245 Q 500 245 520 255" stroke="#935520" stroke-width="3" stroke-linecap="round"/>
            </g>
        </svg>
    `,

    "boite-the": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgThe" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1B241D"/>
                    <stop offset="100%" stop-color="#0B100C"/>
                </linearGradient>
                <linearGradient id="teaLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7C4623"/>
                    <stop offset="100%" stop-color="#46220B"/>
                </linearGradient>
                <linearGradient id="copperTea" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFAA7E"/>
                    <stop offset="100%" stop-color="#B84A1A"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgThe)"/>
            <ellipse cx="300" cy="350" rx="160" ry="18" fill="#040605" opacity="0.8"/>

            <!-- Tea Box Structure -->
            <rect x="175" y="180" width="250" height="140" rx="10" fill="url(#teaLeather)" stroke="#2C1405" stroke-width="2.5"/>
            <!-- Lid with Beveled edge -->
            <path d="M 165 180 L 195 135 L 405 135 L 435 180 Z" fill="url(#teaLeather)" stroke="#2C1405" stroke-width="2"/>
            
            <!-- Mint Green and Ochre Touareg Inlays -->
            <rect x="220" y="200" width="160" height="95" rx="6" fill="#2D4D36" stroke="#132619" stroke-width="1.5"/>
            <polygon points="300,215 340,248 300,280 260,248" fill="url(#copperTea)"/>
            <!-- Tifinagh letter for peace / blessing -->
            <text x="300" y="255" fill="#FFE2D3" font-size="20" font-family="'Cinzel', serif" text-anchor="middle" font-weight="bold">ⵣ</text>

            <!-- Copper corners -->
            <polygon points="175,180 200,180 175,205" fill="url(#copperTea)"/>
            <polygon points="425,180 400,180 425,205" fill="url(#copperTea)"/>
        </svg>
    `,

    "panier-grand": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgPanier" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2A241A"/>
                    <stop offset="100%" stop-color="#14100B"/>
                </linearGradient>
                <linearGradient id="doumStraw" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#D2B57B"/>
                    <stop offset="50%" stop-color="#EADBBA"/>
                    <stop offset="100%" stop-color="#B8995C"/>
                </linearGradient>
                <pattern id="weavePattern" width="24" height="14" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 L 12 7 L 24 0 L 12 14 Z" fill="#D9BF87" stroke="#A98A48" stroke-width="0.8"/>
                    <line x1="0" y1="7" x2="24" y2="7" stroke="#8E6E2D" stroke-width="0.6"/>
                </pattern>
                <linearGradient id="handleLeather" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#7B3E19"/>
                    <stop offset="100%" stop-color="#4C210A"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgPanier)"/>
            <ellipse cx="300" cy="370" rx="165" ry="22" fill="#060503" opacity="0.85"/>

            <!-- Large Doum Woven Basket -->
            <!-- Basket Body (Trapezoid rounded) -->
            <path d="M 160 170 L 205 340 C 215 365, 385 365, 395 340 L 440 170 Z" fill="url(#doumStraw)" stroke="#826629" stroke-width="2"/>
            <!-- Woven Texture Fill -->
            <path d="M 162 172 L 206 338 C 215 363, 385 363, 394 338 L 438 172 Z" fill="url(#weavePattern)" opacity="0.85"/>

            <!-- Upper Leather Rim Border -->
            <ellipse cx="300" cy="170" rx="140" ry="26" fill="url(#handleLeather)" stroke="#371605" stroke-width="2"/>
            <ellipse cx="300" cy="170" rx="122" ry="20" fill="#2E170C"/>

            <!-- Tribal Saharan Woven Bands on Body -->
            <path d="M 178 230 C 230 250, 370 250, 422 230" fill="none" stroke="#7A2E1C" stroke-width="12" stroke-linecap="round"/>
            <path d="M 192 280 C 235 298, 365 298, 408 280" fill="none" stroke="#162942" stroke-width="9" stroke-linecap="round"/>

            <!-- Heavy Leather Stitched Handles -->
            <!-- Left Handle -->
            <path d="M 180 165 C 160 100, 230 90, 220 168" fill="none" stroke="url(#handleLeather)" stroke-width="10" stroke-linecap="round"/>
            <rect x="175" y="160" width="10" height="22" rx="3" fill="#C5A059"/>
            <rect x="215" y="162" width="10" height="22" rx="3" fill="#C5A059"/>
            
            <!-- Right Handle -->
            <path d="M 420 165 C 440 100, 370 90, 380 168" fill="none" stroke="url(#handleLeather)" stroke-width="10" stroke-linecap="round"/>
            <rect x="415" y="160" width="10" height="22" rx="3" fill="#C5A059"/>
            <rect x="375" y="162" width="10" height="22" rx="3" fill="#C5A059"/>
        </svg>
    `,

    "panier-conique": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgConique" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#24211D"/>
                    <stop offset="100%" stop-color="#100E0C"/>
                </linearGradient>
                <linearGradient id="strawLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ECD7A6"/>
                    <stop offset="100%" stop-color="#B89758"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgConique)"/>
            <ellipse cx="300" cy="365" rx="145" ry="18" fill="#060504" opacity="0.85"/>

            <!-- Conical Oasis Basket -->
            <!-- Base pot -->
            <path d="M 180 230 L 210 340 C 220 360, 380 360, 390 340 L 420 230 Z" fill="url(#strawLight)" stroke="#684F1F" stroke-width="2"/>
            
            <!-- Black and Terra-cotta Geometric bands -->
            <path d="M 195 270 Q 300 295 405 270" stroke="#1A1817" stroke-width="12" fill="none"/>
            <path d="M 205 305 Q 300 328 395 305" stroke="#9A3E25" stroke-width="8" fill="none"/>

            <!-- High Conical Lid / Couvercle pointu -->
            <polygon points="300,75 160,230 440,230" fill="url(#strawLight)" stroke="#684F1F" stroke-width="2"/>
            <!-- Triangle patterns on cone -->
            <polygon points="300,105 260,150 340,150" fill="#1A1817"/>
            <polygon points="300,160 230,225 370,225" fill="#9A3E25" stroke="#1A1817" stroke-width="2"/>
            <polygon points="300,185 270,225 330,225" fill="url(#strawLight)"/>

            <!-- Leather Top Finial & Tuft of fringes -->
            <circle cx="300" cy="72" r="10" fill="#6A2E0F"/>
            <path d="M 300 62 L 292 38 M 300 62 L 300 32 M 300 62 L 308 38" stroke="#A85724" stroke-width="3" stroke-linecap="round"/>
        </svg>
    `,

    "panier-trio": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgTrio" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#261E17"/>
                    <stop offset="100%" stop-color="#0F0C09"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgTrio)"/>
            <ellipse cx="300" cy="365" rx="200" ry="20" fill="#050403" opacity="0.85"/>

            <!-- Basket 1 (Grand - Arrière gauche) -->
            <g transform="translate(-50, 0)">
                <path d="M 180 190 L 205 320 Q 280 345 355 320 L 380 190 Z" fill="#D7BE8A" stroke="#7A602B" stroke-width="1.5"/>
                <ellipse cx="280" cy="190" rx="100" ry="20" fill="#C2A46B" stroke="#68441A" stroke-width="3"/>
            </g>

            <!-- Basket 2 (Moyen - Milieu droite) -->
            <g transform="translate(60, 25)">
                <path d="M 230 195 L 250 310 Q 315 330 380 310 L 400 195 Z" fill="#E8D19F" stroke="#7A602B" stroke-width="1.5"/>
                <ellipse cx="315" cy="195" rx="85" ry="18" fill="#B36528" stroke="#4C2508" stroke-width="3"/>
                <!-- Leather band -->
                <path d="M 240 240 Q 315 260 390 240" stroke="#723A12" stroke-width="6" fill="none"/>
            </g>

            <!-- Basket 3 (Petit - Premier plan avant centre) -->
            <g transform="translate(10, 60)">
                <path d="M 240 220 L 255 300 Q 300 315 345 300 L 360 220 Z" fill="#F1DFB7" stroke="#7A602B" stroke-width="1.5"/>
                <ellipse cx="300" cy="220" rx="60" ry="14" fill="#C78036" stroke="#4C2508" stroke-width="2.5"/>
                <circle cx="300" cy="260" r="14" fill="#3D1C06"/>
                <polygon points="300,250 310,265 290,265" fill="#FFE2BA"/>
            </g>
        </svg>
    `,

    "coffre-surmesure": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgSurMesure" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2D2115"/>
                    <stop offset="100%" stop-color="#120D07"/>
                </linearGradient>
                <linearGradient id="ebonyWood" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#251711"/>
                    <stop offset="50%" stop-color="#3D261C"/>
                    <stop offset="100%" stop-color="#1F120D"/>
                </linearGradient>
                <linearGradient id="goldLuxe" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFF3C4"/>
                    <stop offset="30%" stop-color="#E5BE53"/>
                    <stop offset="70%" stop-color="#BF9526"/>
                    <stop offset="100%" stop-color="#674B08"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgSurMesure)"/>
            <ellipse cx="300" cy="370" rx="220" ry="24" fill="#070503" opacity="0.9"/>

            <!-- High Prestige Masterpiece Wedding Chest -->
            <rect x="80" y="150" width="440" height="185" rx="10" fill="url(#ebonyWood)" stroke="#110805" stroke-width="3"/>
            <!-- Arched Dome Lid -->
            <path d="M 75 150 C 75 80, 525 80, 525 150 Z" fill="url(#ebonyWood)" stroke="#110805" stroke-width="3"/>

            <!-- Red & Ocre Moroccan-Tuareg Leather Inset Panels -->
            <rect x="110" y="170" width="100" height="135" rx="4" fill="#913320" stroke="url(#goldLuxe)" stroke-width="2"/>
            <rect x="230" y="170" width="140" height="135" rx="4" fill="#882C1B" stroke="url(#goldLuxe)" stroke-width="2"/>
            <rect x="390" y="170" width="100" height="135" rx="4" fill="#913320" stroke="url(#goldLuxe)" stroke-width="2"/>

            <!-- Royal Tuareg Brass Plate with Custom Initial Inscription -->
            <polygon points="300,120 360,175 300,230 240,175" fill="url(#goldLuxe)" stroke="#4A3403" stroke-width="2"/>
            <circle cx="300" cy="175" r="14" fill="#3D2205"/>
            <text x="300" y="182" fill="url(#goldLuxe)" font-size="18" font-family="'Cinzel', serif" text-anchor="middle" font-weight="bold">ⵣ</text>

            <!-- Heavy Brass Corner Fittings & Screws -->
            <rect x="75" y="145" width="25" height="195" fill="url(#goldLuxe)" rx="3"/>
            <rect x="500" y="145" width="25" height="195" fill="url(#goldLuxe)" rx="3"/>
            <rect x="75" y="142" width="450" height="16" fill="url(#goldLuxe)" rx="3"/>

            <!-- Wedding Ribbon Emblem Banner -->
            <path d="M 180 345 L 420 345 L 400 365 L 200 365 Z" fill="url(#goldLuxe)"/>
            <text x="300" y="360" fill="#2E1804" font-size="11" font-family="'Plus Jakarta Sans', sans-serif" letter-spacing="2.5" text-anchor="middle" font-weight="bold">PIÈCE DE MAÎTRE • SUR-MESURE</text>
        </svg>
    `,

    "boite-montres": `
        <svg viewBox="0 0 600 420" class="w-full h-full object-cover rounded-t-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgMontres" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1E1E26"/>
                    <stop offset="100%" stop-color="#0E0E12"/>
                </linearGradient>
                <linearGradient id="leatherNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2D3B4E"/>
                    <stop offset="100%" stop-color="#17202B"/>
                </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#bgMontres)"/>
            <ellipse cx="300" cy="355" rx="175" ry="18" fill="#040405" opacity="0.85"/>

            <!-- Luxury Watch & Jewelry Box -->
            <rect x="140" y="170" width="320" height="150" rx="8" fill="url(#leatherNavy)" stroke="#0C121A" stroke-width="2"/>
            
            <!-- Lid with Gold Inlaid Tuareg Lines -->
            <path d="M 130 170 L 165 125 L 435 125 L 470 170 Z" fill="url(#leatherNavy)" stroke="#0C121A" stroke-width="2"/>
            
            <!-- Brass Filigree Border -->
            <rect x="160" y="190" width="280" height="110" rx="4" fill="#222D3B" stroke="#D4AF37" stroke-width="1.2" stroke-dasharray="8,4"/>
            
            <!-- 4 Watch Pillow Slots Visible Silhouette -->
            <rect x="180" y="210" width="50" height="70" rx="6" fill="#C5A059" opacity="0.85"/>
            <rect x="245" y="210" width="50" height="70" rx="6" fill="#C5A059" opacity="0.85"/>
            <rect x="310" y="210" width="50" height="70" rx="6" fill="#C5A059" opacity="0.85"/>
            <rect x="375" y="210" width="50" height="70" rx="6" fill="#C5A059" opacity="0.85"/>

            <!-- Watch rings inside -->
            <circle cx="205" cy="245" r="16" fill="none" stroke="#222D3B" stroke-width="3"/>
            <circle cx="270" cy="245" r="16" fill="none" stroke="#222D3B" stroke-width="3"/>
            <circle cx="335" cy="245" r="16" fill="none" stroke="#222D3B" stroke-width="3"/>
            <circle cx="400" cy="245" r="16" fill="none" stroke="#222D3B" stroke-width="3"/>

            <!-- Polished brass clasp -->
            <rect x="290" y="160" width="20" height="26" rx="3" fill="#D4AF37" stroke="#5E4306" stroke-width="1.5"/>
            <circle cx="300" cy="173" r="3" fill="#222D3B"/>
        </svg>
    `
};

function getProductSvg(imageType) {
    return ProductImages[imageType] || ProductImages["coffre-grand"];
}
