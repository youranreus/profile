import React from "react";
import style from './style.module.scss'

export default function Loading(props) {
    return (
        <div className={[style.loading, (!props.loading ? style['fade-out'] : '')].join(' ')}>
            <div>
                <p>{props.loading ? '少女祈祷中' : '锵锵锵~'}</p>
            </div>

            <div className={style.hitokoto}>
                <span>{props.sentence ? props.sentence : ''}</span>
            </div>
        </div>
    )
}