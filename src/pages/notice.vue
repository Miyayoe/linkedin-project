<script setup>
import axios from 'axios';

const noticeArr = ref([]);
const earlierArr = ref([]);

onMounted(() => {
  (async () => {
    let userImg = await axios.get(
      'https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    let companyImg = await axios.get(
      'https://api.unsplash.com/search/photos?query=google-logo&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    noticeArr.value = [
      {
        images: [
          companyImg.data.results[0].urls.regular,
          companyImg.data.results[1].urls.regular,
          companyImg.data.results[2].urls.regular,
        ],
        title: '<span>You appeared in 9 searches</span> this week',
        ago: '3 hours',
      },
      {
        images: [
          userImg.data.results[0].urls.regular,
          userImg.data.results[1].urls.regular,
          userImg.data.results[2].urls.regular,
        ],
        title:
          'Audrey Alexander and 10 others <span>viewed your profile</span>',
        ago: '9 hours',
      },
      {
        images: [
          userImg.data.results[7].urls.regular,
          userImg.data.results[8].urls.regular,
          userImg.data.results[9].urls.regular,
        ],
        title:
          'Eduardo Russel and 4 others <span>liked your post «1,000 connections! My network growth, so many»</span>',
        ago: '12 hours',
      },
    ];
    earlierArr.value = [
      {
        images: [
          companyImg.data.results[4].urls.regular,
          companyImg.data.results[5].urls.regular,
          companyImg.data.results[6].urls.regular,
        ],
        title: 'We found jobs that you may be interested',
        ago: '2 day ago',
      },
      {
        images: [
          userImg.data.results[0].urls.regular,
          userImg.data.results[4].urls.regular,
          userImg.data.results[6].urls.regular,
        ],
        title: 'Kyle Fisher and 17 others viewed your profile',
        ago: '9 hours',
      },
    ];
  })();
});
</script>

<template>
  <section>
    <div class="container">
      <div class="sidebar">
        <div class="side-nav">
          <ul>
            <li class="active">
              <div class="hover-box"></div>
              <p class="item-title">NOTIFICATIONS</p>
            </li>
            <li>
              <div class="hover-box"></div>
              <p class="item-title">NOTIFICATION SETTINGS</p>
            </li>
          </ul>
        </div>
        <Dashboard />
      </div>
      <div class="content">
        <div class="filter">
          <hr />
          <p>RECENT</p>
          <hr />
        </div>
        <div v-for="item in noticeArr" :key="item.title" class="notice-item">
          <div class="images">
            <img v-for="el in item.images" :src="el" :key="el" alt="" />
          </div>
          <div class="item-info">
            <p v-html="item.title"></p>
            <span class="info-time">{{ item.ago }}</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="filter">
          <hr />
          <p>EARLIER</p>
          <hr />
        </div>
        <div v-for="item in earlierArr" :key="item.title" class="notice-item">
          <div class="images">
            <img v-for="el in item.images" :src="el" :key="el" alt="" />
          </div>
          <div class="item-info">
            <p v-html="item.title"></p>
            <span class="info-time">{{ item.ago }}</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .container {
    margin-top: 70px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    .sidebar {
      width: 20%;
      .side-nav {
        background-color: white;
        width: 100%;
        border-radius: 5px;
        margin-bottom: 16px * 2;
        ul {
          li {
            display: flex;
            height: 16px * 3.5;
            justify-content: flex-end;
            align-items: center;
            &:not(:first-child) {
              border-top: 1px solid #e7e7e7;
            }
            .hover-box {
              width: 0;
              height: 100%;
              background-color: #0275b1;
              transition: 0.2s linear;
            }
            &.active,
            &:hover {
              opacity: 0.8;
              .hover-box {
                width: 16px * 0.5;
              }
            }

            .item-title {
              margin-right: auto;
              padding: 0 16px;
            }
          }
        }
      }
    }
    .content {
      width: 75%;
      .filter {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        hr {
          flex: 1;
        }
        span {
          border: none;
          background-color: transparent;
          font-size: 1rem;
          color: #0275b1;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        p {
          margin-left: 0.5rem;
          font-weight: bold;
        }
      }
      .notice-item {
        display: flex;
        background-color: #fff;
        padding: 16px * 2;
        align-items: center;
        margin-bottom: 16px;
        transition: 0.2s linear;
        &:hover {
          p {
            color: #0275b1;
          }
        }
        .images {
          display: flex;
          width: 16px * 5;
          justify-content: center;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
            &:not(:first-child) {
              margin-left: -25%;
            }
          }
        }
        .item-info {
          margin-left: 16px;
          p {
            font-size: 1.25rem;
            ::v-deep span {
              font-weight: bold;
            }
          }
          span {
            font-size: 0.5rem;
          }
        }
        svg {
          margin-left: auto;
          width: 16px * 2.5;
          height: 16px * 2.5;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
