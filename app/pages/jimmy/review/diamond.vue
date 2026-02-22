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
              ダイアモンド・アイズ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                花組ドラマシティ公演・・4/18～21
              </p>
              <p>
                <strong>花組ドラマシティ公演「ダイアモンド・アイズ」</strong
                >、観てきました。
              </p>
              <p>
                <strong>匠ひびきリサイタル</strong
                >だったこの公演。もちろんもともとはチャーリー(匠)を観る為にチケットを購入していたのですが、<strong>急遽休演</strong>という事態に。<br />
                まぁ、<strong>他の出演者も好きだし、一回くらいは観ておこう</strong>、位の気持ちで客席に座ったのですが、本当に良いショーを作ってもらっていたんですね。<br />
                <strong>チャーリーがいたらどんなに良かっただろう</strong
                >と・・、言っても仕方ないけれど、残念で仕方ありませんでした。
              </p>
              <p>
                特にチャーリーは意識せず、幕開けから割と冷静に観ていたのですが、<strong>チャーリー出演作品のメドレー</strong>のコーナーがあり、初舞台の<strong>「宝塚をどり讃歌」</strong>から始まっていて、好きな作品で何度も観ましたし、そういえば<strong>おかっぱ頭の初舞台生が、首をふりふり銀橋を渡っていたな～</strong>、とか、思い出してしまって、そこからは何度も泣いてしまいました。そんなつもりはなかったのですが。<br />
                月影瞳の「Over The
                Moon」のメドレーで号泣する位だから、そりゃ、チャーリーのメドレーだったら泣くよな、と思います。懐かしいものに弱いのかもしれません(^_^;)。
              </p>
              <p>
                以降は花組の<strong>「あの日薔薇一輪」</strong>から。<strong>「ザ・ゲーム」</strong>とか。<strong>「メランコリック・ジゴロ」</strong>の主題歌では、新公主役したチャーリーの歌声が頭の中で流れてしまって。<strong>あの歌、下手だったよな～</strong>、とか(^_^;)。<br />
                <strong>「ブラックジャック」</strong
                >では歌ではなく、高翔みず希が踊っていた<strong>ダンスの方がチャーリーだったんだろうな～</strong>、とか、姿も重なってしまって。前半の最後はやはり、<strong>「チャンピオン」</strong>で締めるんですね。<br />
                後半は<strong>「白い朝」</strong>くらいから、最後は<strong>「琥珀」「Cocktail」</strong>まで。たまらなかったです。
              </p>
              <p>
                大きなダンスシーンは<strong>貴月あゆむ、楓沙樹、高翔みず希</strong>が交代で代役しているようでした。<br />
                どのシーンも良かったですが、<strong>バレエ</strong>のシーンが・・特にチャーリーで観たかったですね～。<br />
                白いパンツに薄い青のセーター姿で。<strong>きれいだっただろうなぁ</strong>・・と。
              </p>
              <p>
                出演メンバーは<strong>ダンサー・歌手揃いで素晴らしかった</strong>と思います。チャーリーはいないけれど、<strong>チャーリーの為の内容</strong>のショーが観られて、良かったと思いました。
              </p>
              <p>
                千秋楽でアンコール、総スタンディングだったのですが、特にチャーリーと良く組んでいただけに、<strong>舞風りら</strong>や<strong>鈴懸三由岐</strong>の顔を見ると、たまらなかったですね(^_^;)。<br />
                最後のアンコールでは「チャーリーバンザイ！」で締めてくれて、涙々ながらも、良い公演でした。
              </p>
              <p>
                ただ、本来なら一時間＋休憩＋一時間のはずだった所を、<strong>一幕一時間半に短縮、しかもリサイタルをする本人の休演にもかかわらず、そのまま上演した</strong>事はどうかと思います。<br />
                払い戻しに応じただけでも良心的と見るべきでしょうか？
              </p>
              <p>
                後、余談ですが、ジゴロの場面は、<strong>同じ藤井先生の演出</strong>という事で、汐美真帆のディナーショー「Platinum」より、3曲同じで、しかもジゴロの楓沙樹が言っている台詞が、<strong>ホストのアッシュとほぼ同じ</strong>で(^_^;)、椅子からずり落ちそうになりましたよ。<br />
                更に、アンコールの<strong>「上を向いて歩こう」</strong>まで一緒なんですよ。びっくりしました。<br />
                ある意味、あれをチャーリーがやっていたら、<strong>個人的に感慨深かったかも</strong>しれません。
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
