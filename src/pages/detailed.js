import React from 'react';
import '../style/components/header.css'
import { Row,Col,Breadcrumb,Affix } from 'antd';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../style/pages/detailed.css'
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
//需要处理 HTML，请使用 remark-gfm 或 rehype-raw 插件。
import remarkGfm from 'remark-gfm';  
import rehypeRaw from 'rehype-raw';
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

const Detailed = () => {

  let markdown = 
  '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor** \n' +
  '> Mditor是一个简洁、易于集成、方便扩展、期望舒服的编写markdown的编辑器,仅此而已...\n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~\n\n'+
  '\`console.log(111)\` \n\n' +
  '# P02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '***\n\n\n'+
  '# P03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# P04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# P05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# P06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# P07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '```var a=11;```'

  return(
    <div>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
                <div className='bread-div'>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href='/'>视频列表</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href='/'>文章xxx</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='detailed-title'>A.Shu阿薯个人Blog（更新第10章）</div>
                <div className='list-icon center'>
                        <span><CalendarOutlined />2019-06-28</span>
                        <span><FolderOutlined />视频教程</span>
                        <span><FireOutlined />5864人</span>
                </div>
                <div>
                    <div className='detailed-content'>
                        <ReactMarkdown
                        children={markdown}  //react-markdown中 要求使用 children，不再支持source属性
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]} //Html标签是否进行转换, 已移除 escapeHtml 属性
                        />
                    </div>   
                </div>
            </div>
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author />
              <Advert />
              <Affix offsetTop={5}>
                <div className='detailed-nav comm-box'>
                    <div className='nav-title'>文章目录</div>
                    <MarkNav 
                      className='article-menu'
                      source={markdown}
                      //  headingTopOffset={0}  //锚点距离顶部的位置
                      ordered={false}  // 是否有编号                    
                    />
                </div>
              </Affix>
          </Col>
          <Footer />
      </Row>
    </div>
  );

}
  
export default Detailed;