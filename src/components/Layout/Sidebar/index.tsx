import { Link, useLocation, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// constants
import config, { Colors } from '@constants/config';
import Routes from '@constants/routes';
// redux
import { uiSelectors, uiActions } from '@redux/ui';
// components
import { Heading3, Text } from '@components/Text';
import ToggleArrow from '@assets/toggle-arrow.svg';
import Flex from '@components/Flex';
import ProjectsIcon from '@assets/projects.svg';
import ClientsIcon from '@assets/clients.svg';
import SettingsIcon from '@assets/settings.svg';
import LogoutIcon from '@assets/logout.svg';
// style
import Style from './styled';

const pages = [
  {
    title: 'Projects',
    icon: ProjectsIcon,
    path: Routes.Projects,
  },
  {
    title: 'Clients',
    icon: ClientsIcon,
    path: Routes.Clients,
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    path: Routes.Settings,
  },
  {
    title: 'Logout',
    icon: LogoutIcon,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isActive = useSelector(uiSelectors.getIsSidebarActive);

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate(Routes.Login);
  };

  return (
    <Style.Sidebar isActive={isActive} gap={50} direction="column">
      <Link to={Routes.Settings}>
        <Flex gap={10} align="center">
          <Style.ProfilePic isActive={isActive} />

          <Style.ProfileTextContainer isActive={isActive} direction="column">
            <Heading3 size={config.text.heading2.size}>Andrei Bardita</Heading3>

            <Text color={Colors.LightGrey}>Client, Contractor</Text>
          </Style.ProfileTextContainer>
        </Flex>
      </Link>

      <Flex direction="column" gap={50}>
        {pages.map((page, index) => (
          <Flex
            onClick={() => (page.path ? navigate(page.path) : logout())}
            key={index}
            align="center"
            gap={10}
            style={{ cursor: 'pointer' }}
          >
            <Style.PageIcon
              isActive={isActive}
              src={page.icon}
              alt={`${page.title} icon`}
            />

            <Style.PageTitle
              isActive={isActive}
              color={page.title === 'Logout' ? Colors.Red : Colors.Black}
              weight={page.path === location.pathname ? 500 : 300}
            >
              {page.title}
            </Style.PageTitle>
          </Flex>
        ))}
      </Flex>

      <Style.ToggleArrow
        isActive={isActive}
        onClick={() => dispatch(uiActions.setSidebarActive(!isActive))}
        src={ToggleArrow}
        alt="toggle-arrow"
      />
    </Style.Sidebar>
  );
};

export default Sidebar;
