<template lang="pug">
.home
  .container
    .panel.about
      h3.caption #[i.las.la-user-circle] about
      .avatar-tsukkomu
        img.round(src="@/assets/img/avatar_tsukkomu.png")
      .about-desc
        p Hi, 我是 Tales ，還算是個 #[a(@click="handleLink('biography')") 有經驗的前端工程師]。
        p 主要使用的 #[a(@click="handleLink('skill')") 技術]是 Vuejs ，無論是普通的頁面還是 SPA 都有製作經驗，也曾實做過 PWA 。
        p CSS(RWD) 亦有相當程度的掌握。
        p 平常低調的在 #[a(@click="handleLink('hobby')") 噗浪活動，偶而也畫一點圖]
        p 目前待業中，若您剛好需要人手，而剛好我也合適的話， #[a(@click="handleLink('contact')") 還請與我聯絡。]

    .panel.biography
      h3.caption #[i.las.la-file-alt] biography
      .date
        .mark ~2009
      .doing
        | 在百貨商場作了幾年的玩具店大葛格
      .date
        .mark 2009~2010
      .doing
        | 做了差不多一年半又多一點的遊戲美術
      .date
        .mark 2015/07~2017/03
      .doing
        | 於群暉科技擔任網站工程師
      .date
        .mark 2017/03~2018/08
      .doing
        | 離職處理家中事務，之後並開始接觸學習 vuejs 等網頁應用程式相關技術
      .date
        .mark 2018/08~2018/11
      .doing
        | 於明鏡出版社擔任前端工程師
      .date
        .mark 2019/03~2019/06
      .doing
        | 於長江科技擔任前端工程師
      .date
        .mark 2019/06~2019/08
      .doing
        | 於神拍科技擔任前端工程師
      .date
        .mark 2019/12~2020/05
      .doing
        | 當了派遣的前端工程師然後事情做完後就被自願離職了
      .date
        .mark 2020/06~
      .doing
        | 嚐試著自己建立一個商店網站，但就結果而言是失敗的

    .panel.skill
      h3.caption #[i.las.la-magic] skill
      .skill-name
        .mark JS / ES6
      .skill-desc
        | 前端的基本
      .skill-name
        .mark jQuery
      .skill-desc
        | 很久沒用，忘的差不多了，如果搭配 cheatsheet 的話應該還是有辦法
      .skill-name
        .mark CSS / RWD
      .skill-desc
        | 很難但還是有一定程度的掌握
      .skill-name
        .mark vuejs
      .skill-desc
        | vue2、router、vuex 全家桶稱得上熟悉， vue3 最近開始在摸（主要是 composition api）
      .skill-name
        .mark nuxtjs
      .skill-desc
        | 還沒有機會碰過
      .skill-name
        .mark API
      .skill-desc
        | 有串過的經驗
      .skill-name
        .mark SPA / PWA
      .skill-desc
        | 都有做過
      .skill-name
        .mark firebase
      .skill-desc
        | 最近剛開始碰
      .skill-name
        .mark PHP
      .skill-desc
        | 硬要說的話是會一點

    .panel.sideProject
      h3.caption #[i.las.la-project-diagram] side project
      .project-icon
        img.round(src="@/assets/img/cleanup-url-app-iconn-512x512.png")
      .project-desc
        h5 #[a(href="https://url-cleanup.netlify.app/" target="_blank") url cleanup app]
        ul
          li 一個 PWA, 有接收 share target 的功能
          li 主要用來清理網址中冗餘的追蹤碼參數，縮短字數，以利分享（或再分享）

    .panel.hobby
      h3.caption #[i.las.la-heart] HOBBY
      .hobby-icon
        img.round(src="@/assets/img/logo-plurk.png")
      .hobby-desc
        h5 Plurk
        a(href="https://www.plurk.com/taleslogs" target="_blank") 看看我平常的一些碎碎念
      .hobby-icon
        img.round(src="@/assets/img/logo-pixiv.svg")
      .hobby-desc
        h5 Pixiv
        a(href="https://pixiv.me/tales00" target="_blank") 看看我畫的一些圖

    .panel.contact
      h3.caption #[i.las.la-phone] contact
      .icon
        i.las.la-envelope.la-4x
      .text
        p talesworks@gmail.com
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
  setup() {
    const handleLink = inject('handleLink');

    return { handleLink };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: var(--nav-height);
}
h5 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.container {
  display: grid;
  grid-template-columns: minmax(auto, 32rem);
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  padding-top: 0;

  .panel {
    background-color: hsl(190, 57%, 65%);
    padding: 1rem;
    border-radius: 0.4rem;
    .caption {
      margin: 0;
      grid-column: 1 / -1;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid currentColor;
    }
  }

  .about {
    display: grid;
    // grid-template-columns: auto 1fr;
    gap: 1rem;
    // align-items: top;

    .avatar-tsukkomu {
      justify-self: center;
      img {
        display: block;
        width: 12rem;
      }
    }

    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .biography,
  .skill {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.4rem 1rem;
    align-items: top;

    .date,
    .skill-name {
      justify-self: end;
    }
    .mark {
      display: inline-block;
      font-size: 0.6rem;
      background-color: darkcyan;
      padding: 0.2rem 0.4rem;
      border-radius: 0.2rem;
    }
    .doing,
    .skill-desc {
      padding: 0.4rem 0;
      font-size: 0.8rem;
    }
  }

  .hobby,
  .sideProject {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 0.4rem 1rem;
    align-items: center;

    .hobby-icon,
    .project-icon {
      img {
        display: block;
        max-width: 100%;
      }
    }
    .hobby-desc,
    .project-desc {
      font-size: 0.8rem;
      ul {
        padding: 0;
        padding-left: 1rem;
        margin: 0;
        display: grid;

        li {
          // display: block;
        }
      }
    }
  }

  .contact {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.4rem 1rem;
    align-items: center;
  }
}
</style>
