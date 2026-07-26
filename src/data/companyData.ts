import {
  ProductItem,
  CapabilityItem,
  QualityStep,
  TimelineMilestone,
  IndustryServe,
  Certification,
  Testimonial,
} from '../types';

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '1995',
    title: 'Sports Gloves Workshop',
    description: 'Founded as a dedicated artisanal leather & synthetic glove crafting workshop in Sialkot, Pakistan.',
  },
  {
    year: '2004',
    title: 'Custom Apparel Expansion',
    description: 'Expanded production into performance sportswear, teamwear sublimation, and technical outdoor apparel.',
  },
  {
    year: '2012',
    title: 'Tactical Gear Division',
    description: 'Pioneered MIL-SPEC tactical glove, load-bearing gear, and combat uniform production lines.',
  },
  {
    year: '2018',
    title: 'Global OEM Partner',
    description: 'Established direct contracts with international tactical brands, law enforcement agencies, and security firms.',
  },
  {
    year: 'Today',
    title: 'International Manufacturing Hub',
    description: 'Operating state-of-the-art 65,000+ sq. ft. facilities exporting to 45+ countries with full OEM/ODM capabilities.',
  },
];

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'cap-1',
    title: 'Laser Cutting',
    description: 'High-precision computer-controlled laser cutting for tactical webbing, MOLLE panels, and Cordura sheets with sealed edges.',
    iconName: 'Scissors',
    features: ['0.1mm tolerance accuracy', 'Automatic edge cauterization', 'MOLLE-lock precision'],
  },
  {
    id: 'cap-2',
    title: 'Embroidery',
    description: 'Industrial multi-head embroidery machines for 3D tactical patches, corporate logos, and military unit insignia.',
    iconName: 'Award',
    features: ['High-density thread count', 'IRR non-reflective thread options', 'Hook & loop backing'],
  },
  {
    id: 'cap-3',
    title: 'Heat Transfer',
    description: 'Ultra-durable reflective and matte silicone heat transfers designed for extreme wear tactical and athletic apparel.',
    iconName: 'Flame',
    features: ['Wash-tested 100+ cycles', 'High elasticity', 'Matte & gloss finishes'],
  },
  {
    id: 'cap-4',
    title: 'Screen Printing',
    description: 'Plastisol, water-based, and discharge screen printing for military physical training gear and sportswear.',
    iconName: 'Printer',
    features: ['Eco-friendly inks', 'Breathable discharge prints', 'High opacity on dark fabrics'],
  },
  {
    id: 'cap-5',
    title: 'Pattern Development',
    description: '3D CAD pattern design, digital grading, and ergonomic prototyping tailored to ballistics and tactical movement.',
    iconName: 'Layers',
    features: ['3D virtual fitting', 'Zero-waste marker optimization', 'Custom size grading'],
  },
  {
    id: 'cap-6',
    title: 'CNC Mold Making',
    description: 'In-house precision CNC machining for custom TPR armor guards, knuckle protection molds, and rubber logos.',
    iconName: 'Cpu',
    features: ['Sub-millimeter CNC accuracy', 'Rapid prototype turnaround', 'Custom impact geometry'],
  },
  {
    id: 'cap-7',
    title: 'PVC Injection',
    description: 'Custom injection molding for flexible rubber patches, protective glove knuckles, and brand badges.',
    iconName: 'Box',
    features: ['Weatherproof PVC compound', 'Impact protection pads', 'Vivid Pantone matching'],
  },
  {
    id: 'cap-8',
    title: 'Velcro Sewing',
    description: 'Heavy-duty automated bar-tacking and double-needle stitching for military grade hook-and-loop closure systems.',
    iconName: 'Anchor',
    features: ['Mil-spec hook & loop', '10,000+ cycle peel adhesion', 'Reinforced perimeter box-x stitching'],
  },
  {
    id: 'cap-9',
    title: 'Seam Sealing',
    description: 'Hot-air tape seam sealing machines ensuring 100% waterproof integrity for tactical jackets, rainwear, and waders.',
    iconName: 'Shield',
    features: ['3-Layer waterproof tape', 'Hydrostatic head rating >20,000mm', 'Zero leakage guarantee'],
  },
  {
    id: 'cap-10',
    title: 'Sublimation',
    description: 'Full-bleed high-definition digital sublimation printing for camo uniforms, sports jerseys, and tactical apparel.',
    iconName: 'Sparkles',
    features: ['Fade-resistant Italian inks', 'Infrared camouflage patterns', 'Vibrant photo-realistic resolution'],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Apex Operator Tactical Gloves',
    category: 'Tactical Gloves',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Heavy-duty touchscreen combat gloves with molded TPR knuckle protection and synthetic leather palm.',
    materials: 'Clarino Synthetic Leather, Molded TPR, Spandex',
  },
  {
    id: 'p-2',
    name: 'Fast-Rope Patrol Gloves',
    category: 'Tactical Gloves',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Heat-resistant split-cowhide leather palm gloves engineered for rappelling, fast-roping, and heavy rope work.',
    materials: 'Heat-Resistant Cowhide, Kevlar Threading',
  },
  {
    id: 'p-3',
    name: 'Apex Combat Uniform Set',
    category: 'Combat Uniforms',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Ergonomic ACU combat shirt and pant ensemble with integrated removable elbow and knee pads.',
    materials: '50% Cotton / 50% Cordura Nylon Ripstop, Coolmax Torso',
  },
  {
    id: 'p-4',
    name: 'Stealth Recon Tactical Pants',
    category: 'Tactical Pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    shortDescription: '12-Pocket stretch tactical trousers with Teflon stain-resistant coating and gusseted crotch.',
    materials: '65% Polyester / 35% Cotton Ripstop, Teflon Treated',
  },
  {
    id: 'p-5',
    name: 'Tactical Duty Belt System',
    category: 'Duty Belts',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Dual-belt load-bearing system featuring quick-release cobra buckle and laser-cut MOLLE slots.',
    materials: 'High-Tensile Nylon Webbing, Aviation Aluminum Buckle',
  },
  {
    id: 'p-6',
    name: 'Operator Cap with Hook & Loop',
    category: 'Headwear',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Low-profile tactical cap with 3 patch panels, moisture-wicking sweatband, and adjustable strap.',
    materials: 'Polyester-Cotton Twill, Cool-Mesh Lining',
  },
  {
    id: 'p-7',
    name: '3-Day Assault Backpack 45L',
    category: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Rugged 1000D Cordura patrol backpack with hydration compartment, internal organizers, and MOLLE webbing.',
    materials: '1000D Cordura Nylon, YKK Zippers, UTX Buckles',
  },
  {
    id: 'p-8',
    name: 'Modular Medical Utility Pouch',
    category: 'Pouches',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Tear-away IFAK medical pouch with elastic retention loops and rapid pull handle.',
    materials: '500D Nylon, Elastic Webbing, Medical Hook Backing',
  },
  {
    id: 'p-9',
    name: 'Custom 3D Rubber Morale Patches',
    category: 'Morale Patches',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Custom molded PVC rubber morale patches with hook backing, vivid colors, and fine line detailing.',
    materials: 'Flexible Molded PVC Rubber, Male Velcro Backing',
  },
  {
    id: 'p-10',
    name: 'K9 Tactical Service Harness',
    category: 'K9 Equipment',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Heavy-duty Working Dog vest with metal leash D-rings, control handle, and MOLLE side panels.',
    materials: '1000D Nylon, Padded Mesh, Alloy Steel Buckles',
  },
];

