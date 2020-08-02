<template>
  <div id="topbar">
    <div class="m-logo">
      <HistoryPush to="Main">
        <svg>
          <use xlink:href="@/assets/svg/topbar.sp.svg#logo" />
        </svg>
      </HistoryPush>
    </div>
    <div class="m-history clearfix">
      <HistoryBack>
        <span class="btn btn-prv" :class="{dis:!canBack}">
          <svg>
            <use xlink:href="@/assets/svg/topbar.sp.svg#back" />
          </svg>
        </span>
      </HistoryBack>
      <HistoryForward>
        <span class="btn btn-nxt" :class="{dis:!canForward}">
          <svg>
            <use xlink:href="@/assets/svg/topbar.sp.svg#next" />
          </svg>
        </span>
      </HistoryForward>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    canForward () {
      return this.$store.state.history.canForward
    },
    canBack () {
      return this.$store.state.history.canBack
    }
  }
})
</script>

<style lang="less">
#topbar {
  height: @topbarHeight;
  background-color: @topbarBgc;
  -webkit-app-region: drag;
  .m-logo {
    -webkit-app-region: no-drag;
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
    -webkit-app-region: no-drag;
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
}
</style>
