import {Store} from 'pullstate';

interface store {
  theme: string;
}

export const store = new Store<store>({
  theme: 'light',
});

export const changeTheme = (theme: string) => {
  store.update(state => {
    state.theme = theme;
  });
};
