import './ApiError.css';

export default function ApiError({ message }) {
  return <span className='api-error'>{message}</span>;
}
