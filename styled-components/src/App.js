import React from 'react';
import { Title, TitleSmall } from './styles';
const App = () => (
  <div>
    <Title fontSize={20}>
      Ola Mundo
      <span>Texto Menor</span>
    </Title>
    <TitleSmall>Menor</TitleSmall>
  </div>
);


export default App;
