import {ToastService} from './toast-types';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustand();
}
