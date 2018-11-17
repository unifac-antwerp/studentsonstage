import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import Button from '../Button'

const Wrap = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4em 1.6em 3.2em 1.6em;
  ${props => props.theme.shadows.shadow02};
  background-color: ${props => props.theme.palette.white};
  border-radius: 0.4em;
  width: 100%;
  margin-bottom: 1.6em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 32.5%;
    margin-bottom: 0;
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 4em;
  margin-bottom: 1.6em;
`

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 24px;
    height: 1px;
    background-color: ${props => props.theme.palette.neutral01};
    margin: 16px 0 16px;
  }
`

const Desc = styled.div`
  width: 100%;
  text-align: center;
  margin: 1.6em 0 3.2em 0;
`

const ButtonWrap = styled.div`
  margin-top: auto;
`

const Opportunity = ({
  title, icon, desc, button, ctaAction,
}) => (
  <Wrap>
    <IconWrap>
      <img src={icon} alt={`${title} icon`} />
    </IconWrap>
    <Title>{title}</Title>
    <Desc>{desc && RichText.render(desc)}</Desc>
    <ButtonWrap>
      <Button link={ctaAction} text={button} />
    </ButtonWrap>
  </Wrap>
)

export default Opportunity
