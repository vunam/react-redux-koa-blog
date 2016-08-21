import send from 'koa-send'
import path from 'path'

export default function *renderView() {
  const newPath = this.path.replace('/assets', '')
  const root = path.join(__dirname, '../../public')
  yield send(this, newPath , { root })
}
