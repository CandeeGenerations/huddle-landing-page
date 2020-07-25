/** @jsx jsx */
import {jsx} from '@emotion/core'

import logo from '../../../assets/images/logo.svg'

const Footer = (): JSX.Element => {
  const linkListStyle = {listStyleType: 'none', padding: 0}
  const linkItemStyle = {marginBottom: 20, cursor: 'pointer'}

  return (
    <div
      css={{
        fontSize: 16,
        paddingTop: 250,
        marginTop: -175,
        color: '#f2ffff',
        backgroundColor: '#00252e',
      }}
    >
      <div className="container">
        <img
          alt="Huddle"
          css={{filter: 'brightness(0) invert(1)'}}
          src={logo}
        />

        <div css={{display: 'flex', marginTop: 20}}>
          <div css={{flexBasis: '550px'}}>
            <ul className="fa-ul">
              <li css={{marginBottom: 20}}>
                <i className="fa-li fa fa-map-marker" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>

              <li css={{marginBottom: 20}}>
                <i className="fa-li fa fa-phone" />
                +1-543-123-4567
              </li>

              <li>
                <i className="fa-li fa fa-envelope" />
                example@huddle.com
              </li>
            </ul>
          </div>

          <div css={{flexGrow: 1}}>
            <ul css={linkListStyle}>
              <li css={linkItemStyle}>About Us</li>

              <li css={linkItemStyle}>What We Do</li>

              <li css={linkItemStyle}>FAQ</li>
            </ul>
          </div>

          <div css={{flexGrow: 1}}>
            <ul css={linkListStyle}>
              <li css={linkItemStyle}>Career</li>
              <li css={linkItemStyle}>Blog</li>
              <li css={linkItemStyle}>Contact Us</li>
            </ul>
          </div>

          <div css={{flexGrow: 1, paddingTop: 15}}>
            <span className="fa-stack" css={{cursor: 'pointer'}}>
              <i className="fa fa-circle-thin fa-stack-2x" />
              <i className="fa fa-facebook fa-stack-1x fa-inverse" />
            </span>
            &nbsp;&nbsp;
            <span className="fa-stack" css={{cursor: 'pointer'}}>
              <i className="fa fa-circle-thin fa-stack-2x" />
              <i className="fa fa-twitter fa-stack-1x fa-inverse" />
            </span>
            &nbsp;&nbsp;
            <span className="fa-stack" css={{cursor: 'pointer'}}>
              <i className="fa fa-circle-thin fa-stack-2x" />
              <i className="fa fa-instagram fa-stack-1x fa-inverse" />
            </span>
          </div>
        </div>

        <div className="right" css={{paddingBottom: 40}}>
          <small>&copy; Copyright 2018 Huddle. All rights reserved.</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
