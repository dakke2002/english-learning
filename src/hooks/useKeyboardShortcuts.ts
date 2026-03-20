import { useEffect, useCallback } from 'react';

interface UseKeyboardShortcutsOptions {
  onStepChange: (step: number) => void;
  isVideoStep: boolean;
}

export function useKeyboardShortcuts({
  onStepChange,
  isVideoStep
}: UseKeyboardShortcutsOptions) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Alt + 1-7 to switch steps
    if (e.altKey && e.key >= '1' && e.key <= '7') {
      e.preventDefault();
      const stepId = parseInt(e.key, 10);
      onStepChange(stepId);
    }

    // Space to play/pause video (only in video steps and when video is not focused)
    if (e.code === 'Space' && isVideoStep) {
      const video = document.querySelector('video');
      if (video && document.activeElement !== video) {
        e.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }, [onStepChange, isVideoStep]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
