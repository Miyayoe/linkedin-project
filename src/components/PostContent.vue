<script setup>
const props = defineProps({
  reacts: {
    type: String,
    default:
      '<span>Someone</span>,<span>Someone</span> and <span>Someone</span> liked this.',
  },
  user: {
    type: Object,
    default: () => ({
      img: '/images/picture.jpg',
      name: 'user name',
      job: 'job name',
    }),
  },
  text: {
    type: String,
    default: 'text',
  },
  overflow: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    default: '',
  },
  file: {
    type: Array,
    default: () => [
      // {
      //   fileName: 'iOS 11 guidelines for UX/UI designers',
      //   fileDetail: 'PDF file, 324 kb',
      // },
    ],
  },
  like: {
    type: Object,
    default: () => ({
      count: 0,
      liked: false,
    }),
  },
  comment: {
    type: Object,
    default: () => ({
      count: 0,
      commented: false,
    }),
  },
});
const handleClickLike = () => {
  props.like.count += props.like.liked ? -1 : 1;
  props.like.liked = !props.like.liked;
};
const handleClickComment = () => {
  props.comment.count += props.comment.commented ? -1 : 1;
  props.comment.commented = !props.comment.commented;
};
</script>

<template>
  <div class="post-container">
    <div class="react">
      <p v-html="reacts"></p>
      <a href="javascript:;">
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
      </a>
    </div>
    <hr />
    <div class="post-content">
      <div class="post-user">
        <div class="left">
          <img :src="user.img" alt="" />
        </div>
        <div class="right">
          <p class="name">{{ user.name }}</p>
          <p class="job">{{ user.job }}</p>
        </div>
      </div>
      <div class="post-text">
        <p>{{ text }}</p>
        <div v-if="overflow" class="post-more" @click="overflow = !overflow">
          <div class="mask"></div>
          <a href="javascript:;"> <p>READ MORE</p> </a>
        </div>
      </div>
      <div v-if="img" class="post-img">
        <img :src="img" alt="" />
      </div>
      <div
        v-if="file.length"
        v-for="item in file"
        :key="item.fileName"
        class="post-file"
      >
        <div class="left">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="50"
              height="50"
              rx="25"
              fill="url(#paint0_linear_1_390)"
            />
            <path
              d="M27.3811 13.0953H17.8573C17.2258 13.0953 16.6202 13.3462 16.1737 13.7927C15.7272 14.2392 15.4763 14.8448 15.4763 15.4763V34.5239C15.4763 35.1554 15.7272 35.761 16.1737 36.2075C16.6202 36.654 17.2258 36.9049 17.8573 36.9049H32.143C32.7745 36.9049 33.3801 36.654 33.8266 36.2075C34.2731 35.761 34.5239 35.1554 34.5239 34.5239V20.2382L27.3811 13.0953Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.3807 13.0953V20.2382H34.5236"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.7616 26.1903H20.2378"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.7616 30.9524H20.2378"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.6187 21.4285H21.4283H20.2378"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_390"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0077B5" />
                <stop offset="1" stop-color="#0E6795" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="right">
          <div class="file-describe">
            <div class="file-name">
              <p>{{ item.fileName }}</p>
            </div>
            <div class="file-detail">
              <p>{{ item.fileDetail }}</p>
            </div>
          </div>
          <div class="file-download">
            <a href="javascript:;">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 28.3334L19.9999 35L26.6666 28.3334"
                  stroke="#0275B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 20V35"
                  stroke="#0275B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.7999 30.15C36.2489 29.1311 37.3355 27.6769 37.902 25.9986C38.4686 24.3202 38.4856 22.505 37.9505 20.8164C37.4155 19.1277 36.3563 17.6535 34.9267 16.6076C33.497 15.5617 31.7713 14.9986 29.9999 15H27.8999C27.3986 13.0465 26.4607 11.2321 25.1568 9.69348C23.8528 8.15487 22.2168 6.93211 20.3719 6.11727C18.527 5.30242 16.5213 4.91672 14.5058 4.9892C12.4902 5.06169 10.5174 5.59046 8.73581 6.53572C6.95421 7.48098 5.41026 8.81809 4.2202 10.4464C3.03014 12.0747 2.22497 13.9518 1.86532 15.9363C1.50567 17.9208 1.60091 19.961 2.14385 21.9034C2.6868 23.8458 3.66332 25.6396 4.99989 27.15"
                  stroke="#0275B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="post-footer">
      <div
        class="react-button post-like"
        :class="{ active: like.liked }"
        @click="handleClickLike"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66671 14.6666H2.66671C2.31309 14.6666 1.97395 14.5262 1.7239 14.2761C1.47385 14.0261 1.33337 13.6869 1.33337 13.3333V8.66665C1.33337 8.31302 1.47385 7.97389 1.7239 7.72384C1.97395 7.47379 2.31309 7.33331 2.66671 7.33331H4.66671M9.33337 5.99998V3.33331C9.33337 2.80288 9.12266 2.29417 8.74759 1.9191C8.37252 1.54403 7.86381 1.33331 7.33337 1.33331L4.66671 7.33331V14.6666H12.1867C12.5083 14.6703 12.8203 14.5576 13.0653 14.3493C13.3103 14.1411 13.4718 13.8513 13.52 13.5333L14.44 7.53331C14.469 7.34222 14.4562 7.1471 14.4023 6.96148C14.3484 6.77586 14.2548 6.60418 14.1279 6.45832C14.0011 6.31247 13.8441 6.19593 13.6678 6.11679C13.4914 6.03765 13.3 5.99779 13.1067 5.99998H9.33337Z"
            stroke=""
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>{{ like.count }}</p>
      </div>
      <div
        class="react-button post-comment"
        :class="{ active: comment.commented }"
        @click="handleClickComment"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
            stroke=""
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>{{ comment.count }}</p>
      </div>
      <div class="react-button post-share">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.33331C13.1046 5.33331 14 4.43788 14 3.33331C14 2.22874 13.1046 1.33331 12 1.33331C10.8954 1.33331 10 2.22874 10 3.33331C10 4.43788 10.8954 5.33331 12 5.33331Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 14.6667C13.1046 14.6667 14 13.7713 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7713 10.8954 14.6667 12 14.6667Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.72681 9.00677L10.2801 11.6601"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.2735 4.34009L5.72681 6.99342"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>SHARE</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-container {
  margin-bottom: 16px * 2;
  background-color: white;
  .react {
    padding: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      margin-right: auto;
      ::v-deep span {
        color: #0275b1;
      }
    }
  }
  .post-content {
    padding: 16px * 1.5;
    .post-user {
      display: flex;
      align-items: center;
      .left {
        img {
          width: 2.5vw;
          height: 2.5vw;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .right {
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          font-weight: bold;
        }
        .job {
          font-size: 0.5rem;
          color: #181818;
        }
      }
    }

    .post-text {
      p {
        color: #181818;
        padding: 16px * 0.5;
        line-height: 1.5;
      }
      .post-more {
        position: relative;
        .mask {
          width: 100%;
          height: 40px;
          bottom: 100%;
          position: absolute;
          background-image: linear-gradient(
            to top,
            hsla(0, 0%, 100%, 1),
            hsla(0, 0%, 100%, 0)
          );
        }

        a {
          text-decoration: none;
          p {
            font-weight: bold;
            letter-spacing: 0.05rem;
            color: #0275b1;
          }
        }
      }
    }
    .post-img {
      margin-top: 16px;
      height: 400px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
    .post-file {
      margin-top: 16px;
      display: flex;
      align-items: center;
      background-color: #e9f0f8;
      padding: 16px * 1.5;
      .right {
        margin-left: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        .file-describe {
          display: flex;
          margin-right: auto;
          flex-direction: column;
          justify-content: center;
          .file-name {
            p {
              font-weight: bold;
            }
          }
          .file-detail {
            p {
              font-size: 0.5rem;
              color: #181818;
            }
          }
        }
      }
    }
  }
  .post-footer {
    display: flex;
    justify-content: flex-end;

    .react-button {
      display: flex;
      padding: 16px 16px * 2;
      align-items: center;
      cursor: pointer;
      transition: 0.2s linear;
      &:hover {
        background: #0275b1;
        color: white;
        svg {
          stroke: #fff;
        }
      }
      svg {
        margin-right: 16px * 0.5;
        stroke: #0275b1;
      }
      &.active {
        svg {
          fill: #0275b1;
        }
      }
      p {
        font-weight: bold;
        transform: scaleY(0.9);
        letter-spacing: 0.05rem;
        text-decoration: none;
      }
    }
    .post-like {
      border-right: 1px solid #f4f4f4;
    }
    .post-comment {
      margin-right: auto;
      border-right: 1px solid #f4f4f4;
    }
    .post-share {
      border-left: 1px solid #f4f4f4;
      svg {
        fill: #0275b1;
      }
    }
  }
}
</style>
