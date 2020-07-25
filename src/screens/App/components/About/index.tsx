/** @jsx jsx */
import {jsx} from '@emotion/core'

import Item from './components/Item'

import yourUsers from '../../../../assets/images/illustration-your-users.svg'
import growTogether from '../../../../assets/images/illustration-grow-together.svg'
import flowingConversation from '../../../../assets/images/illustration-flowing-conversation.svg'

const About = (): JSX.Element => {
  return (
    <div className="container" css={{padding: '100px 0 '}}>
      <Item
        image={growTogether}
        text="Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form."
        title="Grow Together"
      />

      <Item
        image={flowingConversation}
        text="You wouldn't paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow."
        title="Flowing Conversations"
        reverse
      />

      <Item
        image={yourUsers}
        text="It takes no time at all to integrate Huddle with your app's
        authentication solution. This means, once signed in to your app,
        your users can start chatting immediately."
        title="Your Users"
      />
    </div>
  )
}

export default About
