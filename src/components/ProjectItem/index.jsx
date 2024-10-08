/**
 * @author 季悠然
 * @date 2022-03-28
 */
import style from './style.module.scss'
import { Typography, Col, Row } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProjectItem(props) {
  const { title, desc, url, github } = props
  const [ghData, setGhData] = useState(null)
  const { Text } = Typography

  useEffect(() => {
    axios.get('https://api.github.com/repos/' + github).then((res) => {
      setGhData(res.data)
    })
  }, [])

  const jump = () => {
    if (url || github)
      window.open(url || 'https://github.com/' + github, '_blank')
  }

  return (
    <div className={style.item} onClick={jump}>
      <h4>{title}</h4>
      <p>{desc || ghData.description}</p>
      <div className={style.footer}>
        <Row>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className={style.meta}>
              <span>{ghData ? ghData.language : 'loading'}</span>
              {ghData ? <span> · {ghData.stargazers_count} stars</span> : ''}
            </div>
          </Col>
          <Col
            xs={0}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            style={{ textAlign: 'right', position: 'relative', zIndex: '3' }}
          >
            <div className={style.btn}>
              {github ? (
                <Text
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  link={{
                    href: 'https://github.com/' + github,
                    target: '_blank',
                  }}
                >
                  Github
                </Text>
              ) : (
                ''
              )}
              {url ? (
                <Text
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  link={{ href: url, target: '_blank' }}
                  style={{ marginLeft: 10 }}
                >
                  访问
                </Text>
              ) : (
                ''
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
