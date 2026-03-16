/**
 * React hook bridging the audio engine to components.
 * Manages ambience crossfades on chapter/mood changes and exposes mute/volume controls.
 */

import { useState, useEffect, useCallback } from "react";
import { isReady, isMuted, toggleMute as rawToggle, getVolume, setVolume as rawSetVolume } from "../engine/audio";
import { startAmbience, stopAmbience } from "../engine/ambience";

export default function useAudio(chapter) {
  const [muted, setMuted] = useState(isMuted());
  const [volume, setVolumeState] = useState(getVolume());
  const [ready, setReady] = useState(isReady());

  // Start/crossfade music when chapter changes
  useEffect(() => {
    if (!isReady()) return;
    startAmbience(chapter);
  }, [chapter, ready]);

  // Poll ready state (AudioContext may start after first gesture)
  useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (isReady()) {
        setReady(true);
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }, [ready]);

  const toggle = useCallback(() => {
    const newMuted = rawToggle();
    setMuted(newMuted);
    if (newMuted) {
      stopAmbience();
    } else if (isReady()) {
      startAmbience(chapter);
    }
  }, [chapter]);

  const setVolume = useCallback((v) => {
    rawSetVolume(v);
    setVolumeState(v);
  }, []);

  // Cleanup on unmount
  useEffect(() => () => stopAmbience(), []);

  return { muted, toggleMute: toggle, volume, setVolume, isReady: ready };
}
