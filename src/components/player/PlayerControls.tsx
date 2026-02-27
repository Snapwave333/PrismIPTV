import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { usePlayerStore } from '../../stores/usePlayerStore';
import { clsx } from 'clsx';
import styles from './PlayerControls.module.css';

export const PlayerControls: React.FC = () => {
  const { isPlaying, play, pause, volume, setVolume, isMuted, toggleMute } = usePlayerStore();
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => isPlaying ? pause() : play();

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  const handleTouchTap = () => {
    setShowControls(!showControls);
    setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div 
      className={clsx(styles.controls, showControls && styles.controlsVisible)} 
      onClick={handleTouchTap}
    >
      <button 
        className={clsx(styles.iconBtn, 'btn-glow')} 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <div className={styles.volumeGroup}>
        <button 
          className={styles.iconBtn} 
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
          className={styles.volumeSlider}
        />
      </div>

      <div className={styles.spacer} />

      <button 
        className={styles.iconBtn} 
        onClick={handleFullscreen}
        aria-label="Toggle Fullscreen"
      >
        <Maximize size={20} />
      </button>
    </div>
  );
};
