import React, { PureComponent } from 'react'
// import allCodeStyle from './register_all_style'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

// 设置高亮样式
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 设置高亮的语言
// import { jsx, javascript } from "react-syntax-highlighter/dist/esm/languages/prism";

class CodeBlock extends PureComponent {
  // componentWillMount() {
  //   // 注册要高亮的语法，
  //   // 注意：如果不设置打包后供第三方使用是不起作用的
  //   SyntaxHighlighter.registerLanguage("jsx", jsx);
  //   SyntaxHighlighter.registerLanguage("javascript", javascript);
  // }

  render() {
    const { language, value } = this.props
    // const style = allCodeStyle[
    //   Object.keys(allCodeStyle)[Math.floor(Math.random() * Object.keys(allCodeStyle).length)]
    // ]

    return (
      <figure className='highlight'>
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
  }
}

export default CodeBlock
