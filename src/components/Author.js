import { Avatar,Divider} from 'antd';
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons';
import '../style/components/author.css'


const Author = () => {
     
    return(
        <div className='author-div comm-box'>
             <div> <Avatar size="100" src="sun.jpeg"/></div>
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
