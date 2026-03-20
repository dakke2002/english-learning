import { useRef, useState, useCallback } from 'react';
import type { Lesson } from '../../types';
import { DictationBox } from './DictationBox';

interface AudioStepProps {
  lesson: Lesson;
}

export function AudioStep({ lesson }: AudioStepProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const skipBackward = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
    }
  }, []);

  const skipForward = useCallback(() => {
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 15
      );
    }
  }, []);

  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">🎧</span>
        音频练习
      </h2>
      <div className="audio-container">
        <audio
          ref={audioRef}
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        >
          <source src={lesson.media.audio} type="audio/mpeg" />
          <source src={lesson.media.audio} type="video/mp4" />
          您的浏览器不支持音频播放。
        </audio>
      </div>
      <div className="media-controls">
        <button
          className="btn btn-secondary"
          onClick={skipBackward}
          title="后退 15 秒"
        >
          ⏪ -15s
        </button>
        <button className="btn btn-primary" onClick={togglePlay}>
          {isPlaying ? '⏸️ 暂停' : '▶️ 播放'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={skipForward}
          title="前进 15 秒"
        >
          +15s ⏩
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
              setIsPlaying(true);
            }
          }}
        >
          🔄 重播
        </button>
      </div>
      <p style={{ marginTop: 16, color: 'var(--text-secondary)', textAlign: 'center' }}>
        💡 <strong>学习提示：</strong>闭上眼睛专注听，尝试捕捉每个单词。可以反复听直到理解。
      </p>
      <DictationBox lessonId={lesson.id} />
    </div>
  );
}
