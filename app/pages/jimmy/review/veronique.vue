<script setup>
const teamProps = ref({ team: "flower" });
const textTitle = ref("text-slate-600");
if (teamProps.value.team === "flower") {
  textTitle.value = "text-pink-700";
}
if (teamProps.value.team === "moon") {
  textTitle.value = "text-yellow-700";
}
if (teamProps.value.team === "snow") {
  textTitle.value = "text-green-700";
}
if (teamProps.value.team === "star") {
  textTitle.value = "text-sky-700";
}
if (teamProps.value.team === "cosmos") {
  textTitle.value = "text-purple-700";
}
</script>

<template>
  <div>
    <NuxtLayout name="jimmy" :team="teamProps.team">
      <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
        <div class="w-48 flex-none pb-16 hidden lg:block">
          <JimmyMenu :team="teamProps.team" />
        </div>
        <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
          <div class="pt-8">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
              :class="textTitle"
            >
              ヴェロニック
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                花組・バウホール公演・３／１４～３／２９
              </p>
              <p>
                とーっても面白かったです！！
                <strong>流石再演される作品だけのことはある</strong
                >なー、と思いました。
              </p>
              <p>
                <strong>愛華みれ</strong
                >って、今まであまりキザな役がなかったじゃないですか。それが、もう、始めの登場から、<strong>わざとらしい位のキザキザモード</strong>(^_^;)で、でもそれが何か可愛くて(^_^;)、これなら少々のやんちゃも許せてしまうだろうなー、という<strong>愛すべき人物</strong>になっておりました。
              </p>
              <p>
                <strong>千ほさち</strong
                >もハマリ役(^_^;)。<strong>キレイでした。とにかく</strong>(^_^;)。度胸の良い弾け方が好きです。
              </p>
              <p>
                「なぜ愛華さんでオペレッタを？」と少なからず見るまでは思っていた私ですが、<strong>キャラクターがこの二人にピッタリ</strong>で、その点、良い作品を持ってきたな、と頷きました。歌好きの私としては、もうちょっと歌えたらなー、と思う所もありましたが。
              </p>
              <p>
                さらに、びっくりしたのが、<strong>春野寿美礼＆大鳥れいコンビ</strong>(^_^;)！
                <strong>上手でした。すごく。</strong
                >二人とも今をときめく若手ホープなのに、思いきった役作りで(^_^;)、歌も上手くて驚きました。<strong>幸美杏奈、真由華れお</strong>も若手ながらがっちり固めていて、ナンバーも安心して聞けました。<strong>この４人には本当に大感心です</strong>(^_^;)。
              </p>
              <p>
                後は、<strong>鈴懸三由岐</strong>の花売り娘と春野の<strong>同期の絡み</strong>が、素晴らしく面白かったのと(^_^;)、<strong>眉月凰</strong>がチラッとソロを聞かせてくれたのが、久し振りに嬉しかったです。<strong>蘭香レア</strong>の幕開けの女役もキレイでした。注目の<strong>彩乃かなみ</strong>も素直に可愛いくて、良い感じです。あっ、<strong>磯野千尋</strong>さんの飄々とした動きに、客席にいた真矢さん以下花組大応援団が大受けでしたよ(^_^;)。
              </p>
              <p>
                現状真矢みきが一人で引っ張っているような印象のある花組でしたが、この公演で実力のある人を沢山見つけることができて、<strong>本公演を見る楽しみが増えました</strong>。
              </p>
              <p :class="textTitle">
                (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
              </p>
            </div>
          </div>
        </div>
        <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
          <JimmyReviewList :team="teamProps.team" />
        </div>
      </div>
      <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
        <JimmyReviewList :team="teamProps.team" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
