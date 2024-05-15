'use client';

import { PropsWithChildren, useCallback, useState } from 'react';

import BurgerButton from '@/components/BaseLayout/Header/NavDrawer/BurgerButton';
import Drawer from '@/components/common/Drawer/Drawer';
import useNavigationChange from '@/hooks/useNavigationChange';
import CollapseList from '@/components/common/Collapse/CollapseList';
import Typography from '@/components/common/Typography/Typography';
import { TextTag } from '@/components/common/Typography/types';

export default function NavDrawer({ title, children }: {title: string} & PropsWithChildren) {
  const [visible, updateVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    updateVisible(!visible);
  }, [updateVisible, visible]);

  const closeDrawer = useCallback(() => {
    updateVisible(false);
  }, [updateVisible]);

  useNavigationChange(closeDrawer);

  const NavSide = () => {
    return (
      <div className="h-screen w-4/5 bg-white px-8 pb-6 pt-8">
        <div className="h-full overflow-y-auto">
          <CollapseList
            title={<Typography textTag={TextTag.Label}>{title}</Typography>}
            content={
              <div className="menu flex flex-col p-0">
                {children}
              </div>
            }
          />
        </div>
      </div>
    );
  };

  return (
    <Drawer
      role="navigation"
      className="sm:drawer-open"
      sideClassName="fixed z-[51]"
      contentClassName="w-full flex-1"
      open={visible}
      onClickOverlay={toggleVisible}
      side={<NavSide />}
    >
      <BurgerButton onClick={toggleVisible} />
    </Drawer>
  );
}
