/** @jsx jsx */
import {jsx} from '@emotion/core'

export interface CardProps {
  children: React.ReactNode
}

const Card = (props: CardProps): JSX.Element => {
  return (
    <div
      css={{
        borderRadius: 20,
        marginBottom: 50,
        padding: '40px 20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      {props.children}
    </div>
  )
}

export default Card
