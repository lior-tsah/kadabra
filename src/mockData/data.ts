export interface NetworkInterface {
  interface: string;
  ip_address: string;
  netmask: string;
  broadcast: string;
}

export interface IpInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  timezone: string;
  readme: string;
}
export interface Agent {
  name: string;
  ip: string;
  type: string;
}

export interface PassiveDiscoverData {
  network_interfaces: NetworkInterface[];
  ip_info: IpInfo;
  agents: Agent[];
}

// Example usage
export const mockData: PassiveDiscoverData = {
  network_interfaces: [
    {
      interface: "enp0s31f6:",
      ip_address: "172.16.21.134",
      netmask: "255.255.255.0",
      broadcast: "172.16.21.255",
    },
  ],
  ip_info: {
    ip: "46.19.85.230",
    city: "Bnei Brak",
    region: "Tel Aviv",
    country: "IL",
    loc: "32.0807,34.8338",
    org: "AS16116 Pelephone Communications Ltd.",
    timezone: "Asia/Jerusalem",
    readme: "https://ipinfo.io/missingauth",
  },
  agents: [
    { name: "admin", ip: "77.127.184.205", type: "---" },
    { name: "HMI", ip: "82.166.104.76", type: ">" },
    { name: "Red20", ip: "46.19.85.230", type: ">" },
    { name: "Red05", ip: "46.19.85.230", type: ">" },
    { name: "Red04", ip: "46.19.85.230", type: ">" },
    { name: "Red06", ip: "46.19.85.230", type: ">" },
    { name: "Red03", ip: "46.19.85.230", type: ">" },
    { name: "Red09", ip: "46.19.85.230", type: ">" },
    { name: "Red16", ip: "46.19.85.230", type: ">" },
    { name: "Red14", ip: "46.19.85.230", type: ">" },
    { name: "Red02", ip: "46.19.85.230", type: ">" },
    { name: "Red01", ip: "46.19.85.230", type: ">" },
    { name: "Red18", ip: "46.19.85.230", type: ">" },
    { name: "Red19", ip: "46.19.85.230", type: ">" },
    { name: "Red13", ip: "46.19.85.230", type: ">" },
    { name: "Itay13", ip: "109.186.143.124", type: "---" },
    { name: "Red11", ip: "46.19.85.230", type: ">" },
    { name: "Nimrod11", ip: "82.166.104.76", type: "---" },
    { name: "U11", ip: "77.127.184.205", type: "---" },
    { name: "Red12", ip: "46.19.85.230", type: ">" },
    { name: "U12", ip: "46.19.85.239", type: "---" },
    { name: "Red08", ip: "46.19.85.230", type: ">" },
    { name: "Red07", ip: "46.19.85.230", type: ">" },
    { name: "Red15", ip: "46.19.85.230", type: ">" },
    { name: "Red10", ip: "46.19.85.230", type: ">" },
  ],
};
