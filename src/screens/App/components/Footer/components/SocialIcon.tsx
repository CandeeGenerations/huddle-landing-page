/** @jsx jsx */
import {jsx} from '@emotion/core'

export interface SocialIconProps {
  type: 'facebook' | 'twitter' | 'instagram'
}

const SocialIcon = (props: SocialIconProps): JSX.Element => {
  return (
    <span className="fa-stack" css={{cursor: 'pointer'}}>
      <i className="fa fa-circle-thin fa-stack-2x" />
      <i className={`fa fa-${props.type} fa-stack-1x fa-inverse`} />
    </span>
  )
}

export default SocialIcon
