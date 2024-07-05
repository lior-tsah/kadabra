export interface Task {
  ip_address: string;
  interface: string;
  netmask: string;
  broadcast: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface BoardData {
  tasks: { [key: string]: Task };
  columns: { [key: string]: Column };
  columnOrder: string[];
}
