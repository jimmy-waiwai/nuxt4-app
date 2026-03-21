<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            大真 みらん
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/01/25 up
            </p>
            <p>私の可愛い<strong>ジェフ坊ちゃん(大真みらん)</strong>、いきま～す！</p>
            <p>
              <strong>「ジェフ」</strong>というのは、まだ記憶に新しい昨年のバウ<strong>「ヴィンターガルテン」</strong>のみらんちゃん(大真)の役名。<br>
              とても印象に残る良い役で、みらんちゃんも好演で、真面目に語っても好きな役なのですが、私は特に、前半の<strong>マザコン坊ちゃん</strong>振りが大好き！&emsp;可愛いんですよ～(*^｡^*)。<br>
              以来、他の作品でも、みらんちゃんを見つけると、心の中では<strong>「あ、ジェフ坊ちゃんだ♪」</strong>と呼んでおります。
            </p>
            <p>さて、そのジェフ坊ちゃんを初めて舞台で認識したのは、おそらく<strong>「我が愛は山の彼方に」の新人公演</strong>。おとこちゃん(音羽椋)の役をしていたのですが、ダンサーのおとこちゃんに見劣りしないくらい、<strong>殺陣が豪快に決まっていた</strong>のを覚えています(そう公演評にも書いていますが)。当時研二での抜擢だった事もあり、<strong>「実力のある子なんだろうな～」</strong>というのが第一印象。</p>
            <p>
              その後「黄金のファラオ」の頃に岡っち(嶺恵斗)と<strong>「スターの小部屋」で対談</strong>していたと思うのですが、その時にダンスが好き・・という話と、文化祭のソロの写真を公開していたんですよね。そのポーズが、つま先が伸びていてとても綺麗で。「そういえば殺陣も決まっていたもんなぁ～」と記憶がつながった感じ。この記憶は、私にとって、みらんちゃんを語る上では外せないんですよ。<br>
              ただ、その対談をTVで観た時は、正直「面白い顔の子やなぁ～。こりゃ、スターにはなれんな。」と思いました。(ごめんなさい！後でちゃんとフォローするから！^_^;)
            </p>
            <p>
              以降で記憶に残るのは、<strong>「イーハトーヴ・夢」</strong>の<strong>宮沢清六</strong>。<strong>「雨ニモマケズ」</strong>の詩の朗読が気持ちが入っていて上手かったです。私は声の良い男役が好きなので、この役でまたかなり印象が良くなりました。また、見た目も「小部屋」の頃のイメージからすると（^_^;）、かなりスッキリしてきたかな・・と。<br>
              でも私の中では、<strong>二の線よりも、まだバリバリの実力派のイメージがあった</strong>んですね。その頃は。
            </p>
            <p>
              その後に<strong>「LUCKY STAR!」</strong>くらいから、かっこ良くなった！&emsp;と思いました。結構オペラグラスで追って観ていましたね。僅差で岡っちに転んでしまいましたが・・（^_^;）。<br>
              その頃知ったのでしょうか？&emsp;同期の中でも中卒で、意外と若かったんだ、という事。そして、前述の<strong>ジェフ坊ちゃん</strong>のキャラ。<br>
              <strong>意外と可愛いじゃない～、良いじゃない～</strong>。とかなりのお気に入りさんになりました。
            </p>
            <p>そんな<strong>坊ちゃんっぽい可愛さ、上品さ</strong>も好きですが、<strong>「ガラスの風景」新人公演</strong>で観た紳士っぷりもなかなか素敵。<strong>本公演</strong>でも、パーティの場面でタキシードで琴まりえちゃんとデュエットしている所など、秘かにチェック(笑)。</p>
            <p>弟キャラとしてではなく(?)、これからちゃんとした大人の（^_^;）男役として、<strong>もっともっと私をハマらせてくれるかもしれない可能性のある、期待株</strong>だと思っています。</p>
            <p>ダンス面でも、星組若手ではどうしてもれおん君(柚希礼音)が目立ちますが、<strong>隣で踊っているみらんちゃんもかなり動きが綺麗</strong>だと思います。そういう実力の面でも、期待できそうな所が嬉しいですね。</p>
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
