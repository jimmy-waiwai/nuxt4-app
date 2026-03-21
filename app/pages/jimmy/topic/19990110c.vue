<script setup>
definePageMeta({
  title: '「夜明けの序曲」のツボ',
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
            「夜明けの序曲」のツボ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/10 up)
            </p>
            <p>「夜明け～」で秘かにＪＩＭＭＹのツボにきたのは（^_^;）、<strong>プログラムの素顔のポート</strong>（^_^;）。ねぇ、何故<strong>タモさん(愛華みれ)</strong>は、<strong>手長ザル(?)</strong>を抱いてキザっているの（^_^;）？何故<strong>チャーリー(匠ひびき)</strong>はキザって<strong>うさぎのお尻と花</strong>と共に写っているの？どうしてキザった<strong>なおちゃん(伊織直加)</strong>の膝の上には<strong>うさぎ</strong>がいるの？<strong>おさちゃん(春野寿美礼)</strong>はどうしてそんなに嬉しそうに<strong>手長ザル(?)</strong>を抱いているの（^_^;）～？</p>
            <p>うさぎは今年の干支ですし（^_^;）、何となく分かる様な気もするのですが、<strong>どうして手長ザルなのか～？</strong>謎です～(爆笑)。</p>
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
