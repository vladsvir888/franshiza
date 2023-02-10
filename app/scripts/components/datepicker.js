import AirDatepicker from 'air-datepicker';

const initDatepicker = () => {
  document.querySelectorAll('.input-datepicker').forEach((input) => {
    new AirDatepicker(input, {
      selectedDates: input.value,
      onSelect({ datepicker }) {
        datepicker.hide();
      },
    });
  });
};

export default initDatepicker;
