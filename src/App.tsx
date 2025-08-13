import { Heading } from './components/Heading/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import { CountDown } from './components/CountDown/CountDown';
import { DefaultInput } from './components/DafaultInput/DeafultInput';
import { Cycles } from './components/Cycles/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
           <DefaultInput labelText='task' id="inputTask" type='text' placeholder='Digite'/>
          </div>

          <div className='formRow'>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>Enviar </button>
          </div>
        </form>
      </Container>
    </>
  );
}
