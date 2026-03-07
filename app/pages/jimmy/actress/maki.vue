<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            真木　薫
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/02/27 up
            </p>
            <p>
              1998年に、HPで今年の初舞台のお気に入りさんに選んだのが真木薫君でした。<br>当時、「口上の時、上手から２番目にいる人だと思うのですが、口元が樹里咲穂に似ていて、さらに華やかな男役らしい顔をしていますよ。長身だしね。」と書きました。<br>以降、ずっと楽しみに、注目して見ていましたが、確かに美形、長身の男役なのですが、ちょっと頭が大きいんですよね(ごめんなさい^_^;)。スリムなんだけれど、バランスがもう一つ良くないんです。<br>以降、この経験を踏まえ、お気に入りさんは口上の袴で決めずに、ロケットで決めようと思い、今日に至っている事は、今初めて明かした企業秘密です(^_^;)。<br><br>外せないのは、2度出演した「エンカレッジ・コンサート」。1度目は歌を聴くのも初めてでしたが、まずまず歌えていたし、選曲が「This is the moment」で、歌い方もずんちゃん(姿月あさと)そっくり。ファンとしては嬉し＆楽しかったです。<br>そして2度目は随分学年も上がり、組内で上から2番目。「愛の旅立ち」という、これまた宝塚ファン心に直球の選曲も嬉しかったし、前回以降、実際歌のソロを聴いた覚えはなかったのですが(^_^;)、更に上手くなっていたのも嬉しかったです。地道に、練習していたのかな、と思って。<br>見た目のキレイな男役さんである事は間違いないですし、これならこれから歌で使ってもらえる事もあるかも？　と思いました。<br><br>次の「ホテル ステラマリス」では複数人で歌うパートがあり、嬉しかったものの、なかなか一人では歌えないものなんだな～、と、・・思っている内に、東京公演での退団を発表されてしまいました(;_;)。<br>ずんちゃん(姿月あさと)好きの真木薫君なので、ずんちゃんの隣の隣で歌えて、満足しちゃったのかな・・。決められたスター以外で、大劇場でソロをもらえる人って、すっごく少ないんだな、という事を改めて感じました。一度、本公演でソロが聴きたかったです。<br>今、歌の苦手なスターが多いですし、もっと歌の得意な人に、歌を振って欲しいですね。<br><br>・・という事で、真木薫君の代表作って、「ファントム」の警官、って事で、よろしいのでしょうか？<br>ダメかなぁ～？　でも、一番印象に残っているんですよね・・(^_^;)。
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
