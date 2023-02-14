import AirDatepicker from 'air-datepicker';
import IMask from 'imask';

const initDatepicker = () => {
  document.querySelectorAll('.input-datepicker').forEach((input) => {
    const calendar = new AirDatepicker(input, {
      selectedDates: input.value,
      onSelect({ datepicker }) {
        datepicker.hide();
      },
    });

    IMask(
      input, {
        mask: Date,
        lazy: false,
      },
    );

    input.addEventListener('change', () => {
      const { value } = input;

      const arr = value.split('.');

      const newArr = [arr[2], arr[1], arr[0]];

      const str = newArr.join('-');

      calendar.selectDate(str);
    });
  });
};

export default initDatepicker;
