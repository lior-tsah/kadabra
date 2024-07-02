import { IpInfo } from "./data";
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

export interface PassiveDiscoverData {
  network_interfaces: NetworkInterface[];
  ip_info: IpInfo;
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
};
