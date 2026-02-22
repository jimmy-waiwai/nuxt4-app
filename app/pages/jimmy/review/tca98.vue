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
              ９８ＴＣＡ音楽祭・タカラジェンヌ！ ５組そろって大行進
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宝塚大劇場５／２２～２３
              </p>
              <p>
                友人のご厚意で、思いがけずＴＣＡを立見で見ることができました。
              </p>
              <p>
                構成は大まかに、プロローグ、各組それぞれのトップを中心にした場面、フィナーレって感じです。<strong>今年は、それぞれの場面がちゃんとしたショー構成になっていて、面白かった</strong>です。今年のビデオは買いだと思います(^_^;)。
              </p>
              <p>
                が、本当に<strong>限られた若手しか使われていなくて</strong>、もう少し、小人数でまんべんなく使ってくれても良いのになぁ、とも思いました(^_^;)。
              </p>
              <p>各場面を担当している先生は、</p>
              <p>プロローグ－草野旦</p>
              <p>姿月あさと中心の場－三木章雄、</p>
              <p>轟悠中心の場－三木章雄、</p>
              <p>真矢みき中心の場－中村一徳、</p>
              <p>二番手中心の場－荻田浩一、</p>
              <p>真琴つばさ中心の場－藤井大介、</p>
              <p>麻路さき中心の場－酒井澄夫、</p>
              <p>フィナーレ－酒井澄夫</p>
              <p>
                です。ということは、あの<strong>変な歌</strong>(プロローグ後の、組自慢の歌)は、草野旦先生作詞なのか？
                <strong>ばかばかしくて、振りもおちゃめで、結構好き</strong
                >でしたが(^_^;)。
              </p>
              <p>
                ショー作品を見たこともない<strong>荻田浩一先生の場面</strong>も良かったですよ。これからに期待！
                ですね。
              </p>
              <p>
                本当、<strong>どの場面も</strong>捨てがなく、<strong>出演者の豪華なショー作品</strong>を見たような感じで大満足でした。ここ数年、<strong>毎年ＴＣＡを観ては、怒って帰っていた</strong>ので、余計そう感じたのかも。
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
