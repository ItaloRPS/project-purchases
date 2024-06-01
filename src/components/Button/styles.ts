import styled, { css, DefaultTheme } from 'styled-components';

export type ButtonColors = {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    theme:DefaultTheme & colors
}

export type colors = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
}
}

  const shadeColor = (color: string, percent: number) => {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);
  
    R = Math.round(R * (1 + percent));
    G = Math.round(G * (1 + percent));
    B = Math.round(B * (1 + percent));
  
    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;
  
    const RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
    const GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
    const BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);
  
    return `#${RR}${GG}${BB}`;
  };

  export const ButtonStyled = styled.button<ButtonColors>`
  ${({ theme, color }) => css`
    padding: 14px 20px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    background-color: ${theme.colors[color]};
    color: ${color === 'light' ? '#000' : '#fff'};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${shadeColor(theme.colors[color], -0.1)};
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  `}
`;