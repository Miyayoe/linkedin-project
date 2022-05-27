<script setup>
const navbarLinks = ref([
  {
    url: '/feed',
    svg: 'feed',
    title: 'FEED',
  },
  {
    url: '/network',
    svg: 'network',
    title: 'NETWORK',
  },
  {
    url: '/jobs',
    svg: 'jobs',
    title: 'JOBS',
  },
  {
    url: '/chat',
    svg: 'chat',
    title: 'CHAT',
  },
  {
    url: '/notice',
    svg: 'notice',
    title: 'NOTICES',
  },
]);
</script>

<template>
  <nav id="navbar">
    <div class="logo-zone">
      <router-link to="/">
        <SvgIcon name="logo" style="width: 60px; height: 60px" />
      </router-link>
    </div>
    <div class="nav-items">
      <div class="items">
        <router-link
          v-for="item in navbarLinks"
          :key="item.title"
          :to="item.url"
        >
          <SvgIcon :name="item.svg" />
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="search">
      <SvgIcon
        name="search"
        style="width: 30px; height: 30px"
        color="#0275B1"
      />
      <input type="text" placeholder="Search" />
    </div>
    <div class="profile">
      <img src="../assets/images/picture.jpg" alt="" />
      <div class="info">
        <div class="user">
          <p>Miya</p>
          <span>You</span>
        </div>
        <div class="count">
          <p>
            367 views today
            <span
              >+32
              <SvgIcon
                name="arrow-up-right"
                style="width: 15px; height: 15px"
                color="#02B033"
            /></span>
          </p>
        </div>
      </div>
    </div>
    <div class="other-button">
      <SvgIcon name="other" style="width: 30px; height: 30px" />
      <p>OTHER</p>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
* {
  font-family: '@/assets/GothamPro.ttf', 'Noto Sans TC', sans-serif;
}
#navbar {
  display: flex;
  width: 100%;
  height: 6rem;
  background-color: white;
}
.logo-zone {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 4px solid;
  border-color: #f4f4f4;
}
.nav-items {
  display: flex;
  flex: 6;
  align-items: center;
  justify-content: center;
  border-right: 4px solid;
  border-color: #f4f4f4;

  .items {
    display: flex;
    list-style-type: none;
    height: 100%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 1.5vw;
      position: relative;
      text-decoration: none;
      color: #181818;
      svg {
        width: 1.5vw;
        height: 1.5vw;
      }
      p {
        font-size: 0.8vw;
      }
      &:after {
        content: '';
        width: 0%;
        height: 2px;
        background: #0275b1;
        position: absolute;
        bottom: 0;
        transition: all 0.2s linear;
      }
      &:hover,
      &.active {
        color: #0275b1;
        &:after {
          width: 100%;
        }
      }
    }
  }
}
.search {
  flex: 5;
  border-right: 4px solid;
  border-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 1vw;
  input {
    font-size: 1.5rem;
    margin-left: 1vw;
    border: none;
    width: 80%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #cecece;
    }
  }
}
.profile {
  flex: 5;
  border-right: 4px solid;
  border-color: #f4f4f4;
  display: flex;
  align-items: center;

  img {
    margin-left: 1.5vw;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .info {
    margin-left: 1rem;
    .user {
      display: flex;
      align-items: center;
      p {
        font-size: 1.1rem;
      }
      span {
        margin-left: 1rem;
        color: rgba(24, 24, 24, 0.1);
        font-size: 1.2rem;
      }
    }
    .count {
      display: flex;

      span {
        margin-left: 0.5rem;
        color: #02b033;
      }
    }
  }
}
.other-button {
  flex: 0.8;
  border-right: 4px solid;
  border-color: #f4f4f4;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: #0275b1;
    transition: all 0.2s linear;
    position: absolute;
    bottom: 0;
  }
  &:hover,
  &.active {
    color: #0275b1;
    &:after {
      width: 100%;
    }
  }
}
</style>
