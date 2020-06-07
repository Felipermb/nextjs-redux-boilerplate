import { useDispatch } from 'react-redux';

// Components
import Page from '../components/page';

// Actions
import { loadData } from '../redux/modules/userData/actions';

const Index = () => {
  const dispatch = useDispatch();

  dispatch(loadData());

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

export default Index;