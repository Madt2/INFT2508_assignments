import {Store} from 'pullstate';
import {ReactElement} from 'react';
import {MainPage} from './pages/MainPage';

interface store {
  page: ReactElement;
  hamburgerMenu: boolean;
}

export const store = new Store<store>({
  page: MainPage(),
  hamburgerMenu: false,
});

export const ChangePage = (page: ReactElement) => {
  store.update(state => {
    state.page = page;
    state.hamburgerMenu = false;
  });
};

export const ToggleHamburgerMenu = () => {
  store.update(state => {
    state.hamburgerMenu = !state.hamburgerMenu;
  });
};
