<template>
    <div
        class="demo-block"
        :class="[blockClass, { 'hover': hovering }]"
        @mouseover="hovering = true"
        @mouseout="hovering = false">
        <slot name="source"></slot>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <slot name="highlight"></slot>
        </div>
        <div
            class="demo-block-control"
            :class="{ 'is-fixed': fixedControl }"
            @click="isExpanded = !isExpanded">
            <transition name="text-slide">
              <span v-show="hovering">{{ controlText }}</span>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            jsfiddle: {
                type: Object,
                default() {
                    return {};
                }
            }
        },

        data() {
            return {
                hovering: false,
                isExpanded: false,
                fixedControl: false
            }
        },

        computed: {
          codeAreaHeight() {
            const descriptionHeight = this.els.description.length > 0 ? this.els.description[0].clientHeight : 0;
            return descriptionHeight + this.els.highlight[0].clientHeight + 20;
          },
          controlText() {
            return this.isExpanded ? '隐藏代码' : '显示代码';
          },
          blockClass() {
            return `demo-block-${this.$router.currentRoute.path.split('/').pop()}`
          }
        },

        watch: {
          isExpanded(val) {
            this.$refs.meta.style.height = val ? `${this.codeAreaHeight}px` : 0;

            if (!val) {
              this.unregisterScroll();
            } else {
                this.registerScroll();
                setTimeout(() => {
                  this.scrollHandler();
                }, 200);
                
            }
          }
        },

        created() {
          console.log(this.$route.path);
        },

        mounted() {
          this.els = {
            scrollWrapper: document.querySelector('.uidoc-main'),
            description: this.$el.getElementsByClassName('description'),
            highlight: this.$el.getElementsByClassName('highlight')
          }
        },

        methods: {
          scrollHandler() {
            const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
            this.fixedControl = bottom > document.documentElement.clientHeight && 
              (top + 44) <= document.documentElement.clientHeight;
          },
          registerScroll() {
            this.els.scrollWrapper && this.els.scrollWrapper.addEventListener('scroll', this.scrollHandler);
          },
          unregisterScroll() {
            this.els.scrollWrapper && this.els.scrollWrapper.removeEventListener('scroll', this.scrollHandler);
          }
        }
    }
</script>

<style lang="scss">
  .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;

    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .demo-button {
      float: right;
    }

    .source {
      padding: 24px;
    }

    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      overflow: hidden;
      height: 0;
      transition: height .2s;
    }

    .description {
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;

      p {
        margin: 0;
        line-height: 26px;
      }

      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }

    .hljs {
      line-height: 1.8;
      font-family: Menlo,Monaco,Consolas,Courier,monospace;
      font-size: 12px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      margin-bottom: 25px;
      border-radius: 4px;
      -webkit-font-smoothing: auto
    }

    .highlight {
      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }

    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
    
      &.is-fixed {
        position: fixed;
        bottom: 0;
        left: 369px;
        right: 109px;
      }

      i {
        font-size: 16px;
        line-height: 44px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }

      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        display: inline-block;
      }

      &:hover {
        color: #409EFF;
        background-color: #f9fafc;
      }

      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }
      
      .control-button {
        line-height: 26px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 25px;
      }
    }
  }
</style>
