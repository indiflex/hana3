console.log('aaaaaaa');

// DB Column: { id, name, addr };

// 정형화 된 타입과 다른 키들만 정의
const C1 = { id1: 'id', nm1: 'name', addr1: 'addr' };
const C2 = { id2: 'id', nm2: 'name' };
function getType(json) {
  return 'id1' in json ? C1 : C2;
}

const sampleC1 = { id1: 1, nm1: 'Hong', addr1: 'Seoul' };
const sampleC2 = { id2: 1, nm2: 'Hong', addr: 'Pusan' };

// 짬뽕이라면..
const samples = [sampleC1, sampleC2];

const data = samples.map(sample => {
  const type = getType(sample);
  const ret = {};
  for (let [k, v] of Object.entries(sample)) {
    ret[type[k] || k] = v;
  }
  return ret;
});
console.log('🚀  data:', data);
