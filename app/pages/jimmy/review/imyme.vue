<script setup>
const teamProps = ref({ team: "sonota" });
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
              初風緑コンサート「愛・舞・魅」
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宝塚バウホール・・5/14～20
              </p>
              <p>
                <strong>がいちさん(初風緑)</strong
                >のコンサート<strong>「愛・舞・魅」</strong>観てきました。
              </p>
              <p>
                私も<strong>ジャズ</strong>が好きでした～。<strong>心地よい歌声</strong>で、改めて上手い人だと思います。<br />
                曲は確かにたっぷりとした大曲がなかっただけに、これ！&emsp;というものは、なかったような気がします。でも、どれも余裕で歌っていて、流石だと思いました。<br />
                <strong>宝塚メドレー</strong
                >は、がいちさんの出演した作品というよりも、往年の名曲が多かったですね。<br />
                <strong>「I am What I am」</strong
                >は大地真央の作品だったと思います。歌詞はがいちさんに合わせて変えていたような・・。確かに、今の彼女の気持ちを歌ったようなもので、胸にせまりました。
              </p>
              <p>
                <strong>風船</strong
                >を受け取ったなんて、すごいですね～、ベールさん。<br />
                公演に一つだけ、プレゼントされるんですよね。私が観た回は、トシちゃん似のバックダンサーの男の子が、客席上手後方まで風船を持っていって、気に入った方(?)にプレゼントしていましたよ(^_^;)。
              </p>
              <p>
                その<strong>風船の効能の話</strong>が、確かに説明してくれていたのですが、「聞いた事のない方はご存じだと思いますが・・」なーんて言葉からトークが始まったがいちさん、かなり舞い上がっていたようで、イマイチ良く分かりませんでした(^_^;)。<br />
                舞台でアドリブで話すのって、難しいと思うんですよ。
              </p>
              <p>
                「ナイフ」と言えば初風緑。<strong>一幕はナイフの代わりに刀。二幕はナイフそのもの。三幕は「言葉のナイフ」と言われています</strong>・・と本人も言っていましたが(^_^;)、かなり本心がポロリと出て、ヒヤヒヤする事も。
              </p>
              <p>
                バックダンサーに男性を入れた、がいちさんたった一人のコンサート。<br />
                確かに、現役の男役さんを見ている・・という気のしないものだったかも。<br />
                でも、<strong>そんなコンサートが現役でもできるんだよ</strong>、というのが今回のコンサートの意義で、これは今までにない、全く新しい試みなのでしょう。<br />
                <strong>前向きにがんばってくれているがいちさん</strong
                >を見ていると、こちらも力が沸きますね。
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
