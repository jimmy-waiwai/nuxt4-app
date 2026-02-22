<script setup>
const teamProps = ref({ team: "star" });
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
              ディーン
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組・宝塚バウホール公演・４／２５～５／１０
              </p>
              <p>
                ヤンさん(安寿ミラ)主演の再演版は見ていますが、Ｔシャツ姿のヤンさんの腕が細かったのと(^_^;)、酒場の場面にいたリカちゃん(紫吹淳)がキザで、私の周りで殺される人続出だった事(^_^;)以外、もう、あまり覚えてません。そんな状態での観劇です。
              </p>
              <p>
                期待度０だったので、<strong>思ったよりも、良かった</strong>です。
              </p>
              <p>
                観るまでは、<strong>「何で今更ディーンをぶんちゃん(絵麻緒ゆう)に演らせるんだろう。ぶんちゃん可哀相ﾐ。」</strong>なんて、思っていたのですが(^_^;)、見終わった後は、<strong>「ぶんちゃん、この役できてよかったねー。」</strong>なーんて、思ってしまいましたもの(^_^;)。
              </p>
              <p>
                熱演だったし、上手だったのも勿論ですが、思ったよりも(こればっかり(^_^;))<strong>ディーン像がハマっていた</strong>のが、新発見で嬉しかったです。
              </p>
              <p>
                写真等でしか見てないのに、こんなこと言うのも恐縮ですが(^_^;)、マオさん(大地真央)のディーンと、見た目的に、重なってしまう所がありました。ジーンズ姿も、Ｔシャツも、<strong>難しいのに良く着こなしていた</strong>と思います。
              </p>
              <p>
                新公主演の頃から、ずっと見てきたぶんちゃんですが、最近、どこが魅力なのか、よくわからなくなっていたんですよ。でも、こんなのが合うのかな？
                と、<strong>持ち味が見えてきた</strong>ような気がしました。
              </p>
              <p>
                星組期待の娘役たちの競演も見所の一つでしたが、総じてまあまあ、という所。
              </p>
              <p>
                <strong>妃里梨江</strong
                >は今回の清純派の役柄が大人っぽい容姿にマッチしてなくて、今一歩キレイに見えなかったのが残念。「夜明けの天使たち」がすごく良かったので、次に期待です。
              </p>
              <p>
                前から思っていたけど、<strong>美椰エリカ</strong>って、以前花組にいた水原環にそっくりだと思いません？
                今回声もそっくりなので、更にびっくりしました(^_^;)。かわいらしい感じで良いですね。
              </p>
              <p><strong>秋園美緒</strong>も若いのに、上手いですよね。</p>
              <p>
                今回は誰が出てきそう、という手応えはありませんでしたが、皆上手なので、これからが楽しみです。
              </p>
              <p>
                助演では、<strong>一樹千尋</strong>、<strong>大洋あゆ夢</strong>が上手いですね。
              </p>
              <p>
                反して、若手で、これといった有望株は発見できませんでした。今回観て気づいたのですが、酒場の船員の役って、全然大した役ではないんですね(^_^;)。そこで、あれだけ目立ったリカちゃん(紫吹淳)って、やっぱりすごい(^_^;)と思いました。別にリカちゃんファンではありませんが(^_^;)。
              </p>
              <p :class="textTitle">
                (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
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
