import { Container } from '../../Container/Container';
import { CountDown } from '../../CountDown/CountDown';
import { MainForm } from '../../MainForm/MainForm';
import { MainTemplate } from '../../Templates/MainTemplate/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown/>
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
