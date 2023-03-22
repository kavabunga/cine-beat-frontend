import './ApiInfo.css';

export default function ApiInfo({ message, type }) {
  return <span className={`api-info api-info_type_${type}`}>{message}</span>;
}
