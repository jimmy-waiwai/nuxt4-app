<script setup>
definePageMeta({
  title: '「スターの小部屋」報告',
  layout: 'jimmy',
  team: 'topics',
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
            「スターの小部屋」報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/10/24 up)
            </p>
            <p>最近サボり続けている<strong>「スターの小部屋」報告</strong>(^_^;)。今回は、ＪＩＭＭＹ的に非常においしい内容だった事ですし(^_^;)、これを機会に復活できるようにがんばります(^_^;)。</p>
            <p>まずは<strong>ずんちゃん(姿月あさと)</strong>と<strong>葉加瀬太郎</strong>さんのトークコーナー。このスターと著名人との対談コーナー、あまり好きではなかったのですが、今回はお互い顔見知りだったせいか、ちゃんと対談になっていて(^_^;)、面白かった・・と思うのは、私がずんちゃんファンのせいかな(^_^;)。</p>
            <p>このコーナー、相手が大物すぎるせいか、ジェンヌの方が萎縮してしまって、面白い話も出ないまま終わってしまう事が多い気がしませんか？その点、今回はずんちゃんのリクエストだったのかな？お互い好感を持って話しているのが分かったし、ずんちゃんファンとしても面白い話が聞けて満足でした。ここまで来たら、<strong>葉加瀬さんとずんちゃんのデュエット、退団記念ＣＤ(勝手にあると思っている)とかで実現しないかな～</strong>、と思いましたよね、ファンの皆様！！</p>
            <p>次は宙組新公より<strong>久遠麻耶、風輝マヤ、朝比奈慶</strong>のトーク。結構辛口評も多かったけど、ＪＩＭＭＹにはかなり良かった久遠のホセ。舞台の映像を見て、やっぱり良い～！！と自分の思いを再確認しました(^_^;)。これからが楽しみだわ～。</p>
            <p>次は星組大劇場公演より<strong>夏美よう、英真なおき</strong>のトーク。二人とも公演では良い役で目立っているだけに、嬉しい組合せです。特に夏美組長のエルチはかっこ良くて、気に入ってるんですよ(^_^;)。これだけ活躍できる面白い二人が組長、副組長だなんて、星組、良いですよね～。</p>
            <p>最後は<strong>2000年のラインナップ発表と、正月公演の制作発表</strong>。またずんちゃん登場で、嬉しかったです(^_^;)。<strong>「砂漠の黒薔薇」の方の扮装写真</strong>が見られましたが、懐かしい<strong>「ブルー・ジャスミン」</strong>(私が小学生の時、初めて観た作品です。麻実れいが、あんな扮装をしていました。)を思い出させるお姿で(^_^;)、役柄も王子様らしく(そういえば麻実れいもカシム王子だったよね)、かっこ良い所が見られそうです。楽しみ～。</p>
            <p>パーティー会場では宙組生にずんちゃん退団に関する感想を聞いてくれていて、それも嬉しかったです。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
