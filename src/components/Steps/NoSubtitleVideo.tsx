import { useRef, useState, useCallback } from 'react';
import type { Lesson } from '../../types';

interface NoSubtitleVideoProps {
  lesson: Lesson;
}

export function NoSubtitleVideo({ lesson }: NoSubtitleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
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
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 15);
    }
  }, []);

  const skipForward = useCallback(() => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 15
      );
    }
  }, []);

  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">🎬</span>
        无字幕视频
      </h2>
      <div className="video-container no-subtitle-mask">
        <video
          ref={videoRef}
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        >
          <source src={lesson.media.noSubtitleVideo} type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        <div className="subtitle-mask"></div>
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
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
              setIsPlaying(true);
            }
          }}
        >
          🔄 重播
        </button>
      </div>
      <p style={{ marginTop: 16, color: 'var(--text-secondary)', textAlign: 'center' }}>
        💡 <strong>学习提示：</strong>先关闭字幕观看视频，尝试理解大意。可以重复观看 2-3 次。
      </p>
    </div>
  );
}
