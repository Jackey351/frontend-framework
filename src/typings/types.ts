import { Dispatch, SetStateAction } from 'react';

export interface States {
  folders: any;
  setFolders: Dispatch<SetStateAction<any>>;
}
