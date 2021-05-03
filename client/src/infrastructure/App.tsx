import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppRouting from 'infrastructure/router'

import { Container, Loader } from 'infrastructure/components/ui'

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loader show />}>
        <Switch>
          <Container className="container">
            {AppRouting().map(({ path, component }) => (
              <Route key={path} exact path={path} component={component} />
            ))}
          </Container>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
