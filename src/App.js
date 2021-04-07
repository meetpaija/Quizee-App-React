import { Container, Row, Jumbotron } from "react-bootstrap";
import "./App.css";
import Users from "./components/Users";
import store from './store/configureStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Jumbotron>
          <h1>Welcome to Quizee!!</h1>
        </Jumbotron>
        <Row>
          <Users />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
