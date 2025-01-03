import Display from './component/Display';
import styles from './App.module.css';
import ButtonsContainer from './component/ButtonsContainer';

function App() {
 return <div className={styles.calculator}>
   <Display></Display>
   <ButtonsContainer></ButtonsContainer>
 </div>
}

export default App