export const QUALITY_STEPS: QualityStep[] = [
  {
    id: 1,
    stageName: 'STAGE 01',
    title: 'Raw Materials Inspection',
    description: 'Rigorous tensile testing, color fastness checks, and material flaw analysis on all incoming fabrics, leather hides, and hardware.',
    checkpoint: 'Lab Certification & Thread Density Verification',
    details: [
      'Tensile strength testing on Cordura and ripstop nylon',
      'Spectrophotometer shade matching against client Pantone specs',
      'Non-toxic dye testing and water-repellency checks',
    ],
  },
  {
    id: 2,
    stageName: 'STAGE 02',
    title: 'Precision Production',
    description: 'Laser-guided cutting and automated sewing assembly under real-time inline quality monitoring.',
    checkpoint: '0.1mm Laser Pattern Precision & Stitch Density Control',
    details: [
      'Automated CAD pattern alignment',
      'Double-stitched stress seam verification',
      'Bar-tack reinforcement at key load points',
    ],
  },
  {
    id: 3,
    stageName: 'STAGE 03',
    title: 'Mid-Line Inspection',
    description: '100% visual and structural check of sub-assemblies before final stitching and trim integration.',
    checkpoint: 'AQL 1.0 Strict Defect Clearance',
    details: [
      'Seam alignment and sizing dimensional check',
      'Zipper and buckle load-bearing stress test',
      'Velcro peel adhesion test',
    ],
  },
  {
    id: 4,
    stageName: 'STAGE 04',
    title: 'Performance Testing',
    description: 'Hydrostatic pressure testing for waterproof gear, flame resistance checks, and fast-rope abrasion simulations.',
    checkpoint: 'Full Environmental Resistance Audit',
    details: [
      '20,000mm hydrostatic water column test',
      'Tear resistance and puncture endurance audit',
      'Thermal stability and flame retardancy check',
    ],
  },
  {
    id: 5,
    stageName: 'STAGE 05',
    title: 'Final Packaging',
    description: 'Individual barcode labeling, custom brand hangtags, moisture absorber placement, and polybag sealing.',
    checkpoint: 'Barcode & OEM Packaging Integrity',
    details: [
      'Custom SKU barcode scanning & verification',
      'Desiccant pack inclusion for oceanic shipping',
      'Heavy-duty Master Carton drop-test validation',
    ],
  },
  {
    id: 6,
    stageName: 'STAGE 06',
    title: 'Worldwide Delivery',
    description: 'Customs documentation clearance, container sealing, and door-to-door air/sea freight logistics tracking.',
    checkpoint: 'Global Logistics Clearance & Dispatch',
    details: [
      'Export compliance documentation',
      'Container moisture and temperature loggers',
      'Real-time GPS tracking for global freight',
    ],
  },
];

