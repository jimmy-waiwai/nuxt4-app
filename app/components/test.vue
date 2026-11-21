<template>
  <div
    id="sitemap"
    class="w-full text-center py-24 border-t border-gray-200"
  >
    <h2 class="text-3xl sm:text-5xl mb-6 font-bold text-gray-800">
      Site Map
    </h2>
    <p class="mb-12 text-gray-600">
      当サイトのコンテンツ一覧です。
    </p>

    <!-- サイトマップ グリッド配置 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto px-4">
      <!-- メインコンテンツ -->
      <div class="bg-white/80 p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold mb-4 pb-2 border-b-2 border-lime-400 text-gray-800">
          メインメニュー
        </h3>
        <ul class="space-y-3">
          <li>
            <NuxtLink
              to="#top"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              Top（トップページ）
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#takarazuka"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              Takarazuka（昔の趣味）
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#archive"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              Archive（過去のページ）
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#map"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              Map（アクセス・地図）
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- 宝塚コンテンツ -->
      <div class="bg-white/80 p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold mb-4 pb-2 border-b-2 border-lime-400 text-gray-800">
          Takarazuka ページ
        </h3>
        <ul class="space-y-3">
          <li>
            <NuxtLink
              to="/takarazuka"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              WAIWAI TAKARAZUKA (ブログ)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/waiwai"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              WAIWAI TAKARAZUKA (掲示板跡)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/jimmy"
              class="text-lime-700 hover:text-lime-500 hover:underline transition"
            >
              JIMMY's Homepage (公演評)
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- 過去のアーカイブ & 外部リンク -->
      <div class="bg-white/80 p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold mb-4 pb-2 border-b-2 border-lime-400 text-gray-800">
          Archive & Links
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="https://jimmy-waiwai.github.io/waiwai-sub/design/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lime-700 hover:text-lime-500 hover:underline transition flex items-center justify-between"
            >
              <span>WAIWAI WEB & DTP</span>
              <span class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">外部</span>
            </a>
          </li>
          <li>
            <a
              href="https://jimmy-waiwai.github.io/waiwai-sub/everyday/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lime-700 hover:text-lime-500 hover:underline transition flex items-center justify-between"
            >
              <span>WAIWAI EVERY DAY</span>
              <span class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">外部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
