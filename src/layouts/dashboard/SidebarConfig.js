// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:grid-fill')
  },
  {
    title: 'wallets',
    path: '/dashboard/wallets',
    icon: getIcon('cil:wallet')
  },
  {
    title: 'cards',
    path: '/dashboard/cards',
    icon: getIcon('bx:credit-card')
  },
  {
    title: 'forex',
    path: '/dashboard/forex',
    icon: getIcon('bi:currency-dollar')
  },
  {
    title: 'beneficiaries',
    path: '/dashboard/beneficiaries',
    icon: getIcon('eva:people-outline')
  },
  {
    title: 'perks',
    path: '/dashboard/perks',
    icon: getIcon('ci:tag-outline')
  }
];

export default sidebarConfig;
