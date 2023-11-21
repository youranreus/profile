/**
 * @author 季悠然
 * @date 2021-12-29
 */
import axios from 'axios'

export const getProfile = () =>
  axios.get('https://mdb.exia.xyz:21723/config/get?slug=profile')
