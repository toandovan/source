import {FaRegCalendarAlt} from 'react-icons/fa';
import {FiMap, FiUsers} from 'react-icons/fi';
import {
  RiShieldUserLine,
} from 'react-icons/ri';
import {BiCarousel, BiErrorAlt} from 'react-icons/bi';
import {
  BsBriefcase,
  BsQuestionDiamond,
} from 'react-icons/bs';
import {DiHtml5Multimedia} from 'react-icons/di';
import {
  MdOutlineContactSupport,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import {AiOutlineUnorderedList} from 'react-icons/ai';

const routesConfig = [
  {
    id: 'Rent',
    title: 'Rent',
    messageId: 'crema.rent',
    type: 'group',
    children: [
    ],
  },
  {
    id: 'Buy',
    title: 'Buy',
    messageId: 'crema.buy',
    type: 'group',
    children: [
    ],
  },
  {
    id: 'Sell',
    title: 'Sell',
    messageId: 'crema.sell',
    type: 'group',
    children: [],
  },
  {
    id: 'Manage-Property',
    title: 'Manage Property',
    messageId: 'crema.properties',
    type: 'group',
    children: [
      {
        id: 'google-map',
        title: 'Google Map',
        messageId: 'sidebar.googleMap',
        type: 'item',
        icon: <FiMap />,
        url: '/third-party/google-map',
      },
      {
        id: 'recharts',
        title: 'Recharts',
        messageId: 'sidebar.recharts',
        type: 'collapse',
        icon: 'bar_chart',
        children: [
          {
            id: 'area',
            title: 'Area Chart',
            messageId: 'sidebar.recharts.areaChart',
            type: 'item',
            url: '/recharts/area',
          },
          {
            id: 'bar',
            title: 'Bar Chart',
            messageId: 'sidebar.recharts.barChart',
            type: 'item',
            url: '/recharts/bar',
          },
          {
            id: 'composed',
            title: 'Composed Chart',
            messageId: 'sidebar.recharts.composedChart',
            type: 'item',
            url: '/recharts/composed',
          },
          {
            id: 'line',
            title: 'Line Chart',
            messageId: 'sidebar.recharts.lineChart',
            type: 'item',
            url: '/recharts/line',
          },
          {
            id: 'pie',
            title: 'Pie Chart',
            messageId: 'sidebar.recharts.pieChart',
            type: 'item',
            url: '/recharts/pie',
          },
          {
            id: 'radar',
            title: 'Radar Chart',
            messageId: 'sidebar.recharts.radarChart',
            type: 'item',
            url: '/recharts/radar',
          },
          {
            id: 'radial',
            title: 'Radial Chart',
            messageId: 'sidebar.recharts.radialChart',
            type: 'item',
            url: '/recharts/radial',
          },
          {
            id: 'scatter',
            title: 'Scatter Chart',
            messageId: 'sidebar.recharts.scatterChart',
            type: 'item',
            url: '/recharts/scatter',
          },
          {
            id: 'funnel',
            title: 'Funnel Chart',
            messageId: 'sidebar.recharts.funnelChart',
            type: 'item',
            url: '/recharts/funnel',
          },
          {
            id: 'treemap',
            title: 'Treemap Chart',
            messageId: 'sidebar.recharts.treeChart',
            type: 'item',
            url: '/recharts/treemap',
          },
        ],
      },
      {
        id: 'calendar',
        title: 'Big Calendar',
        messageId: 'sidebar.bigCalender',
        icon: <FaRegCalendarAlt />,
        type: 'item',
        url: '/third-party/calendar',
      },
      {
        id: 'slider',
        title: 'React Slick',
        messageId: 'sidebar.reactSlick',
        icon: <BiCarousel />,
        type: 'item',
        url: '/third-party/slider',
      },
      {
        id: 'react-color',
        title: 'React Color',
        messageId: 'sidebar.reactColor',
        type: 'item',
        icon: 'invert_colors',
        url: '/third-party/react-color',
      },
      {
        id: 'react-dropzone',
        title: 'React Dropzone',
        messageId: 'sidebar.reactDropzone',
        type: 'item',
        icon: 'attach_file',
        url: '/third-party/react-dropzone',
      },
      {
        id: 'react-player',
        title: 'Player',
        messageId: 'sidebar.player',
        type: 'item',
        icon: <DiHtml5Multimedia />,
        url: '/third-party/react-player',
      },
      {
        id: 'timeline',
        title: 'Time Line',
        messageId: 'sidebar.pages.timeLine',
        type: 'item',
        icon: 'timeline',
        url: '/third-party/time-line',
      },
    ],
  },
  {
    id: 'Resources',
    title: 'Resources',
    messageId: 'crema.resource',
    type: 'group',
    children: [
      {
        id: 'account',
        title: 'Account',
        messageId: 'sidebar.pages.extraPages.account',
        type: 'item',
        icon: <MdOutlineManageAccounts />,
        url: '/my-profile',
      },
      {
        id: 'about-us',
        title: 'About Us',
        messageId: 'sidebar.pages.extraPages.aboutUs',
        type: 'item',
        icon: <FiUsers />,
        url: '/extra-pages/about-us',
      },
      {
        id: 'contact-us',
        title: 'Contact Us',
        messageId: 'sidebar.pages.extraPages.contactUs',
        type: 'item',
        icon: <MdOutlineContactSupport />,
        url: '/extra-pages/contact-us',
      },
      {
        id: 'portfolio',
        title: 'Portfolio',
        messageId: 'sidebar.pages.extraPages.portfolio',
        type: 'item',
        icon: <BsBriefcase />,
        url: '/extra-pages/portfolio',
      },
      {
        id: 'faq',
        title: 'FAQ',
        messageId: 'sidebar.pages.extraPages.faq',
        type: 'item',
        icon: <BsQuestionDiamond />,
        url: '/extra-pages/faq',
      },
      {
        id: 'pricing',
        title: 'Pricing',
        messageId: 'sidebar.pages.extraPages.pricing',
        type: 'item',
        icon: 'attach_money',
        url: '/extra-pages/pricing',
      },
      {
        id: 'user',
        title: 'User Pages',
        messageId: 'sidebar.pages.userPages',
        type: 'collapse',
        icon: <RiShieldUserLine />,
        children: [
          {
            id: 'sign-in-1',
            title: 'SignIn-1',
            messageId: 'sidebar.pages.userPages.signIn1',
            type: 'item',
            url: '/user/sign-in-1',
          },
          {
            id: 'sign-in-2',
            title: 'SignIn-2',
            messageId: 'sidebar.pages.userPages.signIn2',
            type: 'item',
            url: '/user/sign-in-2',
          },
          {
            id: 'sign-up-1',
            title: 'SignUp-1',
            messageId: 'sidebar.pages.userPages.signUp1',
            type: 'item',
            url: '/user/sign-up-1',
          },
          {
            id: 'sign-up-2',
            title: 'SignUp-2',
            messageId: 'sidebar.pages.userPages.signUp2',
            type: 'item',
            url: '/user/sign-up-2',
          },
          {
            id: 'forgot-password-1',
            title: 'Forgot Password-1',
            messageId: 'sidebar.pages.userPages.forgetPassword1',
            type: 'item',
            url: '/user/forgot-password-1',
          },
          {
            id: 'forgot-password-2',
            title: 'Forgot Password-2',
            messageId: 'sidebar.pages.userPages.forgetPassword2',
            type: 'item',
            url: '/user/forgot-password-2',
          },
          {
            id: 'reset-password-1',
            title: 'Reset Password-1',
            messageId: 'sidebar.pages.userPages.resetPassword1',
            type: 'item',
            url: '/user/reset-password-1',
          },
          {
            id: 'reset-password-2',
            title: 'Reset Password-2',
            messageId: 'sidebar.pages.userPages.resetPassword2',
            type: 'item',
            url: '/user/reset-password-2',
          },
          {
            id: 'lock-1',
            title: 'Lock Screen-1',
            messageId: 'sidebar.pages.userPages.lockScreen1',
            type: 'item',
            url: '/user/lock-1',
          },
          {
            id: 'lock-2',
            title: 'Lock Screen-2',
            messageId: 'sidebar.pages.userPages.lockScreen2',
            type: 'item',
            url: '/user/lock-2',
          },
        ],
      },
      {
        id: 'list-type',
        title: 'User List',
        messageId: 'sidebar.pages.userList',
        type: 'collapse',
        icon: <AiOutlineUnorderedList />,
        children: [
          {
            id: 'morden',
            title: 'Modern',
            messageId: 'sidebar.pages.userList.modern',
            type: 'item',
            url: '/list-type/morden',
          },
          {
            id: 'standard',
            title: 'Standard',
            messageId: 'sidebar.pages.userList.standard',
            type: 'item',
            url: '/list-type/standard',
          },
          {
            id: 'flat',
            title: 'Flat',
            messageId: 'sidebar.pages.userList.flat',
            type: 'item',
            url: '/list-type/flat',
          },
        ],
      },
      {
        id: 'error-pages',
        title: 'Error Pages',
        messageId: 'sidebar.pages.errorPages',
        type: 'collapse',
        icon: <BiErrorAlt />,
        children: [
          {
            id: 'error-401',
            title: '402',
            messageId: 'sidebar.pages.errorPages.401',
            type: 'item',
            url: '/error-pages/error-401',
          },
          {
            id: 'error-403',
            title: '403',
            messageId: 'sidebar.pages.errorPages.403',
            type: 'item',
            url: '/error-pages/error-403',
          },
          {
            id: 'error-404',
            title: '404',
            messageId: 'sidebar.pages.errorPages.404',
            type: 'item',
            url: '/error-pages/error-404',
          },
          {
            id: 'error-500',
            title: '500',
            messageId: 'sidebar.pages.errorPages.500',
            type: 'item',
            url: '/error-pages/error-500',
          },
          {
            id: 'error-503',
            title: '503',
            messageId: 'sidebar.pages.errorPages.503',
            type: 'item',
            url: '/error-pages/error-503',
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            messageId: 'sidebar.pages.errorPages.maintenance',
            type: 'item',
            url: '/error-pages/maintenance',
          },
          {
            id: 'coming-soon',
            title: 'Coming Soon',
            messageId: 'sidebar.pages.errorPages.comingSoon',
            type: 'item',
            url: '/error-pages/coming-soon',
          },
        ],
      },
    ],
  },
];
export default routesConfig;
