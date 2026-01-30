export interface PMLMemory {
  project: {
    name: string;
    description?: string;
    language: string;
  };
  stack: {
    framework?: string;
    styling?: string;
    backend?: string;
    ui?: string;
  };
  rules: string[];
  folders: Record<string, string>;
  decisions: {
    id: string;
    decision: string;
    reason?: string;
    date: string;
  }[];
}
