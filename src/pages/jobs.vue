<script setup>
import axios from 'axios';
const jobsArr = ref([]);
const newJobsArr = ref([]);
const searchesJobsArr = ref([
  { title: 'UX/UI designer', spot: 'Remote', number: 240, notice: false },
  { title: 'Web designer', spot: 'Los-Angeles, CA', number: 0, notice: true },
  {
    title: 'Graphic designer',
    spot: 'Malaysia, Kuala Lumpur',
    number: 0,
    notice: true,
  },
]);
const trackedArr = ref([]);
const coursesArr = ref([]);

onMounted(() => {
  axios
    .get(
      'https://api.unsplash.com/search/photos?query=google-icon&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      jobsArr.value = [
        {
          img: imgArr[0].urls.regular,
          title: 'UX/UI designer',
          company: 'Upwork',
          spot: 'CA, USA',
          information:
            "On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,",
        },
        {
          img: imgArr[1].urls.regular,
          title: 'Product designer',
          company: 'Facebook',
          spot: 'CA, USA',
          information:
            "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay..",
        },
        {
          img: imgArr[2].urls.regular,
          title: 'Part-time UX designer',
          company: 'Google',
          spot: 'International',
          information:
            "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
        },
        {
          img: imgArr[3].urls.regular,
          title: 'Web designer',
          company: 'LinkedIn',
          spot: 'CA, USA',
          information:
            "LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.",
        },
      ];
    });
  axios
    .get(
      'https://api.unsplash.com/search/photos?query=company&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      newJobsArr.value = [
        {
          img: imgArr[0].urls.regular,
          title: 'UI designer',
          company: 'Instagram',
          spot: 'CA, USA',
          information:
            'Instagram is a photo and video-sharing social networking service owned by Facebook, Inc.',
        },
        {
          img: imgArr[1].urls.regular,
          title: 'Product designer',
          company: 'Periscope',
          spot: 'Remote only',
          information:
            'eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015.',
        },
      ];
    });
  axios
    .get(
      'https://api.unsplash.com/search/photos?query=meta-icon&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      trackedArr.value = [
        {
          img: imgArr[0].urls.regular,
          title: 'UX/UI Designer',
          company: 'Upwork',
        },
        {
          img: imgArr[1].urls.regular,
          title: 'Product designer',
          company: 'Facebook',
        },
      ];
    });
  axios
    .get(
      'https://api.unsplash.com/search/photos?page=1&query=courses&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      coursesArr.value = [
        {
          title: 'The guide. Apply for a job',
          img: imgArr[0].urls.regular,
          content: '12,932 viewers',
        },
        {
          title: 'Your dream job and how you can g',
          img: imgArr[1].urls.regular,
          content: '9,112 viewers',
        },
        {
          title: 'Now you know it. 15 steps to find job',
          img: imgArr[2].urls.regular,
          content: '7,221 viewers',
        },
      ];
    });
});
</script>

