import { SaveIcon } from 'lucide-react';
import { Container } from '../../Container/Container';
import { DefaultInput } from '../../DafaultInput/DeafultInput';
import { DefaultButton } from '../../DefaultButton/DefaultButton';
import { Heading } from '../../Heading/Heading';
import { MainTemplate } from '../../Templates/MainTemplate/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../../adapters/showMessage';
import { TaskActionTypes } from '../../../contexts/TaskContext/taskAction';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    document.title = 'Configurações - Timer Pomodoro';
  });

  showMessage.dismiss();

  const formError: any = [];

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formError.push('Digite apenas números para TODOS os campos');
    }

    if (workTime < 1 || workTime > 99) {
      formError.push('Digite valores entre 1 e 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formError.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (shortBreakTime < 1 || shortBreakTime > 60) {
      formError.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formError.length > 0) {
      formError.forEach((error:any) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.sucess('Configurações Salvas!');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e longo.
        </p>
      </Container>

      <Container>
        <form action='' className='form' onSubmit={handleSaveSettings}>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso Curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso Longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
