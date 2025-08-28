import { Container } from '../../Container/Container';
import { Logo } from '../../Logo/Logo';
import { Menu } from '../../Menu/Menu';
import { Footer } from '../../Footer/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
