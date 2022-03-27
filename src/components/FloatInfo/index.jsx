import style from './style.module.scss'
import {Avatar, Space, Tag} from '@douyinfe/semi-ui';

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
                                                   style={item.style || {}}>{item.title}</Tag>))
                        }
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default FloatInfo