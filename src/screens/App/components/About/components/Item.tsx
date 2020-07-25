/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from 'react'

import Card from '@app/components/Card'
import {mediaQuery} from '@app/helpers/constants'

export interface ItemProps {
  title: string
  text: string
  image: string
  reverse?: boolean
}

export const Item = (props: ItemProps): JSX.Element => {
  const imageComponent = (
    <img
      alt={props.title}
      css={{width: '100%', minWidth: 300, maxWidth: 500}}
      src={props.image}
    />
  )
  const contentComponent = (
    <React.Fragment>
      <h2>{props.title}</h2>

      <p css={{color: '#9f9f9f'}}>{props.text}</p>
    </React.Fragment>
  )

  return (
    <Card>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          [mediaQuery]: {
            flexDirection: 'column',
          },
        }}
      >
        <div
          css={{
            padding: '0 150px 0 100px',
            [mediaQuery]: props.reverse
              ? {padding: 50}
              : {
                  order: 2,
                  textAlign: 'center',
                  padding: '30px 40px 0',
                },
          }}
        >
          {props.reverse ? imageComponent : contentComponent}
        </div>

        <div
          css={{
            [mediaQuery]: props.reverse
              ? {
                  textAlign: 'center',
                  padding: '30px 40px 0',
                }
              : {
                  order: 1,
                  padding: 50,
                },
          }}
        >
          {props.reverse ? contentComponent : imageComponent}
        </div>
      </div>
    </Card>
  )
}

export default Item
