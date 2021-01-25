
// import allCodeStyle from './register_all_style'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import md from '../../README.md'
import CodeBlock from './CodeBlock'

// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
// import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'

// console.log(allCodeStyle)

// const CodeBlockList = () => {
//   return Object.entries(allCodeStyle).map(([name, value]) => {
//     return (
//       <div key={name} className='wrapper'>
//         <div className='title'>{name}</div>
//         <SyntaxHighlighter
//           style={value}
//           language='jsx'
//           children={apiMd}
//         />
//       </div>
//     )
//   })
// }

function List() {
  console.log('List')

  return (
    <div className='container_wrapper'>

      <ReactMarkdown
        plugins={[gfm]}
        escapeHtml={false}
        source={md}
        renderers={{
          code: CodeBlock,
        }}
      >
      </ReactMarkdown>

      {/* <CodeBlockList></CodeBlockList> */}
    </div>
  )
}

export default List
