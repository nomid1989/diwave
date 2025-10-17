# 📸 План розміщення фотографій у стилі iOS 26

## 🎨 Ключові принципи iOS 26 Design

### Visual Style
- **Liquid Glass Effect** - прозорі, скляні елементи з blur ефектом
- **Layered Depth** - багатошаровість з м'якими тінями
- **Dynamic Backgrounds** - градієнти та живі фони
- **Parallax Effects** - легкі зміщення при скролі
- **Full-Width Heroes** - широкі hero секції на весь екран
- **Device-First** - акцент на реальних девайсах/продуктах

---

## 📄 ГОЛОВНА СТОРІНКА (Home)

### 🎯 Hero Section
**Стиль:** Full-width з gradient overlay
**Фото:**
- `gnizdo-team/fpv-crafting.avif` - основне hero фото
- `gnizdo-team/team-meeting.avif` - другий слайд
- `gnizdo-team/fpv-riding.avif` - третій слайд

**iOS 26 ефекти:**
```css
- backdrop-filter: blur(40px) saturate(180%)
- Gradient overlay: from-black/20 to-black/60
- Parallax: translateY(-10% on scroll)
- Scale: 1.05 on hover
```

### 🏭 Solutions Cards (3 картки)
**Layout:** Grid 3 columns, glassmorphism cards

**Картка 1 - SamWash:**
```
Фото: industries/samwash/main-station.jpg
Style: Vertical card, h-96
Effect: Frosted glass border, hover lift
```

**Картка 2 - Vending:**
```
Фото: industries/vending/vacuum-main.jpg
Style: Vertical card, h-96
Effect: Purple accent gradient
```

**Картка 3 - FPV Drones:**
```
Фото: gnizdo-team/fpv-11.avif
Style: Vertical card, h-96
Effect: Cyan/blue gradient overlay
```

### 🎬 Featured Project Section
**Layout:** 2 columns (text + image)
**Фото:** `solutions/alcohol-vending/vending-mashines-coffe.png`
**Style:** Large product shot з rounded corners
**Effect:**
- Floating shadow: shadow-2xl shadow-cyan-500/20
- Gradient glow background
- Image scales 1.02 on viewport entry

### 📸 Gallery Grid (4-6 фото)
**Layout:** Masonry grid або Bento Box (iOS style)
**Фото:**
```
1. gnizdo-team/team-work.avif (командна робота)
2. projects/car-wash/station-exterior.jpg (автомийка)
3. gnizdo-team/fpv-riding.avif (дрони в польоті)
4. industries/vending/vacuum-in-action.jpg (вендинг)
5. projects/ecommerce/plantpol-hero.avif (e-commerce)
6. home/equipment.avif (обладнання)
```

**iOS 26 Style:**
- Різні розміри: 1x1, 2x1, 1x2 (як iPhone фото галерея)
- Rounded-3xl corners
- Hover: brightness(1.1) + scale(1.05)
- Stagger animation on scroll

### 🏢 Industries Icons
**Layout:** 4 колонки на desktop
**Фото з кожної папки industries:**
```
- automotive: automotive/car-interior.jpg
- vending: vending/machine-touch.jpg
- fintech: fintech/payment-terminal.jpg
- energy: energy/solar-panels.jpg
- retail: retail/store-front.jpg
- logistics: logistics/warehouse.jpg
- iot: iot/sensor-devices.jpg
- marketing: marketing/analytics-dashboard.jpg
```

**Style:** Icon card з hover reveal
- Initial: Gradient + icon
- Hover: Fade in photo з frosted glass overlay

---

## 💼 PROJECTS PAGE

### Hero
**Фото:** `projects/img.png` (загальне фото проектів)
**Style:** Full-width з text overlay

### Project Cards Grid
**Layout:** 2-3 columns responsive

#### E-commerce Projects
```
1. plantpol/Головна.avif
2. lembergflowers/screenshot-main.avif
3. portpholio/Blyzenko.avif
```

#### Car Wash Projects
```
1. projects/car-wash/station-day.jpg
2. projects/car-wash/control-panel.jpg
3. samwash/Знімок екрана (різні інтерфейси)
```

#### Vending Projects
```
1. projects/vending/machine-outdoor.jpg
2. samwash/vending-mashines-coffe.avif
3. samwash/self-vacuum-cleaner.avif
```

#### Drones Projects
```
1. gnizdo-team/fpv-11.avif
2. gnizdo-team/team-vader-freestyle.avif
3. gnizdo-team/dji-mavic-4.avif
```

**iOS 26 Card Style:**
```css
.project-card {
  border-radius: 24px;
  backdrop-filter: blur(30px);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0,200,255,0.2);
}
```

---

## 🏢 INDUSTRIES PAGE

### Hero Section
**Layout:** Full-width з animated gradient
**Фото:** Динамічно міняється залежно від індустрії

### Industry Detail Pages

#### Automotive
```
Hero: industries/automotive/hero-car.jpg
Gallery:
- automotive/wash-station.jpg
- automotive/payment-terminal.jpg
- automotive/vacuum-system.jpg
```

#### Vending
```
Hero: industries/vending/vacuum-main.jpg
Gallery:
- vending/machine-touchscreen.jpg
- vending/installation-outdoor.jpg
- vending/payment-nfc.jpg
```

**Bento Box Layout** (як у Apple):
```
┌─────────────┬──────┐
│             │      │
│   Large     │ Med  │
│   2x2       │ 1x2  │
│             │      │
├──────┬──────┼──────┤
│ Med  │ Med  │ Med  │
│ 1x1  │ 1x1  │ 1x1  │
└──────┴──────┴──────┘
```

