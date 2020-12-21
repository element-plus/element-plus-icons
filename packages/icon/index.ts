import { defineComponent, h, renderSlot } from "vue";

import type { CSSProperties, PropType, DefineComponent } from "vue";

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
  },
  render() {
    const { $slots, raw, ...rest } = this;

    const defaultSlot = [renderSlot($slots, "default", {}, () => [])];
    return raw
      ? h(raw, rest, defaultSlot)
      : h(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024",
            width: '24px',
            height: '24px',
            ...rest,
          },
          defaultSlot
        );
  },
});
