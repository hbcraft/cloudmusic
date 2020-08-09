// 只使用name进行路由跳转
interface Route {
  name: string;
}
interface History {
  routes: Array<Route>;
  current: number;
  canForward: boolean;
  canBack: boolean;
}
interface State {
  history: History;
}

const history: History = {
  routes: [],
  current: -1,
  canForward: false,
  canBack: false
}
export default history

export const pushHistory = ({ history }: State, ruteName: string) => {
  if (history.current === history.routes.length - 1) {
    if (history.current !== -1 && history.routes[history.routes.length - 1].name === ruteName) return
  } else {
    history.routes.splice(history.current + 1)
  }
  history.routes.push({ name: ruteName })
  history.current++
  history.canForward = false
  if (history.current !== 0) {
    history.canBack = true
  }
}
export const forwardHistory = ({ history }: State) => {
  if (history.canForward) {
    history.current++
    history.canBack = true
    if (history.current === history.routes.length - 1) {
      history.canForward = false
    }
  }
}
export const backHistory = ({ history }: State) => {
  if (history.canBack) {
    history.current--
    history.canForward = true
    if (history.current === 0) {
      history.canBack = false
    }
  }
}
