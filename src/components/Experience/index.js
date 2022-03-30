/**
 * @author 季悠然
 * @date 2022-03-29
 */
import {Timeline} from '@douyinfe/semi-ui';
import style from './style.module.scss'

export default function Experience(props) {
    const {data} = props
    return (
        <div className={style.exp}>
            <h2>{data.title}</h2>
            <div className={style.list}>
                <Timeline dataSource={data.exp}/>
            </div>

        </div>
    )
}