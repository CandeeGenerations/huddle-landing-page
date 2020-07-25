/** @jsx jsx */
import {jsx} from '@emotion/core'

import logo from '../../../assets/images/logo.svg'
import mockups from '../../../assets/images/illustration-mockups.svg'
import heroBackgroundDesktop from '../../../assets/images/bg-hero-desktop.svg'

import Button, {ButtonColor} from '@app/components/Button'

const Header = (): JSX.Element => {
  return (
    <div css={{background: `url(${heroBackgroundDesktop}), #edfbfe`}}>
      <div className="container" css={{paddingBottom: 50}}>
        <div
          css={{
            display: 'flex',
            padding: '50px 0',
            alignItems: 'stretch',
          }}
        >
          <div css={{flexGrow: 1}}>
            <img alt="Huddle" src={logo} />
          </div>

          <div className="right" css={{flexGrow: 1}}>
            <Button color={ButtonColor.White} text="Try It Free" />
          </div>
        </div>

        <div css={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
          <div css={{paddingRight: 50}}>
            <h1>Build The Community Your Fans Will Love</h1>

            <p css={{margin: '10px 0 50px'}}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button text="Get Started For Free" />
          </div>

          <div>
            <img
              alt="Huddle Mockups"
              css={{width: 2000, maxWidth: '100%'}}
              src={mockups}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
