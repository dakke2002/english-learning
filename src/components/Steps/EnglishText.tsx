import { useRef, useState, useCallback } from 'react';
import type { Lesson } from '../../types';
import { DictationBox } from './DictationBox';

interface EnglishTextProps {
  lesson: Lesson;
}

export function EnglishText({ lesson }: EnglishTextProps) {
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

  const paragraphs = lesson.englishText.trim().split('\n').filter(p => p.trim());

  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">📝</span>
        纯英文本
      </h2>

      {/* 音频播放器 */}
      <div className="audio-player-section">
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
      </div>

      <div className="english-text-scrollable">
        {paragraphs.map((p, index) => (
          <p key={index}>{p.trim()}</p>
        ))}
      </div>
      <p style={{ marginTop: 16, color: 'var(--text-secondary)' }}>
        💡 <strong>学习提示：</strong>边听边阅读文本，注意发音和语调。可以多次播放直到理解。
      </p>
      <DictationBox lessonId={lesson.id} />
    </div>
  );
}
