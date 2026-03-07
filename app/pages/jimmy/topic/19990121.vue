<script setup>
definePageMeta({
  title: 'がんばれ雪組若手！！',
  layout: 'jimmy',
  team: 'topics',
});

// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return themeRaw?.value || {
    bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
    bgcolor: 'bg-slate-200',
    bar: 'bg-slate-400',
    map: 'bg-slate-500',
    barborder: 'border-slate-500',
    texttitle: 'text-slate-600',
    textlink: 'text-slate-500',
  };
});
</script>

<template>
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <JimmyMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div class="pt-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
            :class="themeConfig.texttitle"
          >
            がんばれ雪組若手！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/21 up)
            </p>
            <p>宝塚ＨＰでは東西で行われた新人公演評が大方出揃ったようです。今回嬉しく目についたのが、<strong>ゆみこちゃん(彩吹真央)</strong>絶賛の声(^_^;)。歌や芝居の安定感が、目立ったようです。ＪＩＭＭＹは自分が実際見た舞台しか評価の対象にしない頑固者なので(^_^;)、今回の評価を見て見る目が変わるようなことはありませんが、<strong>ゆみこちゃんなら当然よね～</strong>、とほくそ笑んでおります(^_^;)。実力派揃いの雪組若手の中でも、<strong>一際実力で目立って</strong>いましたもの。</p>
            <p>それにしても、<strong>ゆみこちゃん</strong>といい、<strong>花組の主要戦力としてしっかり場を得ているたまおちゃん(楓沙樹)</strong>といい、<strong>月組でブレイクしているケロちゃん(汐美真帆)</strong>といい、引いては、<strong>宙組で飛躍したねったん(夢輝のあ)</strong>といい・・、私の大好きな<strong>一路真輝時代</strong>に育った雪組の若手達が、各組で大活躍してくれているのを見るのは嬉しい事です。</p>
            <p><strong>そして愛する雪組へ</strong>・・、もうずーっと言いたかったのですが、ケロちゃんファンである手前、流石に遠慮していた一言を、この際言ってしまいましょう(^_^;)！！</p>
            <p><strong>「雪組首脳陣よ！！スターを育てるのが下手過ぎるって言うの～。逃した魚は大きかったんじゃないの～？しばらく反省してなさ～い(^_^;)！！」</strong></p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
