import * as React from 'react';
import {properties, stylable} from 'wix-react-tools';

import {Header} from './header';
import {Content} from './content';
import {List} from './demo/list/src/components/list';
import style from './app.st.css';

export const App: React.SFC = stylable(style)(properties(() => (
    <div>
        <Header message="Welcome to React with Stylable" />
        <div>
            <List />
        </div>
        <Content mainFile="src/index.tsx" />
    </div>
)));
