import './assets/css/styles.css';
import Container from './components/Containers/Container';
import Section from './components/Containers/Section';
import Header from './components/Containers/Header';
import Esfera from './components/Formas/Esfera';
import Box from './components/Containers/Box';
import Button from './components/Button/Button';

function App() {
  return (
    <Container>
      <Section className="banner-header">
        <Header/>
        <Esfera className="esfera-1"/>
        <Box className="box-principal">
          <h1>We build digital products for brands</h1>
          <Button className="button-title-banner" value="Let's Talk" />
        </Box>
      </Section>
      <Section className="banner-hello">
        <Esfera className="esfera-2"/>
        <Box className="box-hello">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          
        </Box>
      </Section>
    </Container>
  );
}

export default App;