<template>
  <section>
    <div class="container">
      <div class="content">
        <div class="search-job">
          <div class="search-title"><p>YOUR DREAM JOB IS HERE</p></div>
          <hr />
          <div class="search-content">
            <input type="text" placeholder="Search jobs" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.15">
                <path
                  d="M4 21V14"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 10V3"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 21V12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8V3"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 21V16"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12V3"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 14H7"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 8H15"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 16H23"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32"
                height="32"
                rx="4"
                fill="url(#paint0_linear_1_1314)"
              />
              <path
                d="M15.3333 20.6668C18.2789 20.6668 20.6667 18.2789 20.6667 15.3334C20.6667 12.3879 18.2789 10.0001 15.3333 10.0001C12.3878 10.0001 10 12.3879 10 15.3334C10 18.2789 12.3878 20.6668 15.3333 20.6668Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0001 22.0001L19.1001 19.1001"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1314"
                  x1="16"
                  y1="0"
                  x2="16"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0077B5" />
                  <stop offset="1" stop-color="#0E6795" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="filter">
          <hr />
          <p>JOBS FOR YOU</p>
          <hr />
        </div>
        <div v-for="item in jobsArr" :key="item.title" class="jobs">
          <img class="job-img" :src="item.img" alt="" />
          <div class="job-info">
            <p class="job-title">{{ item.title }}</p>
            <p class="job-company">
              {{ item.company }} <span class="job-spot">{{ item.spot }}</span>
            </p>
            <p class="job-information">
              {{ item.information }}
            </p>
          </div>
          <div class="more"><p>MORE</p></div>
        </div>
        <div class="filter">
          <hr />
          <p>NEW JOBS</p>
          <hr />
        </div>
        <div v-for="item in newJobsArr" :key="item.title" class="jobs">
          <img class="job-img" :src="item.img" alt="" />
          <div class="job-info">
            <p class="job-title">{{ item.title }}</p>
            <p class="job-company">
              {{ item.company }} <span class="job-spot">{{ item.spot }}</span>
            </p>
            <p class="job-information">
              {{ item.information }}
            </p>
          </div>
          <div class="more"><p>MORE</p></div>
        </div>
      </div>
      <div class="sidebar">
        <div class="new-post">
          <button><p>POST A JOB</p></button>
        </div>
        <side-content class="group">
          <template #header>
            <p>MY SEARCHES<a href="javascript:;">EDIT LIST</a></p>
          </template>
          <template #content>
            <div v-for="item in searchesJobsArr" class="searches">
              <div class="job-info">
                <p class="job-title">
                  {{ item.title }}
                  <span v-if="item.number" class="number">{{
                    item.number > 0 ? '+' + item.number : item.number
                  }}</span>
                </p>
                <span class="spot">{{ item.spot }}</span>
              </div>
              <svg
                v-show="item.notice"
                @click="item.notice = !item.notice"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z"
                  stroke="#0275B1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
                  stroke="#0275B1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-show="!item.notice"
                @click="item.notice = !item.notice"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4201 8.66668C12.1235 7.58095 11.9821 6.45871 12.0001 5.33334"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.17333 4.1734C4.05751 4.54914 3.99907 4.94021 4 5.3334C4 10.0001 2 11.3334 2 11.3334H11.3333"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9998 5.3333C12.0009 4.60867 11.8051 3.89737 11.4333 3.27536C11.0616 2.65335 10.5279 2.144 9.8892 1.80172C9.25051 1.45945 8.53084 1.29709 7.80705 1.33201C7.08327 1.36692 6.38256 1.5978 5.77979 1.99996"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.666504 0.666656L15.3332 15.3333"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </template>
        </side-content>
        <side-content class="tracked">
          <template #header>
            <p>TRACKED JOBS</p>
          </template>
          <template #content>
            <div v-for="item in trackedArr" class="tracked-item">
              <img :src="item.img" alt="" />
              <div class="job-info">
                <p class="job-title">{{ item.title }}</p>
                <span class="company">{{ item.company }}</span>
              </div>
            </div>
          </template>
        </side-content>
        <side-content class="articles">
          <template #header>
            <p>ARTICLES FOR YOU</p>
          </template>
          <template #content>
            <div
              v-for="item in coursesArr"
              :key="item.title"
              class="article-card"
            >
              <div class="left">
                <img :src="item.img" alt="" />
              </div>
              <div class="right">
                <p>{{ item.title }}</p>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </template>
        </side-content>
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
    width: 100%;
    justify-content: center;
    .content {
      width: 55vw;
      .search-job {
        width: 100%;
        background-color: white;
        padding: 16px * 2;
        p {
          font-weight: bold;
        }
        hr {
          margin: 1rem 0;
        }
        .search-content {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          input {
            font-size: 1.5rem;
            border: none;
            flex: 1;
            margin-right: auto;
            &:focus {
              outline: none;
            }
            &::placeholder {
              color: #cecece;
            }
          }
          svg {
            margin-left: 1rem;
            cursor: pointer;
          }
        }
      }
      .jobs {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 16px;
        margin-bottom: 16px;
        .job-img {
          width: 16px * 5;
          height: 16px * 5;
          border-radius: 50%;
        }
        .job-info {
          margin-left: 16px;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .job-title {
            font-weight: bold;
          }
          .job-company {
            margin: 16px * 0.25 0;
            font-size: 0.5rem;
            .job-spot {
              margin-left: 16px * 0.5;
              color: rgba(24, 24, 24, 0.5);
            }
          }
          .job-information {
            font-size: 0.5rem;
          }
        }
        .more {
          margin-left: auto;
          padding: 16px * 0.5 16px * 1.5;
          background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      .filter {
        margin: 2rem 0;
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
    }
    .sidebar {
      margin-left: 2.5vw;
      width: 15vw;

      .new-post {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background-color: white;
        margin-bottom: 16px;

        button {
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
      .searches {
        margin-top: 16px;
        padding: 16px;
        background-color: #e9f0f8;
        display: flex;
        align-items: center;
        border-radius: 5px;
        .job-info {
          display: flex;
          flex-direction: column;
          .job-title {
            font-weight: bold;
          }
          .number {
            color: #02b033;
          }
          .spot {
            margin-top: 16px * 0.5;
            font-size: 0.5rem;
          }
        }
        svg {
          width: 25px;
          height: 25px;
          margin-left: auto;
          cursor: pointer;
        }
      }
      .tracked {
        .tracked-item {
          display: flex;
          align-items: center;
          padding: 16px;
          margin-top: 16px;
          border: 1px solid #f4f4f4;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            border-color: #0275b1;
          }
          img {
            width: 16px * 4;
            height: 16px * 4;
            border-radius: 50%;
          }
          .job-info {
            margin-left: 16px;
            .job-title {
              font-weight: bold;
            }
            .company {
              font-size: 0.5rem;
            }
          }
        }
      }
      .article-card {
        margin-top: 16px;
        display: flex;
        cursor: pointer;
        .left {
          display: flex;
          align-items: center;
          img {
            width: 4vw;
          }
        }
        .right {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            font-weight: bold;
          }
          span {
            margin-top: 0.5rem;
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
