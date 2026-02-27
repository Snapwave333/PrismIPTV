import React from 'react';
import { Sidebar } from './Sidebar';
import { useAppStore, type AppMode } from '../../stores/useAppStore';
import { Menu, Tv, Mic, Trophy, Heart, Settings, Ghost } from 'lucide-react';
import { MediaPlayer } from '../player/MediaPlayer';
import { Breadcrumbs } from './Breadcrumbs';
import styles from './MainLayout.module.css';
import clsx from 'clsx';

const BOTTOM_NAV_ITEMS: { id: AppMode; label: string; icon: React.ElementType }[] = [
  { id: 'tv', label: 'Live', icon: Tv },
  { id: 'sports', label: 'Sports', icon: Trophy },
  { id: 'anime', label: 'Anime', icon: Ghost },
  { id: 'audio', label: 'Radio', icon: Mic },
  { id: 'favorites', label: 'Favs', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface MainLayoutProps {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, rightPanel }) => {
  console.log('MainLayout: Render');
  const { toggleSidebar, setMode, mode } = useAppStore();
  const [isSheetExpanded, setIsSheetExpanded] = React.useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.mobileHeader}>
          <button className={styles.menuBtn} onClick={() => toggleSidebar()}>
            <Menu size={24} />
          </button>
          <span className={styles.mobileTitle}>Prism</span>
        </header>

        <section className={styles.playerSection}>
          <div className={styles.playerContainer}>
            <MediaPlayer />
          </div>
          {rightPanel && (
            <div className={styles.sidePanel}>
              {rightPanel}
            </div>
          )}
        </section>
        
        <div 
          className={styles.contentSheet}
          style={{ top: isSheetExpanded ? '0' : undefined }}
        >
          <div 
            className={styles.sheetHandle} 
            onClick={() => setIsSheetExpanded(!isSheetExpanded)}
          />
          <div className={styles.scrollableContent}>
            <Breadcrumbs />
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <div className={styles.bottomNavInner}>
          {BOTTOM_NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={clsx(styles.bottomNavItem, mode === id && styles.bottomNavItemActive)}
              onClick={() => setMode(id)}
            >
              <Icon size={22} />
              <span className={styles.bottomNavLabel}>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

