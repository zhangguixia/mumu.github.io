import React,{useState} from 'react';
import { Row,Col,List } from 'antd';
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../style/components/header.css'
import '../style/pages/home.css'
import '../style/components/author.css'


const Home = () => {
    const [mylist,setMylist] = useState([
        {title:'《玫瑰的故事》全网大火后，“奇怪”的现象出现了，林更新没说错',context:'《玫瑰的故事》热播后，剧中的几位男主角都走红了。彭冠英饰演的庄国栋一出场便以精英型男的形象实力吸粉。然而，随着剧情的展开，庄国栋的人设逐渐崩塌，他骨子里的自私自利、逃避责任的本性逐渐显露，使观众对精英型男的魅力彻底幻灭。观众们从最初的兴奋迅速变得冷淡，甚至每当看到庄国栋和黄亦玫有任何亲密接触时，都会下意识地皱眉并表现出排斥。千呼万唤始出来，好不容易送走了庄国栋，方协文上线后却让观众更加愤怒。'},
        {title:'《金庸武侠世界》,铁血丹心来袭,播出时间,非常友好',comtext:'550元路限着胖哥学CDDVD发布报告不给你回复不懂哦if hi斤哦吗哦大家哦家里默默即将拍卖狂魔i看就哦就哦墨迹'},
        {title:'收视率最高的电视剧Top10,第一想不到',conteext:'50元50元路限着胖哥学CDDVD发布报告不给你回复不懂哦if hi斤哦吗哦大家哦家里默默即将拍卖狂魔i看就哦就哦墨迹'},
        {title:'技术胖关注前端技术',context:'5元跟着胖50元路限着胖哥学CDDVD发布报告不给你回复不懂哦if hi斤哦吗哦大家哦家里默默即将拍卖狂魔i看就哦就哦墨迹'}
    ])

    return(
        <div>
          <Header />
          <Row className='comm-main' type='flex' justify='center'>
            {/* Ant Design 栅格系统中的属性，用于定义响应式布局。它们代表不同屏幕尺寸下的列数占比。 */}
            {/* 在极小屏幕（手机，宽度 < 576px）下，占满整行（24列）。
            在小屏幕（平板，宽度 ≥ 576px）下，占满整行（24列）。
            在中等屏幕（宽度 ≥ 768px）下，占 16 列。
            在大屏幕（宽度 ≥ 992px）下，占 18 列。
            在超大屏幕（宽度 ≥ 1200px）下，占 14 列。 */}
              <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                <List
                    header={<div>最新日志</div>}
                    itemLayout='vertical'
                    dataSource={mylist}
                    renderItem={item => (
                        <List.Item>
                            <div className='list-title'> {item.title}</div>
                            <div className="list-icon">
                                <span><CalendarOutlined />2019-06-28</span>
                                <span><FolderOutlined />视频教程</span>
                                <span><FireOutlined />5864人</span>
                            </div>
                            <div className='list-context'> {item.context}</div>
                        </List.Item>
                    )}
                />
              </Col> 
              <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
                <Advert />
              </Col>
          </Row>

          <Footer />
        </div>
      );
}
  
export default Home;