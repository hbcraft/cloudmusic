<template>
  <div id="topbar">
    <div class="m-logo">
      <HistoryPush to="Discovery">
        <svg>
          <use :xlink:href="topbarSvg + '#logo'" />
        </svg>
      </HistoryPush>
    </div>
    <div class="m-history">
      <HistoryBack>
        <span class="btn btn-prv" :class="{ dis: !canBack }">
          <svg>
            <use :xlink:href="topbarSvg + '#back'" />
          </svg>
        </span>
      </HistoryBack>
      <HistoryForward>
        <span class="btn btn-nxt" :class="{ dis: !canForward }">
          <svg>
            <use :xlink:href="topbarSvg + '#next'" />
          </svg>
        </span>
      </HistoryForward>
    </div>
    <div class="m-search">
      <input type="text" placeholder="搜索音乐，视频，歌词，电台" />
      <span class="search-btn">
        <svg>
          <use :xlink:href="topbarSvg + '#search'" />
        </svg>
      </span>
    </div>
    <div class="m-winctrl">
      <span class="bar"></span>
      <span class="icn fix" title="mini模式">
        <svg class="svg">
          <use :xlink:href="topbarSvg + '#mini'" />
        </svg>
      </span>
      <span class="icn min" title="最小化" @click="minimized">
        <svg class="svg">
          <use :xlink:href="topbarSvg + '#zoomout'" />
        </svg>
      </span>
      <span class="icn revert" title="最大化" @click="maximized">
        <svg class="svg">
          <use :xlink:href="topbarSvg + '#' + isMaximized" />
        </svg>
      </span>
      <span class="icn cls" title="关闭" @click="winClose">
        <svg class="svg">
          <use :xlink:href="topbarSvg + '#close'" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
// TODO 把自定义历史记录组件替换为electron的是否可后退、前进方法
import { Vue, Component } from 'vue-property-decorator'
import { ipcRenderer, IpcRendererEvent } from 'electron'

@Component({
  name: 'Topbar'
})
export default class Topbar extends Vue {
  // 最大化按钮的状态zoomin：最大化，restore：还原
  isMaximized = 'zoomin'
  // topbar SVG资源
  topbarSvg = require('@/assets/svg/topbar/topbar.sp.svg')

  // 是否可以前进
  get canForward () {
    return this.$store.state.history.canForward
  }

  // 是否可以后退
  get canBack () {
    return this.$store.state.history.canBack
  }

  // 关闭
  winClose () {
    // 后台运行，所以是隐藏
    ipcRenderer.send('hide')
  }

  // 最小化
  minimized () {
    ipcRenderer.send('minimized')
  }

  // 最大化
  maximized () {
    ipcRenderer.send('maximized')
  }

  mounted () {
    // 页面最大化时改变最大化的按钮
    ipcRenderer.on('isMaximized', (e: IpcRendererEvent, v: boolean) => {
      this.isMaximized = v ? 'restore' : 'zoomin'
    })
  }
}
</script>

<style lang="less">
#topbar {
  height: @topbarHeight;
  background-color: @topbarBgc;
  -webkit-app-region: drag;
  & > * {
    -webkit-app-region: no-drag;
  }
  .m-logo {
    height: 100%;
    width: 186px;
    float: left;
    a {
      display: block;
      width: 150px;
      height: 100%;
      svg {
        max-height: 20px;
        margin: 15px 0 0 15px;
        width: 114px;
        height: 100%;
        fill: #fff;
      }
    }
  }
  .m-history {
    float: left;
    width: 53px;
    height: 22px;
    margin: 14px 0 0 6px;
    .btn {
      float: left;
      width: 25px;
      height: 20px;
      border: 1px solid;
      border-color: fade(#000, 15%);
      cursor: pointer;
      &.btn-prv {
        border-right: 0;
        border-radius: 3px 0 0 3px;
      }
      &.btn-nxt {
        border-radius: 0 3px 3px 0;
      }
      svg {
        width: 26px;
        max-height: 22px;
        margin: -1px 0 0 -1px;
        fill: fade(#fff, 80%);
      }
      &.dis {
        cursor: default;
        svg {
          opacity: 0.2;
        }
      }
      &:not(.dis):active {
        border-color: fade(#23262c, 20%);
        background: fade(#23262c, 20%);
        svg {
          fill: fade(#000, 20%);
        }
        & + .btn-nxt {
          border-left-color: fade(#000, 30%);
        }
      }
    }
  }
  .m-search {
    width: 218px;
    height: 22px;
    float: left;
    margin: 14px 0 14px 16px;
    position: relative;
    .search-btn {
      position: absolute;
      right: 0;
      padding: 4px;
      opacity: 0.45;
      width: 12px;
      height: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      svg {
        width: 100%;
        height: 100%;
        fill: fade(#fff, 80%);
      }
    }
    input {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 4px 27px 4px 10px;
      border-radius: 11px;
      border: 0;
      line-height: 16px;
      outline: none;
      background: fade(#000, 15%);
      color: rgba(255, 255, 255, 0.8);
      font-family: "simsun";
      letter-spacing: -0.1em;
      &:focus + .search-btn {
        opacity: 0.8;
      }
      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .m-winctrl {
    width: 117px;
    height: 50px;
    float: right;
    .bar {
      float: left;
      width: 0;
      height: 20px;
      margin: 15px 13px 0 0;
      border-left: 1px solid fade(#000, 15%);
    }
    .icn {
      svg {
        width: 13px;
        max-height: 11px;
        opacity: 0.5;
        fill: #fff;
      }
      float: left;
      padding: 19px 5px 0;
      cursor: pointer;
      &:hover svg {
        opacity: 1;
      }
    }
  }
}
</style>
