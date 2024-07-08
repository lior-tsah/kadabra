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

interface NmapRun {
  args: string;
  scanner: string;
  start: string;
  startstr: string;
  version: string;
  xmloutputversion: string;
  debugging: Debugging;
  host: Host[];
  runstats: Runstats;
  scaninfo: Scaninfo;
  verbose: Verbose;
}

interface Debugging {
  level: string;
}

interface Host {
  endtime: string;
  starttime: string;
  address: Address;
  hostnames: any; // Assuming hostnames can be null or another type
  ports: Ports;
  status: Status;
  times: Times;
}

interface Address {
  addr: string;
  addrtype: string;
}

interface Ports {
  extraports: Extraports;
}

interface Extraports {
  count: string;
  state: string;
  extrareasons: ExtraReason[];
}

interface ExtraReason {
  count: string;
  reason: string;
}

interface Status {
  reason: string;
  reason_ttl: string;
  state: string;
}

interface Times {
  rttvar: string;
  srtt: string;
  to: string;
}

interface Runstats {
  finished: Finished;
  hosts: Hosts;
}

interface Finished {
  elapsed: string;
  exit: string;
  summary: string;
  time: string;
  timestr: string;
}

interface Hosts {
  down: string;
  total: string;
  up: string;
}

interface Scaninfo {
  numservices: string;
  protocol: string;
  services: string;
  type: string;
}

interface Verbose {
  level: string;
}

// Sample JSON data converted to TypeScript object
export const nmapRun: NmapRun = {
  args: "nmap -Pn -sT --scan-delay 1s -p 80,102,443,502,530,593,789,1089-1091,1911,1962,2222,2404,4000,4840,4843,4911,9600,19999,20000,20547,34962-34964,34980,44818,46823,46824,55000-55003 -oX tmpNmapOutput.tmp 172.16.21.0 172.16.21.175 172.16.21.199",
  scanner: "nmap",
  start: "1720441060",
  startstr: "Mon Jul  8 15:17:40 2024",
  version: "7.80",
  xmloutputversion: "1.04",
  debugging: {
    level: "0",
  },
  host: [
    {
      endtime: "1720441127",
      starttime: "1720441061",
      address: {
        addr: "172.16.21.0",
        addrtype: "ipv4",
      },
      hostnames: null,
      ports: {
        extraports: {
          count: "33",
          state: "filtered",
          extrareasons: [
            {
              count: "17",
              reason: "no-responses",
            },
            {
              count: "16",
              reason: "host-unreaches",
            },
          ],
        },
      },
      status: {
        reason: "user-set",
        reason_ttl: "0",
        state: "up",
      },
      times: {
        rttvar: "9574",
        srtt: "61548",
        to: "1000000",
      },
    },
    {
      endtime: "1720441127",
      starttime: "1720441061",
      address: {
        addr: "172.16.21.175",
        addrtype: "ipv4",
      },
      hostnames: null,
      ports: {
        extraports: {
          count: "33",
          state: "filtered",
          extrareasons: [
            {
              count: "17",
              reason: "no-responses",
            },
            {
              count: "16",
              reason: "host-unreaches",
            },
          ],
        },
      },
      status: {
        reason: "user-set",
        reason_ttl: "0",
        state: "up",
      },
      times: {
        rttvar: "9590",
        srtt: "61467",
        to: "1000000",
      },
    },
    {
      endtime: "1720441128",
      starttime: "1720441061",
      address: {
        addr: "172.16.21.199",
        addrtype: "ipv4",
      },
      hostnames: null,
      ports: {
        extraports: {
          count: "33",
          state: "filtered",
          extrareasons: [
            {
              count: "19",
              reason: "no-responses",
            },
            {
              count: "14",
              reason: "host-unreaches",
            },
          ],
        },
      },
      status: {
        reason: "user-set",
        reason_ttl: "0",
        state: "up",
      },
      times: {
        rttvar: "12844",
        srtt: "61611",
        to: "1000000",
      },
    },
  ],
  runstats: {
    finished: {
      elapsed: "68.20",
      exit: "success",
      summary:
        "Nmap done at Mon Jul  8 15:18:48 2024; 3 IP addresses (3 hosts up) scanned in 68.20 seconds",
      time: "1720441128",
      timestr: "Mon Jul  8 15:18:48 2024",
    },
    hosts: {
      down: "0",
      total: "3",
      up: "3",
    },
  },
  scaninfo: {
    numservices: "33",
    protocol: "tcp",
    services:
      "80,102,443,502,530,593,789,1089-1091,1911,1962,2222,2404,4000,4840,4843,4911,9600,19999-20000,20547,34962-34964,34980,44818,46823-46824,55000-55003",
    type: "connect",
  },
  verbose: {
    level: "0",
  },
};
