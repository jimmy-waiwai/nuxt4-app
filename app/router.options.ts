import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  // ★ 末尾スラッシュを強制（すべての生成URLの末尾に / を付与）
  trailingSlash: true,
};
