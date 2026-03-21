<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            椎名&emsp;葵
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/05/31 up
            </p>
            <p>
              <strong>たまこちゃん(椎名)</strong>で、最初に印象にあるのは<strong>「うたかたの恋」全国ツアー公演のオフィーリア</strong>。後は、<strong>「BLUE
                MOON BLUE」東京公演</strong>で<strong>うさぎちゃん役</strong>に入っていた位でしょうか。<br>
              それ程美しさや上手さでびっくりする程の事もなかったのですが（^_^;）、<strong>「朝吹南ちゃんに似ているかな～」</strong>と思った覚えがあります。
            </p>
            <p>
              実は、続く<strong>「ゼンダ城の虜」</strong>の公演中に、ある店でたまこちゃん達に遭遇した事があります。<br>
              <strong>「『うたかた』でオフィーリアされていましたよね。見ました！」</strong>と声をかけさせて頂きました（^_^;）。<br>
              まさか、その後<strong>ケロちゃん(汐美真帆)の奥さん役</strong>をする事になるとは・・。
            </p>
            <p>
              <strong>「血と砂」のカルメン</strong>。最初は「固いな～」と思ったのですが、日を追う毎に芝居に熱がこもり、十字架を渡す場面は、公演終盤になればなる程、大好きな場面になりました。<br>
              舞台に関係ないけれど、「血と砂」の楽屋日記で書いてくれた文章が面白いのと（^_^;）、「おとめ」の好きな役にカルメンと書いてくれているのも嬉しいです。
            </p>
            <p>
              本領は、フィナーレでゆうひ君(大空祐飛)と歌っていた時の<strong>大人っぽさ</strong>ですよね。<br>
              <strong>「エンカレッジ・コンサート」</strong>で「Practical Joke」でしびさん(矢代鴻)が歌っていた歌をムードたっぷりに歌っていたのが、<strong>「こういうムードのある人なんだ・・」</strong>と思った最初だったと思います。<br>
              <strong>「ガイズ＆ドールズ」</strong>の<strong>家庭内国際親善（^_^;）の女の子</strong>役は、コケティッシュで最高でしたね～。この役のたまこちゃん、大好きでした。<br>
              フィナーレの<strong>黒いドレスでのダンス</strong>もムードが良くて、ついつい彼女の方を見てしまっていましたね。
            </p>
            <p>歌やダンス、実力面もなかなか。何よりも、<strong>ああいうムードのある娘役さんって、他の組でもなかなか思いつきません</strong>。これからが楽しみです。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyActressList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyActressList />
    </div>
  </div>
</template>

<style scoped></style>
