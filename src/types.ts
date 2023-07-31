export interface TemplateData {
    C12: number;
    C13: number;
    C14: number;
    NR12: number;
    NR13: number;
    NR14: number;
}

export interface CollectedDataNode {
    key: string;
    value: number;
    parent: string | null;
}

export interface CollectedData {
  data: CollectedDataNode[];
}
