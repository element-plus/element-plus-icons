import { defineComponent, h, renderSlot } from 'vue'

import type { CSSProperties, PropType, DefineComponent } from 'vue'

// per description here classic components will have no overhead
// compared to functional components, we can use it directly
// https://v3.vuejs.org/guide/migration/functional-components.html#single-file-components-sfcs
export default defineComponent({
  props: {
    style: {
      type: Object as PropType<CSSProperties>,
    },
    raw: {
      type: Object as PropType<DefineComponent<any, any>>,
      default: null,
    },
    class: {
      type: [Object, String, Array],
    },
    revolve: {
      type: Boolean,
    },
  },
  render() {
    const { $slots, raw, style, $attrs } = this

    const defaultSlot = [renderSlot($slots, 'default', {}, () => [])]
    return raw
      ? h(raw, Object.assign({ class: this.class, style }, $attrs), [
          defaultSlot,
        ])
      : h(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 1024 1024',
              width: '1rem',
              height: '1rem',
              fill: 'currentColor',
              class: [
                {
                  'el-svg-icon-revolving': this.revolve,
                },
                this.class,
              ],
              style,
            },
            $attrs,
          ),
          [defaultSlot],
        )
  },
})
