import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api';

interface VerificationCode {
  id: number;
  code: string;
  is_used: boolean;
  max_uses: number;
  expires_at: string | null;
  created_at: string;
}

export function AdminPage() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [codes, setCodes] = useState<VerificationCode[]>([]);
  const [maxUses, setMaxUses] = useState(1);
  const [expiresAt, setExpiresAt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 检查登录状态
  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
      fetchCodes(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '登录失败');
      }

      localStorage.setItem('adminToken', data.token);
      setToken(data.token);
      setIsLoggedIn(true);
      fetchCodes(data.token);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCodes = async (authToken: string) => {
    try {
      const res = await fetch(`${API_URL}/admin/codes`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      });

      if (res.ok) {
        const data = await res.json();
        setCodes(data);
      }
    } catch (err) {
      console.error('获取验证码失败', err);
    }
  };

  const handleCreateCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/admin/create-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          maxUses,
          expiresAt: expiresAt || null
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '创建失败');
      }

      alert(`验证码创建成功：${data.code}`);
      fetchCodes(token);
      setMaxUses(1);
      setExpiresAt('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsLoggedIn(false);
    setCodes([]);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h2 className="login-title">管理员登录</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label>密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>验证码管理</h1>
        <button className="btn btn-secondary" onClick={handleLogout} style={{ width: 'auto' }}>
          退出登录
        </button>
      </div>

      <div className="content-card" style={{ marginBottom: '20px' }}>
        <h3>创建新验证码</h3>
        <form onSubmit={handleCreateCode} style={{ marginTop: '16px' }}>
          <div className="form-group">
            <label>最大使用次数</label>
            <input
              type="number"
              value={maxUses}
              onChange={(e) => setMaxUses(Number(e.target.value))}
              min="1"
            />
          </div>
          <div className="form-group">
            <label>过期时间（可选）</label>
            <input
              type="date"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '创建中...' : '生成验证码'}
          </button>
        </form>
      </div>

      <div className="content-card">
        <h3>验证码列表</h3>
        <table style={{ width: '100%', marginTop: '16px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>验证码</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>使用次数</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>过期时间</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>状态</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>创建时间</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((code) => (
              <tr key={code.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '14px' }}>{code.code}</td>
                <td style={{ padding: '12px' }}>{code.is_used ? '已使用' : `0/${code.max_uses}`}</td>
                <td style={{ padding: '12px' }}>{code.expires_at ? new Date(code.expires_at).toLocaleDateString() : '永不过期'}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: code.is_used ? '#ffebee' : '#e8f5e9',
                    color: code.is_used ? '#f44336' : '#4caf50'
                  }}>
                    {code.is_used ? '已使用' : '有效'}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{new Date(code.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
