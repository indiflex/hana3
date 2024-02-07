export const telfmt = telstr => {
  const len = telstr?.length;
  if (len <= 8)
    return `${telstr.substring(0, len - 4)}-${telstr.substring(len - 4)}`;

  const a = telstr.startsWith('02') ? 2 : len === 12 ? 4 : 3;
  const b = len - 4 - a;

  const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${4}})`);
  return telstr.replace(regex, '$1-$2-$3');
};

const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);

// 'lLmMnNrR013678';
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
];

export const isEndJaum = str => {
  const s = str.charCodeAt(str.length - 1);

  return (
    JAUM_ALPHA_NUMS.includes(s) || (s >= ㄱ && s <= ㅎ) || (s - 가) % 28 > 0
  );
};

const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하힣';
export const searchByInitialSound = (data, initSounds) => {
  const regexps = [...initSounds].map(c => {
    const idx = ㄱㄴㄷ.indexOf(c);
    if (idx === -1) return c;
    const S = 가나다.at(idx);
    const endCode = 가나다.at(idx + 1).charCodeAt(0);
    const E = String.fromCharCode(c === 'ㅎ' ? endCode : endCode - 1);

    // @ToDo ㅎ 처리!
    return `[${c}${S}-${E}]`;
  });

  const regex = new RegExp(regexps.join(''));
  return data.filter(d => regex.test(d));
};
