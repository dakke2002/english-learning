import { useState, useRef, useCallback, useEffect } from 'react';

interface DictationBoxProps {
  lessonId: string;
}

// 生成统一的 localStorage 键名
const getStorageKey = (lessonId: string) => `dictation-${lessonId}`;
const getFormatStorageKey = (lessonId: string) => `dictation-format-${lessonId}`;

interface TextFormat {
  bold: boolean;
  strikethrough: boolean;
  color: string;
}

export function DictationBox({ lessonId }: DictationBoxProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [content, setContent] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const storageKey = getStorageKey(lessonId);
  const formatStorageKey = getFormatStorageKey(lessonId);

  // 当前文本格式设置
  const [currentFormat, setCurrentFormat] = useState<TextFormat>({
    bold: false,
    strikethrough: false,
    color: '#333333'
  });

  // 检测是否有内容
  const hasContent = content.trim().length > 0;

  // 从 localStorage 加载内容和格式
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    const savedFormat = localStorage.getItem(formatStorageKey);
    if (saved) {
      setContent(saved);
    }
    if (savedFormat) {
      try {
        setCurrentFormat(JSON.parse(savedFormat));
      } catch (e) {
        // ignore parse errors
      }
    }
  }, [storageKey, formatStorageKey]);

  // 监听其他标签页/组件的 localStorage 变化
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageKey) {
        setContent(e.newValue || '');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [storageKey]);

  // 切换最小化/展开状态
  const toggleMinimize = useCallback(() => {
    if (isMinimized) {
      setIsVisible(true);
      setTimeout(() => setIsMinimized(false), 10);
    } else {
      setIsMinimized(true);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isMinimized]);

  // 处理内容变化（实时更新）
  const handleContentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    localStorage.setItem(storageKey, newContent);
    // 触发自定义事件，通知同一页面的其他组件
    window.dispatchEvent(new CustomEvent('dictation-change', { detail: { key: storageKey, value: newContent } }));
  }, [storageKey]);

  // 保存并最小化
  const handleSave = useCallback(() => {
    localStorage.setItem(formatStorageKey, JSON.stringify(currentFormat));
    setIsMinimized(true);
    setTimeout(() => setIsVisible(false), 300);
  }, [currentFormat, formatStorageKey]);

  // 清空内容
  const handleClear = useCallback(() => {
    setContent('');
    localStorage.setItem(storageKey, '');
    window.dispatchEvent(new CustomEvent('dictation-change', { detail: { key: storageKey, value: '' } }));
  }, [storageKey]);

  // 切换加粗
  const toggleBold = useCallback(() => {
    setCurrentFormat(prev => {
      const newFormat = { ...prev, bold: !prev.bold };
      localStorage.setItem(formatStorageKey, JSON.stringify(newFormat));
      return newFormat;
    });
  }, [formatStorageKey]);

  // 切换删除线
  const toggleStrikethrough = useCallback(() => {
    setCurrentFormat(prev => {
      const newFormat = { ...prev, strikethrough: !prev.strikethrough };
      localStorage.setItem(formatStorageKey, JSON.stringify(newFormat));
      return newFormat;
    });
  }, [formatStorageKey]);

  // 更改颜色
  const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCurrentFormat(prev => {
      const newFormat = { ...prev, color: newColor };
      localStorage.setItem(formatStorageKey, JSON.stringify(newFormat));
      return newFormat;
    });
  }, [formatStorageKey]);

  // 监听同一页面其他组件的 dictation-change 事件
  useEffect(() => {
    const handleDictationChange = (e: CustomEvent) => {
      if (e.detail.key === storageKey) {
        setContent(e.detail.value);
      }
    };
    window.addEventListener('dictation-change' as any, handleDictationChange);
    return () => window.removeEventListener('dictation-change' as any, handleDictationChange);
  }, [storageKey]);

  // 键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 只有在 textarea 聚焦时才触发
      if (document.activeElement !== textareaRef.current) return;

      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        toggleBold();
      }
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        toggleStrikethrough();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleBold, toggleStrikethrough]);

  // 编辑模式时，如果有初始内容，允许查看
  useEffect(() => {
    if (content && !isVisible && !isMinimized) {
      setIsVisible(true);
    }
  }, [content, isVisible, isMinimized]);

  // 获取文本区域的样式
  const getTextareaStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {
      color: currentFormat.color,
      fontFamily: 'inherit',
      fontSize: '15px',
      lineHeight: '1.6',
    };
    if (currentFormat.bold) {
      style.fontWeight = '700';
    } else {
      style.fontWeight = '400';
    }
    if (currentFormat.strikethrough) {
      style.textDecoration = 'line-through';
    } else {
      style.textDecoration = 'none';
    }
    return style;
  };

  return (
    <div className={`dictation-box ${isMinimized ? 'minimized' : ''}`}>
      <div className="dictation-header">
        <span className="dictation-title">
          {isMinimized && hasContent ? (
            <>
              📝 听写笔记 <span className="content-indicator">({content.length} 字符)</span>
            </>
          ) : (
            '📝 听写笔记'
          )}
        </span>
        <div className="dictation-actions">
          {!isMinimized && (
            <>
              <div className="format-tools">
                <button
                  className={`dictation-btn format-btn ${currentFormat.bold ? 'active' : ''}`}
                  onClick={toggleBold}
                  title="加粗 (Ctrl+B)"
                >
                  <strong>B</strong>
                </button>
                <button
                  className={`dictation-btn format-btn ${currentFormat.strikethrough ? 'active' : ''}`}
                  onClick={toggleStrikethrough}
                  title="删除线 (Ctrl+D)"
                >
                  <span style={{ textDecoration: 'line-through' }}>S</span>
                </button>
                <div className="color-picker-wrapper">
                  <input
                    type="color"
                    value={currentFormat.color}
                    onChange={handleColorChange}
                    title="字体颜色"
                    className="color-picker"
                  />
                </div>
              </div>
              <button className="dictation-btn dictation-btn-save" onClick={handleSave} title="保存并最小化">
                💾 保存
              </button>
              {hasContent && (
                <button className="dictation-btn dictation-btn-clear" onClick={handleClear} title="清空内容">
                  🗑️ 清空
                </button>
              )}
            </>
          )}
          <button
            className="dictation-btn dictation-btn-toggle"
            onClick={toggleMinimize}
            title={isMinimized ? '展开编辑' : '最小化'}
          >
            {isMinimized ? '🔽 展开' : '🔼 最小化'}
          </button>
        </div>
      </div>
      <div className={`dictation-content ${isVisible ? 'visible' : ''}`}>
        <textarea
          ref={textareaRef}
          className="dictation-textarea"
          value={content}
          onChange={handleContentChange}
          style={getTextareaStyle()}
          placeholder="在此输入听写内容，支持换行..."
          rows={8}
        />
      </div>
    </div>
  );
}

export default DictationBox;
