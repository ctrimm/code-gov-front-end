import React from 'react'

import LazyHTML from 'components/lazy-html'

const dataurl = `${PUBLIC_PATH  }src/components/featured-projects/html/`

const OverviewIntroduction = () => <LazyHTML url={`${dataurl}overview/introduction.html`}/>

export default OverviewIntroduction