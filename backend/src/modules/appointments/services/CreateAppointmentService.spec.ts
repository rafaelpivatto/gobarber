import AppError from '@shared/errors/AppError';
import FakeAppointmentsRespository from '../repositories/fakes/FakeAppointmentsRespository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRespository: FakeAppointmentsRespository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRespository = new FakeAppointmentsRespository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRespository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123123',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
