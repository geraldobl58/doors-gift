import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Top = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 25px;
    background-color: ${theme.colors.primary};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    width: 90px;
    height: 60px;
    background-color: ${theme.colors.secondary};
  `}
`

export const LineOne = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 15px;
    height: 85px;
    background: ${theme.colors.red};
  `}
`

export const LineTwo = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 40px;
    width: 90px;
    height: 15px;
    background: ${theme.colors.red};
  `}
`