export const INDUSTRIES_DATA: IndustryServe[] = [
  {
    id: 'ind-1',
    title: 'Military & Defense',
    description: 'Supplying tactical gear, combat uniforms, and load-bearing gear built to demanding tactical standards.',
    iconName: 'Shield',
  },
  {
    id: 'ind-2',
    title: 'Law Enforcement',
    description: 'Custom duty belts, patrol gloves, tactical vests, and tactical outerwear for police departments and tactical SWAT units.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'ind-3',
    title: 'Government Agencies',
    description: 'Contract manufacturing of standardized uniforms, outerwear, and specialized protective gear for public safety agencies.',
    iconName: 'Building2',
  },
  {
    id: 'ind-4',
    title: 'Private Security Firms',
    description: 'Professional high-durability apparel, security uniforms, and high-visibility protective accessories.',
    iconName: 'Lock',
  },
  {
    id: 'ind-5',
    title: 'Outdoor & Tactical Brands',
    description: 'Complete white-label OEM/ODM manufacturing for established global outdoor, shooting, and tactical gear brands.',
    iconName: 'Mountain',
  },
  {
    id: 'ind-6',
    title: 'Corporate Procurement',
    description: 'Bulk custom uniform production, logo patches, and custom branded gear for enterprise security teams.',
    iconName: 'Briefcase',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'SMETA Audited',
    badgeText: 'ETHICAL AUDIT',
    description: 'Audited for labor standards, health & safety, environmental management, and business ethics.',
  },
  {
    id: 'cert-2',
    title: 'BSCI Grade-A Certification',
    badgeText: 'SOCIAL COMPLIANCE',
    description: 'Full compliance with international workplace safety, fair wages, and ethical manufacturing practices.',
  },
  {
    id: 'cert-3',
    title: 'OEKO-TEX Standard 100',
    badgeText: 'SAFE TEXTILES',
    description: 'Certified free from harmful chemicals, heavy metals, and toxic substances across all fabric components.',
  },
  {
    id: 'cert-4',
    title: 'ISO Quality Standards',
    badgeText: 'QUALITY SYSTEM',
    description: 'Adhering to rigorous international quality management protocols across design and production.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Aifran Sports delivers exceptional quality and reliability. Their attention to detail and on-time delivery make them a trusted partner for our team.',
    author: 'Procurement Officer',
    role: 'Procurement Officer',
    organization: 'Special Operations Unit',
  },
  {
    id: 't-2',
    quote: 'The durability and comfort of Aifran’s gear are unmatched. Our officers rely on their products every day.',
    author: 'Lieutenant',
    role: 'Lieutenant',
    organization: 'State Police Department',
  },
  {
    id: 't-3',
    quote: 'Professional, responsive, and committed to quality. Aifran Sports is our go-to manufacturing partner.',
    author: 'Operations Manager',
    role: 'Operations Manager',
    organization: 'EMS Organization',
  },
  {
    id: 't-4',
    quote: 'From custom patches to tactical apparel, Aifran Sports Provides outstanding products and service. Highly recommended.',
    author: 'Owner',
    role: 'Owner',
    organization: 'Tactical gear Retailer',
  },
];
