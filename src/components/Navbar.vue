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
const otherOpen = ref(false);
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
        <SvgIcon name="navbar/logo" :style="'width: 60px; height: 60px'" />
      </router-link>
    </div>
    <div class="nav-items">
      <div class="items">
        <router-link
          v-for="item in navbarLinks"
          :key="item.title"
          :to="item.url"
        >
          <SvgIcon :name="`navbar/${item.svg}`" />
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="search">
      <SvgIcon
        name="navbar/search"
        :style="'width: 30px; height: 30px'"
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
              <a href="javascript:;"><p>ALL JOBS (84)</p></a>
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
              <a href="javascript:;"><p>ALL USERS (1,530)</p></a>
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
              <a href="javascript:;"><p>ALL ARTICLES (30)</p></a>
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
                name="navbar/arrow-up-right"
                :style="'width: 15px; height: 15px'"
                color="#02B033"
            /></span>
          </p>
        </div>
      </div>
    </div>
    <div class="other-button" @click="otherOpen = true">
      <SvgIcon name="navbar/other" :style="'width: 30px; height: 30px'" />
      <p>OTHER</p>
    </div>
    <div class="other-sidebar" :class="{ active: otherOpen }">
      <div class="close-button" @click="otherOpen = false">
        <SvgIcon name="navbar/close" :style="'width: 30px; height: 30px'" />
        <p>CLOSE</p>
      </div>
      <div class="other-container">
        <div class="header">
          <p>More from LinkedIn</p>
          <div class="help-button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3623 11.25C11.6562 10.4146 12.2362 9.71013 12.9997 9.26142C13.7633 8.8127 14.6609 8.64867 15.5338 8.79839C16.4066 8.94811 17.1983 9.40191 17.7687 10.0794C18.339 10.7569 18.6511 11.6144 18.6498 12.5C18.6498 15 14.8998 16.25 14.8998 16.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 21.25H15.0125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>HELP</span>
          </div>
        </div>
        <hr />
        <div class="first-button">
          <button>
            <div class="left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="right">
              <p>Learning with LinkedIn</p>
              <span>Courses, lectures, workshops</span>
            </div>
          </button>
        </div>
        <div class="items-container">
          <div class="item insights">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1818 0H0.636364C0.467589 0 0.305728 0.0624338 0.186387 0.173566C0.0670454 0.284699 0 0.435427 0 0.592593V15.4074C0 15.5646 0.0670454 15.7153 0.186387 15.8264C0.305728 15.9376 0.467589 16 0.636364 16H13.3636C13.5324 16 13.6943 15.9376 13.8136 15.8264C13.933 15.7153 14 15.5646 14 15.4074V3.55556L10.1818 0Z"
                fill="#CAEDFF"
              />
              <path d="M10.1816 0V3.55556H13.9998L10.1816 0Z" fill="#65C3E8" />
              <path
                d="M7 7.70403C6.49656 7.70403 6.00442 7.56501 5.58582 7.30455C5.16722 7.04409 4.84097 6.67389 4.64831 6.24076C4.45565 5.80763 4.40524 5.33103 4.50346 4.87122C4.60167 4.41142 4.8441 3.98906 5.20009 3.65755C5.55608 3.32605 6.00964 3.1003 6.50341 3.00883C6.99718 2.91737 7.50898 2.96431 7.9741 3.14372C8.43922 3.32313 8.83677 3.62695 9.11647 4.01675C9.39617 4.40656 9.54545 4.86484 9.54545 5.33366C9.54545 5.96232 9.27727 6.56523 8.79991 7.00976C8.32254 7.45429 7.6751 7.70403 7 7.70403ZM8.90909 8.88921H5.09091V16.0003H8.90909V8.88921ZM14 15.4077V10.667H10.8182V16.0003H13.3636C13.5324 16.0003 13.6943 15.9379 13.8136 15.8268C13.933 15.7156 14 15.5649 14 15.4077ZM3.18182 12.4448H0V15.4077C0 15.5649 0.0670454 15.7156 0.186387 15.8268C0.305728 15.9379 0.467589 16.0003 0.636364 16.0003H3.18182V12.4448Z"
                fill="url(#paint0_linear_1_963)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_963"
                  x1="15.9409"
                  y1="22.7974"
                  x2="4.06378"
                  y2="7.17039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#665ED0" />
                  <stop offset="1" stop-color="#0073B1" />
                </linearGradient>
              </defs>
            </svg>
            <p>INSIGHTS</p>
          </div>
          <div class="item advertise">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0008 4.69147C8.0247 4.69021 9.02596 4.99277 9.87784 5.56083C10.7297 6.1289 11.3939 6.93694 11.7863 7.88266C12.1787 8.82839 12.2817 9.86928 12.0823 10.8736C11.8828 11.8779 11.3899 12.8004 10.6659 13.5244C9.94188 14.2484 9.01933 14.7414 8.01504 14.9408C7.01075 15.1402 5.96986 15.0372 5.02413 14.6448C4.07841 14.2524 3.27037 13.5882 2.7023 12.7364C2.13423 11.8845 1.83168 10.8832 1.83294 9.85933C1.83462 8.48925 2.37963 7.17576 3.34843 6.20696C4.31723 5.23817 5.63071 4.69316 7.0008 4.69147V4.69147ZM7.0008 2.85854C5.61617 2.85854 4.26264 3.26913 3.11136 4.03838C1.96009 4.80764 1.06278 5.90101 0.532907 7.18024C0.00303336 8.45947 -0.135606 9.8671 0.134521 11.2251C0.404649 12.5831 1.07141 13.8306 2.05049 14.8096C3.02957 15.7887 4.27699 16.4555 5.63501 16.7256C6.99303 16.9957 8.40066 16.8571 9.67989 16.3272C10.9591 15.7973 12.0525 14.9 12.8217 13.7488C13.591 12.5975 14.0016 11.244 14.0016 9.85933C14.0016 8.0026 13.264 6.22192 11.9511 4.90902C10.6382 3.59612 8.85752 2.85854 7.0008 2.85854Z"
                fill="url(#paint0_linear_1_970)"
              />
              <path
                d="M7.00082 12.4052C8.4068 12.4052 9.54657 11.2654 9.54657 9.85946C9.54657 8.45349 8.4068 7.31372 7.00082 7.31372C5.59485 7.31372 4.45508 8.45349 4.45508 9.85946C4.45508 11.2654 5.59485 12.4052 7.00082 12.4052Z"
                fill="url(#paint1_linear_1_970)"
              />
              <path
                d="M7.90329 10.7594C8.40038 10.2623 8.40038 9.45636 7.90329 8.95927C7.40621 8.46219 6.60027 8.46219 6.10318 8.95927C5.60609 9.45636 5.60609 10.2623 6.10318 10.7594C6.60027 11.2565 7.40621 11.2565 7.90329 10.7594Z"
                fill="#33AADA"
              />
              <path
                d="M11.5032 7.16089L9.70312 5.36078L6.1029 8.961L7.90301 10.7611L11.5032 7.16089Z"
                fill="#33AADA"
              />
              <path
                d="M12.8498 7.60657L9.69941 7.16107L9.25391 4.01071L12.3979 0.860352L12.7288 4.13163L16.0001 4.46258L12.8498 7.60657Z"
                fill="#33AADA"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_970"
                  x1="16.4073"
                  y1="-0.425473"
                  x2="3.60223"
                  y2="13.5761"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#665ED0" />
                  <stop offset="1" stop-color="#0073B1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_970"
                  x1="16.4073"
                  y1="-0.425339"
                  x2="3.60225"
                  y2="13.5762"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#665ED0" />
                  <stop offset="1" stop-color="#0073B1" />
                </linearGradient>
              </defs>
            </svg>
            <p>ADVERTISE</p>
          </div>
          <div class="item groups">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93218 0.0952C4.91772 0.269244 3.95935 0.688446 3.13788 1.31745C2.31641 1.94646 1.65593 2.76683 1.21213 3.70939C0.768338 4.65194 0.554241 5.68904 0.587897 6.73324C0.621553 7.77743 0.901975 8.79809 1.40552 9.70916L0.238849 13.0264C0.220719 13.0775 0.21774 13.133 0.23028 13.1858C0.242821 13.2387 0.270331 13.2867 0.309415 13.3238C0.348499 13.361 0.397446 13.3857 0.450214 13.395C0.502982 13.4042 0.55726 13.3976 0.606349 13.3759L3.64552 12.0549C4.52879 12.6106 5.53175 12.9402 6.56817 13.0153C7.6046 13.0905 8.64349 12.9089 9.59554 12.4862C10.5476 12.0635 11.3843 11.4124 12.0338 10.5887C12.6832 9.76511 13.126 8.79364 13.3241 7.75785C13.5221 6.72205 13.4695 5.65291 13.1707 4.64233C12.8719 3.63175 12.336 2.70997 11.6088 1.95622C10.8817 1.20247 9.98523 0.639309 8.99642 0.31514C8.00761 -0.0090292 6.95607 -0.0845053 5.93218 0.0952V0.0952Z"
                fill="#CAEDFF"
              />
              <path
                d="M12.25 5.93012C13.2165 5.93012 14 5.1345 14 4.15305C14 3.1716 13.2165 2.37598 12.25 2.37598C11.2835 2.37598 10.5 3.1716 10.5 4.15305C10.5 5.1345 11.2835 5.93012 12.25 5.93012Z"
                fill="#0091CA"
              />
              <path
                d="M1.75 5.92994C2.7165 5.92994 3.5 5.13432 3.5 4.15287C3.5 3.17142 2.7165 2.37579 1.75 2.37579C0.783502 2.37579 0 3.17142 0 4.15287C0 5.13432 0.783502 5.92994 1.75 5.92994Z"
                fill="#0091CA"
              />
              <path
                d="M7.00033 5.33759C6.53884 5.33759 6.08771 5.19862 5.704 4.93826C5.32028 4.67791 5.02121 4.30785 4.84461 3.8749C4.668 3.44194 4.6218 2.96553 4.71183 2.5059C4.80186 2.04628 5.02409 1.62409 5.35041 1.29272C5.67673 0.961345 6.09249 0.735678 6.54512 0.644253C6.99774 0.552828 7.46689 0.599751 7.89325 0.779088C8.31962 0.958424 8.68403 1.26212 8.94042 1.65177C9.19681 2.04142 9.33366 2.49953 9.33366 2.96816C9.33366 3.59657 9.08783 4.19924 8.65024 4.6436C8.21266 5.08795 7.61917 5.33759 7.00033 5.33759ZM8.75033 6.5223H5.25033V16H8.75033V6.5223Z"
                fill="url(#paint0_linear_1_980)"
              />
              <path d="M14 7.11435H10.5V15.4074H14V7.11435Z" fill="#0091CA" />
              <path d="M3.5 7.11475H0V15.4078H3.5V7.11475Z" fill="#0091CA" />
              <defs>
                <linearGradient
                  id="paint0_linear_1_980"
                  x1="-3.59301"
                  y1="-19.8909"
                  x2="7.68344"
                  y2="9.39894"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#665ED0" />
                  <stop offset="1" stop-color="#0073B1" />
                </linearGradient>
              </defs>
            </svg>
            <p>GROUPS</p>
          </div>
          <div class="item proFinder">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.61476 5.46225C9.14407 5.46225 10.3838 4.23948 10.3838 2.73112C10.3838 1.22277 9.14407 0 7.61476 0C6.08545 0 4.8457 1.22277 4.8457 2.73112C4.8457 4.23948 6.08545 5.46225 7.61476 5.46225Z"
                fill="#0073B1"
              />
              <path
                d="M15.8384 3.72833L4.96289 14.4548L6.22973 15.7043C6.31845 15.7978 6.42566 15.8722 6.54473 15.9232C6.66381 15.9741 6.79221 16.0003 6.922 16.0003C7.05179 16.0003 7.18019 15.9741 7.29927 15.9232C7.41834 15.8722 7.52555 15.7978 7.61426 15.7043L17.7975 5.6606C17.934 5.51129 18.006 5.3153 17.9982 5.11438C17.9894 4.95492 17.9173 4.8053 17.7975 4.69788L16.8214 3.72833C16.757 3.66434 16.6805 3.61354 16.5961 3.57888C16.5117 3.54421 16.4213 3.52637 16.3299 3.52637C16.2385 3.52637 16.148 3.54421 16.0636 3.57888C15.9793 3.61354 15.9027 3.66434 15.8384 3.72833V3.72833Z"
                fill="#0091CA"
              />
              <path
                opacity="0.8"
                d="M8.88133 14.4545L7.61448 15.704C7.52427 15.7939 7.41626 15.8646 7.29716 15.9116C7.17806 15.9586 7.05043 15.9809 6.92222 15.9771C6.79405 15.9805 6.66654 15.958 6.5475 15.911C6.42847 15.8641 6.32041 15.7936 6.22995 15.704L0.200329 9.75697C0.0713938 9.62904 -0.000976562 9.45599 -0.000976562 9.27561C-0.000976562 9.09523 0.0713938 8.92218 0.200329 8.79425L1.17642 7.83153C1.31853 7.69979 1.50758 7.62864 1.70254 7.63352C1.87305 7.6388 2.03464 7.7099 2.15251 7.83153L8.88133 14.4545Z"
                fill="#33AADA"
              />
              <path
                d="M6.92262 12.5225L9.69167 9.7914V6.82812H5.53809V11.157L6.92262 12.5225Z"
                fill="#0073B1"
              />
            </svg>
            <p>PROFINDER</p>
          </div>
          <div class="item Salary">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 12.6667H0V14H17V12.6667Z" fill="#0084BF" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6923 16H1.30769C0.588462 16 0 15.4 0 14.6667H17C17 15.4 16.4115 16 15.6923 16Z"
                fill="#33AADA"
              />
              <path
                d="M8.4997 9.33366C10.3052 9.33366 11.7689 7.84127 11.7689 6.00033C11.7689 4.15938 10.3052 2.66699 8.4997 2.66699C6.69415 2.66699 5.23047 4.15938 5.23047 6.00033C5.23047 7.84127 6.69415 9.33366 8.4997 9.33366Z"
                fill="url(#paint0_linear_1_999)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3462 0H0.653846C0.261538 0 0 0.266667 0 0.666667V11.3333C0 11.7333 0.261538 12 0.653846 12H16.3462C16.7385 12 17 11.7333 17 11.3333V0.666667C17 0.266667 16.7385 0 16.3462 0ZM15.6923 8C14.45 8.46667 13.5346 9.46667 13.0769 10.6667H3.92308C3.46538 9.4 2.48462 8.46667 1.30769 8V4C2.55 3.53333 3.46538 2.53333 3.92308 1.33333H13.0769C13.5346 2.6 14.5154 3.53333 15.6923 4V8Z"
                fill="url(#paint1_linear_1_999)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.21191 8.33392C7.51961 9.66725 9.54653 9.66725 10.8542 8.33392C12.1619 7.00059 12.1619 4.93392 10.8542 3.60059L6.21191 8.33392Z"
                fill="#0084BF"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_999"
                  x1="9.69395"
                  y1="7.41446"
                  x2="6.28563"
                  y2="3.53225"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1074AF" />
                  <stop offset="1" stop-color="#5251C0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_999"
                  x1="12.0569"
                  y1="10.2119"
                  x2="1.90563"
                  y2="-1.35085"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1074AF" />
                  <stop offset="1" stop-color="#5251C0" />
                </linearGradient>
              </defs>
            </svg>
            <p>SALARY</p>
          </div>
          <div class="item slideshare">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33208 9.90754H11.617H12.131C14.5302 9.90754 17.5576 9.29216 19.0428 8.92294V1.84612C19.0428 0.799987 18.3002 0 17.3291 0H3.6199C2.64883 0 1.90625 0.799987 1.90625 1.84612V8.92294C3.39142 9.29216 6.41887 9.90754 8.81798 9.90754H9.33208Z"
                fill="#CAEDFF"
              />
              <path
                d="M6.4753 8.00015C7.7372 8.00015 8.76017 6.8981 8.76017 5.53865C8.76017 4.1792 7.7372 3.07715 6.4753 3.07715C5.2134 3.07715 4.19043 4.1792 4.19043 5.53865C4.19043 6.8981 5.2134 8.00015 6.4753 8.00015Z"
                fill="#0091CA"
              />
              <path
                d="M14.4724 8.00015C15.7343 8.00015 16.7572 6.8981 16.7572 5.53865C16.7572 4.1792 15.7343 3.07715 14.4724 3.07715C13.2105 3.07715 12.1875 4.1792 12.1875 5.53865C12.1875 6.8981 13.2105 8.00015 14.4724 8.00015Z"
                fill="url(#paint0_linear_1_1012)"
              />
              <path
                d="M20.4136 10.4614L20.0709 9.23064C19.9566 8.92295 19.671 8.73834 19.3854 8.79988C18.3001 9.04603 15.6725 9.6614 13.2734 9.84601V12.8614C13.2734 13.3537 13.0449 13.7229 12.7021 13.969V15.3844C12.7021 15.7536 12.9306 15.9998 13.2734 15.9998H16.1295C16.4722 15.9998 16.7007 15.7536 16.7007 15.3844V11.8768C18.0716 11.6306 19.2712 11.446 19.9566 11.2614C20.3565 11.1998 20.5278 10.8306 20.4136 10.4614Z"
                fill="#2569B4"
              />
              <path
                d="M11.6167 9.90797H8.81774C6.19014 9.90797 2.76283 9.16951 1.50615 8.86183C1.22054 8.80029 0.934934 8.9849 0.820691 9.29259L0.47796 10.5233C0.363717 10.8926 0.592204 11.2618 0.934934 11.3233C1.6204 11.4464 2.81995 11.6926 4.19088 11.9387V15.3848C4.19088 15.754 4.41936 16.0002 4.76209 16.0002H7.61818C7.96091 16.0002 8.1894 15.754 8.1894 15.3848V12.3079C8.41789 12.3079 8.64637 12.3079 8.81774 12.3079H11.6167C11.9594 12.3079 12.1879 12.0618 12.1879 11.6926V10.5233C12.1879 10.1541 11.9594 9.90797 11.6167 9.90797Z"
                fill="#0091CA"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1012"
                  x1="13.4915"
                  y1="2.16307"
                  x2="16.8045"
                  y2="11.9867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#665ED0" />
                  <stop offset="1" stop-color="#0073B1" />
                </linearGradient>
              </defs>
            </svg>
            <p>SLIDESHARE</p>
          </div>
        </div>
        <hr />
        <div class="services">
          <p class="services-title">More from LinkedIn</p>
          <div class="services-card">
            <p>Talent Solutions</p>
            <span>Find, attract and recruit talent</span>
          </div>
          <div class="services-card">
            <p>Sales Solutions</p>
            <span>Unlock sales opportunities</span>
          </div>
          <div class="services-card">
            <p>Post a job</p>
            <span>Get your job in front of quality candidates</span>
          </div>
          <div class="services-card">
            <p>Marketing Solutions</p>
            <span>Acquire customers and grow your buisness</span>
          </div>
          <div class="services-card">
            <p>Learning Solutions</p>
            <span>Develop talent across your organisation</span>
          </div>
        </div>
        <div class="premium-button">
          <p>LinkedIn Premium</p>
          <span>Special features only for premium users</span>
        </div>
      </div>
      <div
        v-show="otherOpen"
        class="other-filter"
        @click="otherOpen = false"
      ></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#navbar {
  display: flex;
  width: 100%;
  height: 16px * 6;
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
        margin-top: 16px * 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .all-results {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background-color: white;
        margin-top: auto;

        button {
          width: 100%;
          border: none;
          background-color: transparent;
          background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
          padding: 16px * 0.5 16px * 2.5;
          border-radius: 5px;
          p {
            font-size: 1.25rem;
            transform: scaleY(0.8);
            color: white;
          }
        }
      }
      hr {
        margin-top: 16px * 2;
      }
      .search-hint {
        margin: 0 16px * 1.5;
        .hint-title {
          margin: 16px 0rem;
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
          margin: 16px 16px * 0.5;
          padding: 16px;
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
            padding-left: 16px;
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
          margin-top: 16px;
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
      backdrop-filter: blur(2px);
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
    margin-left: 16px;
    .user {
      display: flex;
      align-items: center;
      p {
        font-size: 1.1rem;
      }
      span {
        margin-left: 16px;
        color: rgba(24, 24, 24, 0.1);
        font-size: 1.2rem;
      }
    }
    .count {
      display: flex;

      span {
        margin-left: 16px * 0.5;
        color: #02b033;
      }
    }
  }
}
.other-button {
  flex: 0.8;
  border-right: 4px solid;
  border-color: #f4f4f4;
  margin-right: 16px * 2;
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
  &:hover {
    color: #0275b1;
    &:after {
      width: 100%;
    }
  }
}
.other-sidebar {
  position: fixed;
  top: 0;
  right: calc(-20vw - 6rem);
  width: 20vw;
  height: 100vh;
  z-index: 999;
  transition: all 0.2s linear;
  &.active {
    right: 0vw;
  }
  .close-button {
    position: absolute;
    width: 16px * 6;
    height: 16px * 6;
    margin-left: 16px * -6;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
    &:after {
      content: '';
      width: 0%;
      height: 2px;
      background: #0275b1;
      transition: all 0.2s linear;
      position: absolute;
      bottom: 0;
    }
    &:hover {
      color: #0275b1;
      &:after {
        width: 100%;
      }
    }
  }
  .other-container {
    position: relative;
    z-index: 999;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    .header {
      display: flex;
      height: 16px * 6;
      padding: 0 16px * 1.25;
      justify-content: center;
      align-items: center;
      p {
        font-size: 1.25rem;
        font-weight: bold;
        margin-right: auto;
      }
      .help-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
          stroke: #0275b1;
          transition: 0.2s linear;
        }
        span {
          color: #0275b1;
        }
        &:hover {
          svg {
            fill: #0275b1;
            stroke: white;
          }
        }
      }
    }
    .first-button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px * 2;
      button {
        border: none;
        width: 100%;
        background-color: #0275b1;
        padding: 16px * 0.5 16px;
        border-radius: 5px;
        display: flex;

        align-items: center;
        .left {
          display: flex;
        }
        .right {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          p {
            font-size: 1rem;
            color: white;
          }
          span {
            margin-top: 16px * 0.1;
            font-size: 0.5rem;
            color: white;
          }
        }
      }
    }
    .items-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 16px;
      .item {
        width: 40%;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
        padding: 16px;
        margin: 0 16px * 0.5 16px * 0.5 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          border: 1px solid #0275b1;
        }
        p {
          margin-left: 16px;
        }
      }
    }
    .services {
      display: flex;
      flex-direction: column;
      .services-title {
        padding: 16px;
        font-size: 1.25rem;
        font-weight: bold;
      }
      .services-card {
        align-self: center;
        width: 90%;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
        padding: 16px;
        margin-bottom: 16px;
        transition: 0.2s linear;
        &:hover {
          border: 1px solid #0275b1;
        }
        p {
          font-weight: bold;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
    .premium-button {
      width: 90%;
      padding: 16px 16px * 2;
      align-self: center;
      color: white;
      margin-top: auto;
      margin-bottom: 16px;
      cursor: pointer;

      p {
        font-weight: bold;
      }
      span {
        font-size: 0.5rem;
      }
      background: linear-gradient(180deg, #d8c281 0%, #ac9b69 100%);
    }
  }

  .other-filter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    z-index: 99;
  }
}
</style>
