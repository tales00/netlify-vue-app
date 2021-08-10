<template lang="pug">
.intro
  .card
    .head
    .body
      .slogan
        h2 "devoted to stupidity"
        h3 做前端有時也畫圖的人
      .name
        p Tales Liu
      .icons
        a(@click="handleLink('about')")
          i.las.la-user-circle
        a(@click="handleLink('biography')")
          i.las.la-file-alt
        a(@click="handleLink('skill')")
          i.las.la-magic
        a(@click="handleLink('hobby')")
          i.las.la-heart
        a(@click="handleLink('contact')")
          i.las.la-phone
        //- i.las.la-qrcode

header.sticky.fix-top
  nav
    a(@click="handleLink('top')")
      i.las.la-angle-double-up.la-lg
Home.top
</template>

<script>
import { provide } from '@vue/runtime-core';
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
  setup() {
    const handleLink = (name) => {
      const el = document.querySelector(`.${name}`);
      switch (name) {
        case 'about':
        case 'biography':
        case 'skill':
        case 'hobby':
        case 'contact':
        case 'top':
          el.scrollIntoView({ behavior: 'smooth' });
          break;
        // default:
        //   break;
      }
    };
    provide('handleLink', handleLink);

    return { handleLink };
  },
};
</script>

<style lang="scss" scoped>
.intro {
  height: calc(100vh - var(--nav-height));
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-rows: min-content;
  grid-template-rows: minmax(
    calc(100vh - var(--nav-height) - 1.5rem),
    min-content
  );
  padding: 1.5rem 2rem;
  padding-bottom: 0;

  // justify-items: center;
  align-content: center;
  align-items: center;
  // @media (orientation: landscape) {
  //   // align-content: start;
  //   // grid-template-rows: clamp(min-content, max-content, auto);
  //   // grid-template-rows: auto;
  //   grid-template-rows: minmax(
  //     calc(100vh - var(--nav-height) - 1.5rem),
  //     max-content
  //   );
  // }

  // @media (orientation: landscape) and (min-width: 800px) {
  //   grid-template-rows: auto;
  // }
  background: var(--app-bg-color);

  background-image: linear-gradient(
      180deg,
      hsla(184, 48%, 53%, 0.6) 0%,
      hsl(184, 48%, 53%) 100%
    ),
    url('assets/img/header_bg_harekaze_curry.jpg');
  background-size: cover;
}

.card {
  --ratio: 1 / 1.5;
  color: black;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: hsla(64, 55%, 94%, 0.836);
  background-image: url('assets/img/bg_check_note.jpg');
  background-size: cover;
  width: 100%;
  max-width: 100%;
  max-height: 30rem;
  // min-height: 100%;

  // padding: 1rem;
  aspect-ratio: var(--ratio);
  justify-self: center;
  // align-self: center;

  box-shadow: 0 1rem 1rem 4px hsla(0, 0%, 0%, 0.2);

  @media (orientation: landscape) {
    --ratio: 1.5 / 1;
    width: auto;
    height: 100%;
    max-height: 20rem;
  }

  display: grid;
  grid-template-rows: auto 1fr;

  .head {
    background-image: url('assets/img/header_bg_harekaze_curry.jpg');
    background-size: cover;
    aspect-ratio: 6 / 2.5;
  }
  .body {
    padding: 1rem;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
    display: grid;
    grid-template-rows: auto 1fr auto;

    .slogan {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-style: italic;
        margin: 0.4rem 0;
        font-size: 1.4rem;
      }

      h3 {
        margin: 0.2rem 0;
        font-size: 1.25rem;
      }
    }

    .name {
      justify-self: center;
      align-self: center;
      font-size: 1.2rem;
      font-weight: 600;
      p {
        margin: 0;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      gap: 0.5rem;

      a {
        cursor: pointer;
      }
    }
  }

  @media (orientation: landscape) {
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: auto 1fr;
    .head {
      aspect-ratio: 3.3 / 1;
      border-bottom-right-radius: 0.3rem;
    }
    .body {
      grid-area: 2 / 1 / 3 / 3;

      .slogan {
        align-items: flex-start;
        h2 {
          margin: 0.2rem 0;
          font-size: 1rem;
        }

        h3 {
          font-size: 0.8rem;
        }
      }

      .icons {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
        gap: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .body {
      .slogan {
        h2 {
          margin: 0.4rem 0;
          font-size: 1.4rem;
        }

        h3 {
          margin: 0.4rem 0;
          font-size: 1rem;
        }
      }

      // .icons {
      //   font-size: 2rem;
      // }
    }
  }
}

header {
  // background-color: var(--app-bg-color);
  // box-shadow: 0 1rem 1rem 4px hsla(0, 0%, 0%, 0.2);
  nav {
    padding: 0 2rem;
    height: var(--nav-height);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    a {
      cursor: pointer;
    }
  }
}
</style>
