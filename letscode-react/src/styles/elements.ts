import styled from "styled-components";
import { colors } from "./globals";

type CardProps = {
  newCard: boolean;
};

type BadgeProps = {
  votes: number;
};

export const Header = styled.header`
  background-color: ${colors.primary};
  color: #fff;
`;

export const Footer = styled.footer`
  border-top: 2px solid ${colors.primary};
`;

export const Container = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 49%);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

const newStyle = `{
  border-color: hsl(${colors.focus.h}, ${colors.focus.s}, ${colors.focus.l});
  box-shadow: 0 0 0 3px
    hsla(
      ${colors.focus.h},
      ${colors.focus.s},
      calc(${colors.focus.l} + 40%),
      0.8
    );
  outline: 3px solid transparent;
}`;

export const Card = styled.article<CardProps>`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  h3,
  h4 {
    color: ${colors.primary};
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    em {
      padding: 0.25em;
      background-color: #eddbff;
      border-radius: 4px;
    }
  }
  p,
  ul {
    color: #757575;
    line-height: 1.5;
  }
  ${({ newCard }) => newCard && newStyle}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: ${colors.primary} 1px solid;
    border-radius: 4px;
    padding: 2px;
  }
`;

export const Badge = styled.span<BadgeProps>`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${({ votes }) =>
    votes > 9 ? "rgba(0, 100, 0, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export const ShowButton = styled.button`
  background-color: ${colors.primary};
  svg {
    height: 20px;
    width: 20px;
  }
`;
