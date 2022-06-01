<script setup>
import axios from 'axios';

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
const searchFocus = ref(false);
const jobArr = ref([]);
const usersArr = ref([]);
const articlesArr = ref([]);
onMounted(() => {
  (async function () {
    const jobImgArr = await axios.get(
      'https://api.unsplash.com/search/photos?query=google-icon&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    const usersImgArr = await axios.get(
      'https://api.unsplash.com/search/photos?query=user&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    const articlesImgArr = await axios.get(
      'https://api.unsplash.com/search/photos?query=articles&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    jobArr.value = [
      {
        img: jobImgArr.data.results[0].urls.regular,
        title: 'UX/UI Designer',
        detail: 'Upwork',
      },
      {
        img: jobImgArr.data.results[1].urls.regular,
        title: 'Part-time UX designer',
        detail: 'Google',
      },
    ];
    usersArr.value = [
      {
        img: usersImgArr.data.results[0].urls.regular,
        title: 'Brandon Wilson',
        detail: 'Senior UX designer',
      },
      {
        img: usersImgArr.data.results[1].urls.regular,
        title: 'Kyle Fisher',
        detail: 'Product designer at Commandor Corp',
      },
    ];
    articlesArr.value = [
      {
        img: articlesImgArr.data.results[0].urls.regular,
        title: 'A little about usability testing',
        detail: '3,912 viewers',
      },
    ];
  })();
});
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
      <input type="text" placeholder="Search" @focus="searchFocus = true" />
      <div v-if="searchFocus" class="search-focus">
        <div class="focus-bar">
          <div class="bar-header">
            <input v-focus type="text" placeholder="" />
            <a href="javascript:;">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="4"
                  fill="url(#paint0_linear_1_1217)"
                />
                <path
                  d="M19.1667 25.8335C22.8486 25.8335 25.8333 22.8487 25.8333 19.1668C25.8333 15.4849 22.8486 12.5001 19.1667 12.5001C15.4848 12.5001 12.5 15.4849 12.5 19.1668C12.5 22.8487 15.4848 25.8335 19.1667 25.8335Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.5 27.5002L23.875 23.8752"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1217"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0077B5" />
                    <stop offset="1" stop-color="#0E6795" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <hr />
          <div class="search-hint jobs">
            <p class="hint-title">JOBS</p>
            <div v-for="item in jobArr" :key="item.title" class="card">
              <div class="left">
                <img :src="item.img" alt="" />
              </div>
              <div class="right">
                <div class="detail">
                  <p>{{ item.title }}</p>
                  <span>{{ item.detail }}</span>
                </div>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.5L4.5 4L1 0.5"
                    stroke="#CECECE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="hint-footer">
              <a href=""><p>ALL JOBS (84)</p></a>
              <hr />
            </div>
          </div>
          <div class="search-hint users">
            <p class="hint-title">USERS</p>
            <div v-for="item in usersArr" :key="item.title" class="card">
              <div class="left">
                <img :src="item.img" alt="" />
              </div>
              <div class="right">
                <div class="detail">
                  <p>{{ item.title }}</p>
                  <span>{{ item.detail }}</span>
                </div>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.5L4.5 4L1 0.5"
                    stroke="#CECECE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="hint-footer">
              <a href=""><p>ALL USERS (1,530)</p></a>
              <hr />
            </div>
          </div>
          <div class="search-hint articles">
            <p class="hint-title">ARTICLES</p>
            <div v-for="item in articlesArr" :key="item.title" class="card">
              <div class="left">
                <img :src="item.img" alt="" />
              </div>
              <div class="right">
                <div class="detail">
                  <p>{{ item.title }}</p>
                  <span>{{ item.detail }}</span>
                </div>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.5L4.5 4L1 0.5"
                    stroke="#CECECE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="hint-footer">
              <a href=""><p>ALL ARTICLES (30)</p></a>
              <hr />
            </div>
          </div>
          <div class="all-results">
            <button><p>ALL RESULTS (2,000+)</p></button>
          </div>
        </div>
        <div class="focus-filter" @click="searchFocus = false"></div>
      </div>
    </div>
    <div class="profile">
      <img src="/images/picture.jpg" alt="" />
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
      &.router-link-active {
        color: #0275b1;
        &:after {
          width: 100%;
        }
      }
    }
  }
}
.search {
  position: relative;
  flex: 5;
  border-right: 4px solid;
  border-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: left;
  svg {
    margin-left: 1vw;
  }
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
  .search-focus {
    width: 100%;
    input {
      margin: 0;
    }
    .focus-bar {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 80vh;
      top: 0;
      left: 0;
      background-color: white;
      z-index: 100;
      .bar-header {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .all-results {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: white;
        margin-top: auto;

        button {
          width: 100%;
          border: none;
          background-color: transparent;
          background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
          padding: 0.5rem 2.5rem;
          border-radius: 5px;
          p {
            font-size: 1.25rem;
            transform: scaleY(0.8);
            color: white;
          }
        }
      }
      hr {
        margin-top: 2rem;
      }
      .search-hint {
        margin: 0 1.5rem;
        .hint-title {
          margin: 1rem 0rem;
          font-size: 1.25rem;
          color: rgba(24, 24, 24, 0.2);
        }
        .hint-footer {
          p {
            color: #0275b1;
            font-weight: bold;
          }
        }

        .card {
          border: 1px solid #f4f4f4;
          border-radius: 5px;
          margin: 1rem 0.5rem;
          padding: 1rem;
          display: flex;
          .left {
            img {
              width: 2vw;
              height: 2vw;
              object-fit: cover;
              border-radius: 50%;
            }
          }

          .right {
            display: flex;
            width: 100%;
            padding-left: 1rem;
            align-items: center;
            justify-content: flex-end;
            .detail {
              flex-direction: column;
              justify-content: center;
              margin-right: auto;
              p {
                font-weight: bold;
              }
              span {
                color: #181818;
              }
            }
            svg {
              width: 15px;
              height: 15px;
            }
          }
        }
        &.articles > .card > .left > img {
          width: 4vw;
          height: 2.5vw;
          border-radius: 0%;
        }
        hr {
          margin-top: 1rem;
        }
      }
      z-index: 100;
    }
    .focus-filter {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(1.5px);
      z-index: 99;
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
