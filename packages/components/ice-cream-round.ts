import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const IceCreamRound = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M308.352 489.344l226.304 226.304a32 32 0 0045.248 0L783.552 512A192 192 0 10512 240.448L308.352 444.16a32 32 0 000 45.248zm135.744 226.304L308.352 851.392a96 96 0 01-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 010-135.808L466.752 195.2A256 256 0 01828.8 557.248L625.152 760.96a96 96 0 01-135.808 0l-45.248-45.248zM398.848 670.4L353.6 625.152 217.856 760.896a32 32 0 0045.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 010 45.248L466.624 512a32 32 0 11-45.184-45.248l180.992-181.056a32 32 0 0145.248 0zm90.496 90.496a32 32 0 010 45.248L557.248 602.496A32 32 0 11512 557.248l180.992-180.992a32 32 0 0145.312 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

IceCreamRound.displayName = 'ElIconIceCreamRound'

export default IceCreamRound
