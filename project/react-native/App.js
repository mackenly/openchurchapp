import * as React from "react"
import { Provider } from "@draftbit/ui"
import { AppLoading } from "expo"

import cacheAssetsAsync from "./utilities/cacheAssetsAsync"
import NewScreen from "./screens/NewScreen"

export default class App extends React.PureComponent {
  state = {
    isReady: false
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={cacheAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <Provider>
        <NewScreen />
      </Provider>
    )
  }
}
