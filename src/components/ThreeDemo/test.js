function decodeLocation(e) {
  let t = e.lng || "";
  let n = e.lat || "";
  const a = (`${t}`).slice(-2);
  const o = (`${n}`).slice(-2);
  const r = parseInt((o + a).slice(1), 10);
  const i = Math.ceil(r / 250) % 2 ? 1 : -1;
  const d = r / 500 > 1 ? 1 : -1;
  const c = parseInt(`1${a}`, 10) / 3e3;
  const p = parseInt(`1${o}`, 10) / 3e3;
  t -= c * i;
  n -= p * d;
  return {
    lat: parseFloat(n).toFixed(5),
    lng: parseFloat(t).toFixed(5),
  };
}

var result = {
  "code": "1",
  "cip": "113.66.236.106",
  "lng": "113.3400059",
  "lat": "23.0483906",
  "confidence": 1,
};

console.log(decodeLocation(result));