---

## 👥 ABOUT PAGE (Про нас)

### Hero Cards (3 фото)
✅ **Вже реалізовано:**
```
- fpv-crafting.avif
- team-meeting.avif
- fpv-riding.avif
```

### Founder Photo
✅ **Вже реалізовано:**
```
Фото: gnizdo-team/dmytro-kravets.jpg
Style: Object-contain, h-fit
```

### Team Grid (3 learning фото)
✅ **Вже реалізовано:**
```
- about/learning2025-1-nobg.avif
- about/learning2025-2.avif
- about/learning2025.avif
```

### Додаткова команда (якщо потрібно)
```
Gallery фото всієї команди:
- gnizdo-team/team-work.avif
- gnizdo-team/nrk-team.avif
- gnizdo-team/fpv-team-work.avif
```

### CTA Photo
✅ **Вже реалізовано:**
```
Фото: gnizdo-team/team-work.avif
```

---

## 📞 CONTACT PAGE

### Hero Image
**Фото:** `contacts/1D55D514-B7F2-4D0E-BAD2-65604AA99AF2_1_105_c.avif`
**Style:** Rounded card з contact info overlay

### Office/Team Photos
```
Background pattern:
- gnizdo-team/team-meeting.avif (blur 60px)
- about/fpv-working-testing.avif (blur 60px)
```

---

## 🛠️ SOLUTIONS PAGES

### Car Washes (SamWash)
```
Hero: solutions/car-washes/main-hero.jpg
Features:
1. solutions/car-washes/control-panel.jpg
2. solutions/car-washes/payment-system.jpg
3. solutions/car-washes/night-lighting.jpg
```

### Vending Machines
```
Hero: solutions/alcohol-vending/vending-mashines-coffe.png
Gallery:
- alcohol-vending/vending-mashines-snaks.png
- self-vacuum-cleaner/vacuum-front.jpg
- self-vacuum-cleaner/vacuum-control.jpg
```

### E-commerce
```
Hero: solutions/ecommerce/plantpol-hero.png
Screens:
- plantpol/Головна.avif
- plantpol/Каталог-Товари.avif
- plantpol/Кошик.avif
- plantpol/plantpol-analitycs.avif
```

### Drones (FPV)
```
Hero: solutions/drones/fpv-hero.jpg
Action shots:
- gnizdo-team/fpv-riding.avif
- gnizdo-team/team-vader-freestyle.avif
- gnizdo-team/fpv-11.avif
- gnizdo-team/vader-mini-whoop.avif
```

---

## 🎭 iOS 26 DESIGN PATTERNS

### 1. **Hero Sections**
```css
/* Full-width hero з parallax */
.hero-section {
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Parallax on scroll */
.hero-image[data-scroll] {
  transform: scale(1.1) translateY(calc(var(--scroll) * -0.5px));
}
```

### 2. **Bento Box Grid** (як у iOS 16+)
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 40px;
}

.bento-item-large {
  grid-column: span 2;
  grid-row: span 2;
  border-radius: 32px;
}

.bento-item-medium {
  grid-column: span 2;
  grid-row: span 1;
  border-radius: 24px;
}

.bento-item-small {
  grid-column: span 1;
  grid-row: span 1;
  border-radius: 20px;
}
```

### 3. **Frosted Glass Cards**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px) saturate(180%) brightness(1.1);
  -webkit-backdrop-filter: blur(40px) saturate(180%) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(255, 255, 255, 0.5) inset;
}
```

### 4. **Image Hover Effects**
```css
.image-card {
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 200, 255, 0.25);
}

.image-card img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-card:hover img {
  transform: scale(1.1);
}
```

### 5. **Stagger Animation** (послідовна поява)
```javascript
// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};
```

---

## 📊 Статистика фото по категоріях

### Команда (gnizdo-team/): 45 фото
- Team photos: 8
- FPV action: 12
- Portraits: 10
- Work process: 15

### Проекти (projects/): 30+
- Car wash: 8
- Vending: 6
- E-commerce: 10
- Drones: 6

### Industries: 50+
- Automotive: 8
- Vending: 12
- Energy: 5
- IoT: 8
- Fintech: 6

### Solutions: 40+
- Car washes: 15
- Vending: 10
- E-commerce: 10
- Drones: 5

---

## 🎯 Пріоритети реалізації

### Phase 1 (Високий пріоритет)
- ✅ About page - вже зроблено
- [ ] Home page hero section
- [ ] Home solutions cards
- [ ] Home featured project

### Phase 2 (Середній пріоритет)
- [ ] Projects page grid
- [ ] Industries detail pages
- [ ] Solutions pages galleries

### Phase 3 (Низький пріоритет)
- [ ] Contact page background
- [ ] Team individual pages
- [ ] Blog/Case studies galleries

---

## 💡 Рекомендації

1. **Lazy Loading** - використовувати SmartImage для всіх фото
2. **AVIF → WebP → JPG** fallback для кращої продуктивності
3. **Responsive Images** - srcset з різними розмірами
4. **Blur placeholder** - показувати blur під час завантаження
5. **Parallax** - додати parallax ефект на hero секціях
6. **Hover animations** - м'які transitions на всіх картках
7. **Dark/Light mode** - різні brightness для тем

---

## 🔗 Apple Design Resources
- https://www.apple.com/os/ios/ - iOS 26 reference
- https://www.apple.com/os/macos/ - macOS design
- https://www.apple.com/os/ipados/ - iPadOS patterns
- https://developer.apple.com/design/human-interface-guidelines/

