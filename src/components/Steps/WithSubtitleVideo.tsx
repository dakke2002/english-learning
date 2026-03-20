import { useRef, useState, useCallback } from 'react';
import type { Lesson } from '../../types';
import { DictationBox } from './DictationBox';

interface WithSubtitleVideoProps {
  lesson: Lesson;
}

export function WithSubtitleVideo({ lesson }: WithSubtitleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

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
        <span className="card-icon">📺</span>
        中英双语字幕
      </h2>
      <div className="video-container">
        <video
          ref={videoRef}
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        >
          <source src={lesson.media.withSubtitleVideo} type="video/mp4" />
          <track
            label="中文"
            kind="subtitles"
            srcLang="zh"
            src={`/subtitles/${lesson.id}-zh.vtt`}
            default
          />
          您的浏览器不支持视频播放。
        </video>
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
        💡 <strong>学习提示：</strong>对照中英文字幕理解内容，注意生词和表达方式。
      </p>
      <DictationBox lessonId={lesson.id} />
    </div>
  );
}
