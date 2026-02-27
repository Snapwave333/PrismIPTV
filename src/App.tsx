import { useEffect, Suspense } from 'react';
import { DesktopPlayer } from './components/player/DesktopPlayer';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ParentalControls } from './components/ParentalControls/ParentalControls';
import { useAppStore } from './stores/useAppStore';
import { App as CapacitorApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';

const Loading = () => {
  console.log('App: Rendering Loading component');
  return (
  <div className="flex justify-center items-center bg-neutral-900 h-screen text-white">
    <div className="border-primary-500 border-t-2 border-b-2 rounded-full w-8 h-8 animate-spin"></div>
  </div>
)};

function App() {
  console.log('App: Render Cycle Start');
  useKeyboardShortcuts();
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  useEffect(() => {
    const handleHardwareBack = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      } else {
        CapacitorApp.exitApp();
      }
    };

    const removeListener = CapacitorApp.addListener('backButton', handleHardwareBack);

    return () => {
      removeListener.then((fn: { remove: () => void }) => fn.remove());
    };
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const setupStatusBar = async () => {
      try {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#0f172a' });
      } catch (e) {
        console.log('StatusBar not available:', e);
      }
    };
    setupStatusBar();
  }, []);


  useEffect(() => {
    console.log('App: useEffect - Component Mounted');
    import('./services/remote').then(({ remoteService }) => {
      remoteService.connect();
    });
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <DesktopPlayer />
        <ParentalControls />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
