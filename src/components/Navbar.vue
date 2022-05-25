<script setup></script>

<template>
  <div id="navbar">
    <div class="logo-zone">
      <SvgIcon name="logo" style="width: 60px; height: 60px" />
    </div>
    <div class="nav-items">
      <ul>
        <li>
          <SvgIcon name="feed" style="width: 30px; height: 30px" />
          <p>FEED</p>
        </li>
        <li>
          <SvgIcon name="network" style="width: 30px; height: 30px" />
          <p>NETWORK</p>
        </li>
        <li>
          <SvgIcon name="jobs" style="width: 30px; height: 30px" />
          <p>JOBS</p>
        </li>
        <li>
          <SvgIcon name="chat" style="width: 30px; height: 30px" />
          <p>CHAT</p>
        </li>
        <li>
          <SvgIcon name="notice" style="width: 30px; height: 30px" />
          <p>NOTICES</p>
        </li>
      </ul>
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
      <img src="../assets/Images/picture.jpg" alt="" />
      <div class="info">
        <div class="user">
          <p>Miya</p>
          <span>You</span>
        </div>
        <div class="count">
          <p>367 views today</p>
          <span>+32</span>
          <SvgIcon
            name="arrow-up-right"
            style="width: 15px; height: 15px"
            color="#02B033"
          />
        </div>
      </div>
    </div>
    <div class="other-button">
      <SvgIcon name="other" style="width: 30px; height: 30px" />
      <p>OTHER</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: "@/assets/GothamPro.ttf", "Noto Sans TC", sans-serif;
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

  ul {
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1.5vw;
      &:after {
        content: "";
        width: 0%;
        height: 2px;
        background: #0275b1;
        transform: translateY(10px);
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
  &:after {
    content: "";
    width: 0%;
    height: 2px;
    background: #0275b1;
    transform: translateY(10px);
    transition: all 0.2s linear;
  }
  &:hover,
  &.active {
    color: #0275b1;
    &:after {
      width: 50%;
    }
  }
}
</style>
