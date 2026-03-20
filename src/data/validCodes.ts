// 有效验证码列表
// 添加新验证码：在数组中添加 { code: '你的验证码', label: '备注' }

export interface ValidCode {
  code: string;
  expiresAt?: string; // 可选，格式：YYYY-MM-DD，不设置则永不过期
  label?: string; // 备注标签
}

export const validCodes: ValidCode[] = [
  { code: 'ENGLISH2026', label: '长期验证码' },
  { code: 'DREAM001', label: '测试用户 001' },
  { code: 'DREAM002', label: '测试用户 002' },
  { code: 'MUSIC001', label: '测试用户 003' },
  // 添加更多验证码...
  // { code: 'NEWCODE', expiresAt: '2026-12-31', label: '有效期至 2026 年底' },
];

// 检查验证码是否有效
export function isValidCode(code: string): boolean {
  const now = new Date();
  return validCodes.some(item => {
    if (item.code.toUpperCase() === code.toUpperCase().trim()) {
      if (item.expiresAt) {
        return new Date(item.expiresAt) > now;
      }
      return true;
    }
    return false;
  });
}

// 获取验证码信息
export function getCodeInfo(code: string): ValidCode | null {
  const now = new Date();
  return validCodes.find(item => {
    if (item.code.toUpperCase() === code.toUpperCase().trim()) {
      if (item.expiresAt) {
        return new Date(item.expiresAt) > now;
      }
      return true;
    }
    return false;
  }) || null;
}
