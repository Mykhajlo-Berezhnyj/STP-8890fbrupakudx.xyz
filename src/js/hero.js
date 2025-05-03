import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  Youtube: {
    autoplay: true,
    cc_load_policy: 1,
    modestbranding: true,
  },
  Toolbar: {
    display: [{ id: 'counter', position: 'center' }, 'close'],
  },
});
