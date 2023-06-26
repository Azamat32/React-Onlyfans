import ru from '@assets/images/flugs/ru.png';
import en from '@assets/images/flugs/en.png';

export type langOption = {
  readonly value: string;
  readonly label: string;
  readonly img: any;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
};

export const langOptions: readonly langOption[] = [
  {value: 'en', img: en, label: 'English', isFixed: true},
  {value: 'ru', img: ru, label: 'Russian'},
];
