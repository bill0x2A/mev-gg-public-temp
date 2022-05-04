import * as React from 'react';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import {
    Layout,
} from '../components/library/';

const SampleBotCode = () => {
    const code = `() => 'This is a test!'`;
    return <Layout title={'Sample MEV Bot'}>
        <CodeBlock
            theme={dracula}
            showLineNumbers
            codeBlock
            language={'typescript'}
            text={code}/>
    </Layout>
};

export default SampleBotCode;
