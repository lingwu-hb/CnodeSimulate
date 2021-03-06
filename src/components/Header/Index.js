import React, { Component } from 'react'
import style from './Index.module.scss'
import CSSModules from 'react-css-modules'
import { Modal, Icon } from 'antd'
/**
 * 网站的顶部Header组件
 */
class Header extends Component {
  /**
   * 给state设置默认值
   * P.S. 另外一种设置方法见ProfilePanel/Index.js文件
   */
  state = { visible: false }


  /**
   * 隐藏Modal(模态)框
   */
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  /**
   * 显示Modal(模态)框
   */
  showModal = () => {
    this.setState({
      visible: true
    })
  }
    search = () =>{
    if (document.getElementById("search_input").value != "") {
      window.open ("https://www.baidu.com/s?wd=" + "site:cnodejs.org " +document.getElementById("search_input").value);
      document.getElementById("search_input").value = "";
    }
    return false;
  }//搜索跳转百度

   onKeyPress = (e) => {
    var keyCode = null;

    if(e.which)
      keyCode = e.which;
    else if(e.keyCode)
      keyCode = e.keyCode;

    if(keyCode == 13) {
      this.search();
      return false;
    }
    return true;
  }


  render() {
    return (
      <div styleName="header">
        <div>
          <a href="/">
            <img
              src={require('@src/assets/image/cnodejs.svg')}
              alt="网站logo"
            />
          </a>
          <a >
          <form onSubmit={this.search} className="search-box">
            <input autoFocus id="search_input" className="search-txt" type="text" autoComplete="off"
                   placeholder="Type to search"  οnkeypress={this.onKeyPress(Event)}/>
          </form>
          </a>
          <a>
            <span className="search-btn" onClick={this.search} >
              搜索
            </span>
          </a>

          <span onClick={this.showModal} className="about">关于</span>

        </div>
        <Modal
          title="关于本项目"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          {/* P.S. 当使用_blank时有一个容易忽略的安全漏洞，需要注意：https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=zh-cn */}
          <p>
            作者：
            <a
              href="https://github.com/panningzhi"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              盘凝知
            </a>
            <a> / </a>
            <a
                href="https://github.com/lingwu-hb"
                target="_blank"
                rel="nofollow noopener noreferrer">
              韩博
            </a>
            <a> / </a>
            <a
                href="https://github.com/ChenZhe0"
                target="_blank"
                rel="nofollow noopener noreferrer">
              陈哲
            </a>
          </p>
          <p>
            源码：
            <Icon type="star" theme="twoTone" twoToneColor="#eb2f96" />
            <a
              href="https://github.com/lingwu-hb/CnodeSimulate"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              CnodeSimulate
            </a>
            <Icon type="star" theme="twoTone" twoToneColor="#eb2f96" />
            &nbsp;欢迎Star~&nbsp;
            <Icon type="star" theme="twoTone" twoToneColor="#eb2f96" />
          </p>
          <div>
            <p>技术栈：</p>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Ant Design</li>
              <li>Axios</li>
              <li>CnodeJS API</li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CSSModules(Header, style)
