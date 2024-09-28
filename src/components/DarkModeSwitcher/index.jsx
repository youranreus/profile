/**
 * @author 季悠然
 * @date 2022-03-28
 */

import { Button } from '@douyinfe/semi-ui'
import { IconMoon, IconSun } from '@douyinfe/semi-icons'
import { useEffect, useState } from 'react'

export default function DarkModeSwitcher() {
  const [mode, setMode] = useState(
    localStorage.getItem('dark') === 'true' || false
  )

  useEffect(() => {
    document.body.setAttribute('theme-mode', mode ? 'dark' : '')
    localStorage.setItem('dark', mode.toString())
  }, [mode])

  useEffect(() => {
    document.body.setAttribute(
      'theme-mode',
      localStorage.getItem('dark') === 'true' ? 'dark' : ''
    )
  }, [])

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
      <Button
        theme={'borderless'}
        size={'large'}
        icon={mode ? <IconMoon /> : <IconSun />}
        onClick={() => {
          setMode(!mode)
        }}
      />
    </div>
  )
}
