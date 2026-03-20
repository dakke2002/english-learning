import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001/api';

// 生成随机验证码
function generateCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const navigate = useNavigate();

  // 检查是否已登录
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${API_URL}/verify`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (data.valid) {
            navigate('/courses/daily-english');
          }
        })
        .catch(() => {});
    }
  }, [navigate]);

  // 生成验证码
  const handleGenerateCode = () => {
    if (!email) {
      setError('请先输入邮箱');
      return;
    }
    const code = generateCode();
    setGeneratedCode(code);
    setVerificationCode(code);
    setShowCode(true);
    setError('');

    // 复制到剪贴板
    navigator.clipboard.writeText(code).then(() => {
      setSuccess('验证码已生成并复制到剪贴板！请妥善保存');
    }).catch(() => {
      setSuccess('验证码已生成：' + code);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // 先尝试登录
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: verificationCode, verificationCode })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '操作失败');
      }

      // 登录成功，保存 token
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', data.email);
      setSuccess('登录成功！正在跳转...');
      setTimeout(() => navigate('/courses/daily-english'), 1000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  // 检查是否已登录
  const token = localStorage.getItem('token');
  if (token) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h2>已登录</h2>
          <p>邮箱：{localStorage.getItem('userEmail')}</p>
          <button className="btn btn-primary" onClick={handleLogout}>
            退出登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">验证码登录</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '20px', fontSize: '14px' }}>
          输入邮箱，生成验证码作为密码登录
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>邮箱</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>验证码（即密码，请妥善保存）</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                placeholder="输入或生成验证码"
                required
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleGenerateCode}
                style={{ width: 'auto', whiteSpace: 'nowrap' }}
              >
                生成验证码
              </button>
            </div>
            {showCode && generatedCode && (
              <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--primary-color)' }}>
                ✨ 验证码已生成！请复制保存，下次登录需要使用相同的验证码
              </p>
            )}
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '处理中...' : '登录 / 注册'}
          </button>
        </form>

        <div className="login-toggle">
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            💡 首次登录会自动注册，每次登录需使用相同的验证码
          </p>
        </div>
      </div>
    </div>
  );
}
