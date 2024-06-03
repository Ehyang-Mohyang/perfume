import { atom, selector } from 'recoil';
import { getCookie } from '../util/getCookie';
import axiosInstance from '../api/axiosConfig';
import {recoilPersist} from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface Perfume {
  id: number;
  name: string;
  ename: string;
  brand: string;
  imageURL: string;
  content?: string;
}

export interface MatchedPerfumes {
  mainPerfume: Perfume;
  subPerfumes: Perfume[];
}
export const selectedItemsState = atom<Map<string, string[]>>({
  key: 'selectedItemsState',
  default: new Map<string, string[]>(),
});

export const hashtagListState = selector({
  key: 'hashtagListState',
  get: ({ get }) => {
    const selectedItems = get(selectedItemsState);
    return Array.from(selectedItems.values());
  },
});

export const matchedPerfumesState = atom<MatchedPerfumes>({
  key: 'matchedPerfumesState',
  default: {
    mainPerfume: {
      id: 0,
      name: '',
      ename: '',
      brand: '',
      imageURL: '',
      content: '',
    },
    subPerfumes: [],
  },
  effects_UNSTABLE: [persistAtom],
});

const getNaverTokenFromCookie = () => {
  const naverToken = getCookie('JSESSIONID');
  return naverToken ? naverToken : null;
};

export const naverTokenState = atom({
  key: 'naverTokenState',
  default: getNaverTokenFromCookie(),
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false,
});

// 로그인 상태 체크 함수
export const checkLoginStatus = async () => {
  try {
    const response = await axiosInstance.get('/api/login/check');
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
