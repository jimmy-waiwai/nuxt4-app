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
              一路真輝ファーストコンサート・I's Second
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                ドラマシティ・７／２９～３０
              </p>
              <p>
                トータル二時間以上、休憩なしのコンサートでしたが、そんなに時間が経ったとは思えない程、<strong>「あっ」という間に終わってしまいました</strong>。いや～、素晴らしかったです！！
              </p>
              <p>
                始めはずっと、<strong>一路さん久しぶり～。キレイね～。歌、上手いね～。</strong>などと、余裕をもって、すっかり女優になってしまった一路さんを楽しく見ていたんですよ(^_^;)。トークでは相変わらずお茶目な面も炸裂で(^_^;)、サックスの黒葛野さんとのトークでは、アドリブで<strong>イチローネタ</strong>を振られたりして(わざとらしく「暑い・・」と言いながら、イチロータオルで汗を拭きだしたのだ、関西人の彼は。)、大ウケでした(^_^;)。
              </p>
              <p>
                が、アンコールになって、始めて、話題がエリザベートになったんですよ。<strong>一路さんが「エリザ・・」と言った瞬間、場内割れるような拍手！</strong>&emsp;すごい反応に一路さんもびっくりしていました。<strong>「夜のボート」「私だけに」</strong>を歌ってくれたのですが、「夜のボート」も素晴らしかったけど(<strong>この前ケロちゃん(汐美真帆)が歌ったばかりだよ～</strong>、と母娘共々ちょっと思い出しました(^_^;)。)、最後の<strong>「私だけに」が、もぅ、感動的でした～！</strong>&emsp;「いやよ、おとなしいお后なんて・・」という、花ちゃん(花總まり)が歌ったものと全く同じ歌詞で、最後の<strong>「私に～！」</strong>という歌い上げも素晴らしかった！&emsp;信じられないことに、涙が出ました、この一曲で(^_^;)。
              </p>
              <p>
                ファンですから、やっぱり一路さんとエリザの組み合わせに弱い、というのもありますが(^_^;)、<strong>歌そのものがホントに素晴らしかったんです！&emsp;たっぷりとした声量と、気迫、情感が全然違いました！</strong>&emsp;それからはもう客席狂喜乱舞、総スタンディングで、何度もアンコールの幕が開き、大盛り上がりのうちに終了したんですよ。
              </p>
              <p>
                昨年は、白のパンツスーツで「最後のダンス」をバリバリにかっこ良く歌い上げて、客席をシビレさせて終わったのですが(^_^;)、<strong>今の一路さんには「最後のダンス」を歌って欲しくなるような男役の雰囲気は、全くありませんでしたね。</strong>素直にエリザベート役が、とても楽しみになりました。
              </p>
              <p>
                絶対、すばらしい公演になりますよ！&emsp;一路真輝のエリザ！&emsp;東京・・行きたいわ～！！
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
