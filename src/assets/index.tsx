// // src/assets/index.tsx
// "use client";
// import Logo from './icon/logo.svg';
// import Menu from './icon/menu.svg';
// import Close from './icon/close-circle.svg';
// import BgMenu from './icon/bgMenu.svg';
// import VectorMenu from './icon/vectorMenu.svg';
// import Right from './icon/arrow-right.svg';
// import Deco1 from './icon/deco-1.svg';
// import Right2 from './icon/arrow-right-v2.svg';
// import DecoHopTac from './icon/deco-hop-tac.svg';
// import Phone from './icon/phone.svg';
// import Email from './icon/email.svg';
// import Local from './icon/local.svg';
// import type { SVGProps } from 'react';

// // Định nghĩa type đúng cho props
// type IconProps = SVGProps<SVGSVGElement> & {
//   name?: string;
// };

// export default function Icon({ name, className, ...props }: IconProps) {
//   switch (name?.toLowerCase()) {
//     case "icon-local":
//       return <Local className={className} {...props} />;
//     case "icon-email":
//       return <Email className={className} {...props} />;
//     case "icon-phone":
//       return <Phone className={className} {...props} />;
//     case "icon-deco-hop-tac":
//       return <DecoHopTac className={className} {...props} />;
//     case "icon-deco-1":
//       return <Deco1 className={className} {...props} />;
//     case "icon-right":
//       return <Right className={className} {...props} />;
//     case "icon-right-v2":
//       return <Right2 className={className} {...props} />;
//     case "icon-vertor-menu":
//       return <VectorMenu className={className} {...props} />;
//     case "icon-bg-menu":
//       return <BgMenu className={className} {...props} />;
//     case "icon-close":
//       return <Close className={className} {...props} />;
//     case "icon-logo":
//       return <Logo className={className} {...props} />;
//     case "icon-menu":
//       return <Menu className={className} {...props} />;
//     default:
//       return null;
//   }
// }

// src/assets/index.tsx
"use client";
import dynamic from 'next/dynamic';
import type { SVGProps, ComponentType } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  name?: string;
};

// Định nghĩa type đúng cho SVG component
type SVGComponent = ComponentType<SVGProps<SVGSVGElement>>;

const IconComponents: Record<string, SVGComponent> = {
  'icon-local': dynamic(() => import('./icon/local.svg')) as SVGComponent,
  'icon-email': dynamic(() => import('./icon/email.svg')) as SVGComponent,
  'icon-phone': dynamic(() => import('./icon/phone.svg')) as SVGComponent,
  'icon-deco-hop-tac': dynamic(() => import('./icon/deco-hop-tac.svg')) as SVGComponent,
  'icon-deco-1': dynamic(() => import('./icon/deco-1.svg')) as SVGComponent,
  'icon-right': dynamic(() => import('./icon/arrow-right.svg')) as SVGComponent,
  'icon-right-v2': dynamic(() => import('./icon/arrow-right-v2.svg')) as SVGComponent,
  'icon-vertor-menu': dynamic(() => import('./icon/vectorMenu.svg')) as SVGComponent,
  'icon-bg-menu': dynamic(() => import('./icon/bgMenu.svg')) as SVGComponent,
  'icon-close': dynamic(() => import('./icon/close-circle.svg')) as SVGComponent,
  'icon-logo': dynamic(() => import('./icon/logo.svg')) as SVGComponent,
  'icon-menu': dynamic(() => import('./icon/menu.svg')) as SVGComponent,
};

export default function Icon({ name, className, ...props }: IconProps) {
  if (!name) return null;
  
  const IconComponent = IconComponents[name.toLowerCase()];
  
  if (!IconComponent) return null;

  // Truyền className và props vào component
  return <IconComponent className={className} {...props} />;
}