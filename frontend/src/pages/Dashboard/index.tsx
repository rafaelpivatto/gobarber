import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atentimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/4967150?s=460&u=0ac8f402ff34172d9b1c5b1b5ce34da0f1a637c5&v=4"
                alt="Rafael Pivatto"
              />

              <strong>Rafael Pivatto</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/4967150?s=460&u=0ac8f402ff34172d9b1c5b1b5ce34da0f1a637c5&v=4"
                  alt="Rafael Pivatto"
                />

                <strong>Rafael Pivatto</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/4967150?s=460&u=0ac8f402ff34172d9b1c5b1b5ce34da0f1a637c5&v=4"
                  alt="Rafael Pivatto"
                />

                <strong>Rafael Pivatto</strong>
              </div>
            </Appointment>

            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/4967150?s=460&u=0ac8f402ff34172d9b1c5b1b5ce34da0f1a637c5&v=4"
                  alt="Rafael Pivatto"
                />

                <strong>Rafael Pivatto</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
