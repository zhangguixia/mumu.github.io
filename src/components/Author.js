import { Avatar,Divider} from 'antd';
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons';
import '../style/components/author.css'


const Author = () => {
     
    return(
        <div className='author-div comm-box'>
             <div> <Avatar size="100" src="file:///Users/bytedance/Library/Containers/com.tencent.xinWeChat/Data/Library/Application%20Support/com.tencent.xinWeChat/2.0b4.0.9/cdd2a061be1b67bc65d3cc0e5936affe/Message/MessageTemp/e2bf6abdf647ff411bbfa4cb421adb65/Image/3371718960070_.pic.jpg"/></div>
             <div className='author-introduction'>
             《玫瑰的故事》热播后,剧中的几位男主角都走红了。你如何可看待《玫瑰的故事》上线后引发的各种争议?
                <Divider>社交账号</Divider>
                <Avatar size={28} className='account'><GithubOutlined className='account'/></Avatar>
                <Avatar size={28} className='account'><QqOutlined /></Avatar>
                <Avatar size={28} className='account'><WechatOutlined /></Avatar>
             </div>
        </div>
    )
}

export default Author;
