export interface Bgp {
  name: string;
  url: string;
  font?: string;
}

let BGPS: Bgp[] = require('./svgs.json').map((raw) => ({
  name: raw.name,
  url: `url("data:image/svg+xml;base64,${raw.base64}")`,
  font: `bgp-${raw.font}`,
}));

BGPS.unshift({
  name: '',
  url: '',
});

let BGPOS = <Dict<Bgp>>{};
BGPS.forEach((bgp: Bgp) => {
  BGPOS[bgp.name] = bgp;
});

export { BGPS, BGPOS };
