import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
// redux
import { uiSelectors } from '@redux/ui';
// style
import Style from './styled';

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  const isSidebarActive = useSelector(uiSelectors.getIsSidebarActive);

  return (
    <Style.Content isSidebarActive={isSidebarActive}>{children}</Style.Content>
  );
};

export default Content;
