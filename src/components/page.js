import Link from 'next/link';
import { useSelector } from 'react-redux';

// Components
import Counter from './counter';

function Page({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => state.user.placeholderData);
  const error = useSelector((state) => state.user.error);

  return (
    <div>
      <h1>{title}</h1>

      <Counter />

      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>

      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}

      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default Page;
