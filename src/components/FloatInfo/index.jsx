import style from './style.module.scss'
import { Avatar, Space, Tag } from '@douyinfe/semi-ui';
import { IconGithubLogo, IconMale, IconBookmark, IconMapPin } from '@douyinfe/semi-icons';

function FloatInfo(props) {

    if (props.profile === null) return (<div>加载中</div>);

    const tags = [
        {
            title: '前端',
            color: 'blue'
        },
        {
            title: '足球',
            color: 'violet'
        },
        {
            title: '料理',
            color: 'teal'
        },
        {
            title: '音乐',
            color: 'green'
        },
        {
            title: '明日方舟',
            color: 'white'
        }
    ]

    return (
        <div className={style.Info}>
            <div className={[style.block, style.basic].join(' ')} style={{textAlign: "center"}}>
                <Avatar src={props.profile.home.avatar} size={"extra-large"}/>
                <h2><span>曾仲</span>方</h2>
                <p>{props.profile.home.username}</p>
                <div style={{marginTop: "1rem"}}>
                    <Space wrap>
                        {
                            tags.map(item => (<Tag size={"large"} color={item.color || ''}
                                                   style={item.style || {}} key={item.title}>{item.title}</Tag>))
                        }
                    </Space>
                </div>
            </div>
            <div className={[style.block, style.other].join(' ')}>
                <ul>
                    <li><IconMale size={"extra-large"} className={style.icon} style={{color: 'rgba(var(--semi-light-blue-2), 1)'}}/> <span className={style.text}>蓝孩纸</span></li>
                    <li><IconBookmark size={"extra-large"} className={style.icon} style={{color: 'rgba(var(--semi-blue-5), 1)'}}/> <span className={style.text}>SZTU</span></li>
                    <li><IconMapPin size={"extra-large"} className={style.icon} style={{color: 'rgba(var(--semi-cyan-6), 1)'}}/> <span className={style.text}>Shenzhen, China</span></li>
                    <li><IconGithubLogo size={"extra-large"} className={style.icon}/> <span className={style.text}>@youranreus</span></li>
                </ul>
            </div>
        </div>
    )
}

export default FloatInfo