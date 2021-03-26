import * as React from 'react';
import styles from './VapaatTaivaratutReact.module.scss';
import { IVapaatTaivaratutReactProps } from './IVapaatTaivaratutReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import  VapaatTaiVaratut   from './VapaatTaiVaratut';

export default class VapaatTaivaratutReact extends React.Component<IVapaatTaivaratutReactProps, {}> {
  public render(): React.ReactElement<IVapaatTaivaratutReactProps> {
    return (
      <div className={ styles.vapaatTaivaratutReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
             
            <VapaatTaiVaratut />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
