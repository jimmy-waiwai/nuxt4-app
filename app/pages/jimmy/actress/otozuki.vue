<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            音月　桂
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/06/30 up
            </p>
            <p>
              初舞台から<strong>成績4番、しかも可愛いアイドル顔</strong>(^_^;)。間違いなく注目株だろうな、とは思っていました。<br>
              でも、一路さんファン時代以降、<strong>背の低い人にはハマらないようにしている</strong>ので(^_^;)、「私がファンになるタイプじゃないな。」と思っていました。
            </p>
            <p>舞台で最初に印象に残るのは<strong>「月夜歌聲」の馬風来</strong>。<strong>「成績良いだけあって上手いんだな～、やっぱり。」</strong>と感心。<strong>特に声が良かった</strong>のが好印象でした。でも、まだ「私がファンになるタイプじゃないな。」と思っていました(^_^;)。</p>
            <p>
              次に来たのが<strong>「猛き黄金の国」新公の初主演</strong>。「月夜～」で実力は認めていたので、抜擢も不思議ではなかったですし、上手くやるだろうな、とは思っていました。<br>
              それが予想以上に良かった。小さいけれど、その点を補って余りある<strong>押し出し、スター性</strong>。<br>
              内容的にも、実力派にありがちな、小さくまとまってしまう事もなく、<strong>伸び伸びと素直な主演振り</strong>。<br>
              可愛いけれど、女の子っぽくならず、<strong>意外と男らしい安定感がある</strong>のも良い。<br>
              ここで、<strong>「彼女だけは、小さいけれどスターになっても許そう。」</strong>と思いました(^_^;)。
            </p>
            <p>
              実際、今も彼女は良く抜擢されていて、しかも<strong>ちゃんと期待に応えている</strong>と思います。<br>
              今までの宝塚なら、きっとこのままトップスターになって、良い舞台を沢山見せてくれるでしょう。<br>
              でも今の宝塚、<strong>彼女がトップになれる確率は・・半々くらい・・と見ています</strong>。
            </p>
            <p>
              それは、まずは勿論、今の宝塚の男役にしては背が低いという事。<br>
              一路さんの時代なら、問題なかったでしょうけれどね(^_^;)。
            </p>
            <p>
              そして、持ち味がオーソドックスだという事。<br>
              <strong>実力あり、男役としての色気もあり、歌劇団が抜擢するのは良く分かる、伝統的にスターになれるタイプの男役</strong>です。でも、今後の宝塚ではどうでしょう？
            </p>
            <p>
              久遠麻耶が退団する今、彼女の今後は、宝塚の体質の変化を知る上で、注目だと思います。<br>
              いや、二人は全然違うのですけれど、「歌劇団が抜擢するのは良く分かる、伝統的にスターになれるタイプの男役」というのは同じだと思うのです。
            </p>
            <p>
              私は音月桂ちゃんのファンではありませんが、<strong>彼女のような男役が、素直にトップになって、レベルの高い舞台を見せてくれる宝塚であって欲しい</strong>と思います。<br>
              そういう意味で、彼女の今後には要注目です。
            </p>
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
