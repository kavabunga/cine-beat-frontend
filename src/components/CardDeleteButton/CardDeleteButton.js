import './CardDeleteButton.css';

export default function CardDeleteButton({ onClick }) {
  return (
    <button
      className='card-delete-button app__button'
      type='button'
      onClick={onClick}
    />
  );
}
