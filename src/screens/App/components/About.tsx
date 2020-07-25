/** @jsx jsx */
import {jsx} from '@emotion/core'

import Card from '@app/components/Card'

import yourUsers from '../../../assets/images/illustration-your-users.svg'
import growTogether from '../../../assets/images/illustration-grow-together.svg'
import flowingConversation from '../../../assets/images/illustration-flowing-conversation.svg'

const About = (): JSX.Element => {
  return (
    <div className="container" css={{padding: '100px 0 '}}>
      <Card>
        <div css={{display: 'flex', alignItems: 'center'}}>
          <div css={{padding: '0 150px 0 100px'}}>
            <h2>Grow Together</h2>

            <p css={{color: '#9f9f9f'}}>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>

          <div>
            <img
              alt="Grow together"
              css={{maxWidth: '100%', minHeight: 300}}
              src={growTogether}
            />
          </div>
        </div>
      </Card>

      <Card>
        <div css={{display: 'flex', alignItems: 'center'}}>
          <div css={{padding: '0 150px 0 100px'}}>
            <img
              alt="Flowing conversations"
              css={{maxWidth: '100%', minHeight: 300}}
              src={flowingConversation}
            />
          </div>

          <div>
            <h2>Flowing Conversations</h2>

            <p css={{color: '#9f9f9f'}}>
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div css={{display: 'flex', alignItems: 'center'}}>
          <div css={{padding: '0 150px 0 100px'}}>
            <h2>Your Users</h2>

            <p css={{color: '#9f9f9f'}}>
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>

          <div>
            <img
              alt="Your users"
              css={{maxWidth: '100%', minHeight: 300}}
              src={yourUsers}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default About
