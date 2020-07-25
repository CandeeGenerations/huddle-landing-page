/** @jsx jsx */
import {jsx} from '@emotion/core'

import Card from '@app/components/Card'
import Button from '@app/components/Button'
import {mediaQuery} from '@app/helpers/constants'

const Cta = (): JSX.Element => {
  return (
    <div
      className="container"
      css={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <Card>
        <div
          className="center"
          css={{
            padding: '20px 150px',
            [mediaQuery]: {
              padding: 20,
            },
          }}
        >
          <h1>Ready To Build Your Community?</h1>

          <Button text="Get Started For Free" large />
        </div>
      </Card>
    </div>
  )
}

export default Cta
