import React from 'react'
import LazyHTML from 'components/lazy-html'

const dataurl = `${PUBLIC_PATH}src/components/about-page/html/`

const Procurement = () => <LazyHTML url={`${dataurl}compliance/how-to-procure.html`} />

export default Procurement
