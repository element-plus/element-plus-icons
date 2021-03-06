import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Picture = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 160v704h704V160H160zm-32-64h768a32 32 0 0132 32v768a32 32 0 01-32 32H128a32 32 0 01-32-32V128a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 01134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0044.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 01-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 00-44.8 5.952L185.408 876.992z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Picture.displayName = 'ElIconPicture'

export default Picture
