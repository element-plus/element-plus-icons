import { defineComponent, h } from 'vue'

export interface GetExternalIconOpts {
  url: string | string[]
  deferred?: boolean
}

/**
 * Make sure icons loaded as shadow roots, refer to
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use
 */
export const ExternalIcon = defineComponent({
  name: 'ElExternalIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  render() {
    const link = `#${this.name}`;
    // fallthrough attributes
    return h('svg', this.$attrs, [
      h(
        'use',
        {
          'xlink:href': link, // should we keep using this?
        },
        null,
      ),
    ])
  },
})

const getExternalIcons = ({ url, deferred = true }: GetExternalIconOpts) => {
  if (!url || typeof window === 'undefined') return

  let promise: Promise<any>
  if (Array.isArray(url)) {
    promise = Promise.all(
      url.map((u) => {
        return generateScriptTag(u, deferred)
      }),
    )
  } else {
    promise = generateScriptTag(url, deferred)
  }

  return [ExternalIcon, promise] as [typeof ExternalIcon, Promise<any>]
}

function generateScriptTag(url: string, deferred: boolean) {
  const scriptTag = document.createElement('script')
  scriptTag.src = url
  scriptTag.async = deferred
  const state = new Promise((res, rej) => {
    scriptTag.onload = res
    scriptTag.onerror = rej
  })
  document.body.appendChild(scriptTag);
  return state
}

export default getExternalIcons
