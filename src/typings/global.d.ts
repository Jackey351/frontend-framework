declare global {
  import { Buffer as NodeBuffer } from 'buffer';

  const Buffer: NodeBuffer;

  interface Window {
    Buffer: NodeBuffer;
  }
}

interface Window {}
