'use client';

import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
import { useSelect, useSlider } from '@hooks/use-input';
import { useMenuToggle } from '@hooks/use-menu-toggle';
import { iconStyles } from '@constants/icon-styles';
import classes from './page.module.css';

export default function Home() {
  const [showSidebar, toggleShowSidebar, isWidescreen] = useMenuToggle(920);
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);
  const [iconStyle, setIconStyle] = useSelect('outline');

  const iconStyleLabel = iconStyles.filter((style) => style.value === iconStyle).at(0)?.label ?? '';
  const sectionStyle = getComputedStyle(showSidebar, isWidescreen);

  return (
    <main className={classes['main']}>
      {/* <div className={classes['gradient-stripe']} /> */}
      <Nav toggleSidebar={toggleShowSidebar} />
      <section className={classes['section']} style={sectionStyle}>
        <Sidebar
          menuProps={[showSidebar, toggleShowSidebar, isWidescreen]}
          sizeProps={[size, setSize, restSizeProps]}
          iconStyleProps={[iconStyle, setIconStyle]}
        />
        <IconGallery iconStyle={iconStyleLabel} size={size} />
      </section>
    </main>
  );
}

function getComputedStyle(showSidebar: boolean | null, isWidescreen: boolean | null) {
  if (showSidebar === null) {
    return {};
  } else if (showSidebar && isWidescreen) {
    return {};
  } else if (isWidescreen && showSidebar) {
    return { gridTemplateColumns: 'var(--space-344) 1fr' };
  } else {
    return { gridTemplateColumns: '0 1fr' };
  }
}
