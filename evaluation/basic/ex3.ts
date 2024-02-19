interface Naver {
  userid: number;
  username: string;
  email: string;
}

interface Kakao {
  userid: number;
  userName: string;
  kakaotalk: string;
  email: string;
}

/* 방법2 - partial 사용
interface SnsUser extends Partial<Naver>, Partial<Kakao>{
 */
interface SnsUser {
  /* 방법3 - 인덱스 시그니처 사용 */
  [key: string]: string | number;

  /* 방법1 - 선택적 프로퍼티 사용
    userid: number;
    username?: string;
    userName?: string;
    kakaotalk?: string;
    */

  email: string;
}

const naverUser: SnsUser = {
  userid: 1,
  username: 'HH',
  email: 'abc@naver.com',
};
const kakaoUser: SnsUser = {
  userid: 1,
  userName: 'HH',
  kakaotalk: 'HH',
  email: 'abc@hanmail.net',
};
